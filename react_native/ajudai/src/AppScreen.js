import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const services = [
  {
    name: 'Maria Silva',
    location: 'Ilhéus, BA',
    service: 'Aulas de violão',
    rating: 4.8,
    reviews: 23,
    tags: ['Música', 'Ensino', 'Violão'],
  },
  {
    name: 'João Santos',
    location: 'Rio de Janeiro, RJ',
    service: 'Conserto de computadores',
    rating: 4.9,
    reviews: 45,
    tags: ['Tecnologia', 'Reparo'],
  },
  {
    name: 'Deide Costa',
    location: 'Belo Horizonte, BH',
    service: 'Tradução Inglês-Português',
    rating: 4.7,
    reviews: 18,
    tags: ['Idiomas', 'Tradução'],
  },
  {
    name: 'Nikole Ferreira',
    location: 'Brasília, DF',
    service: 'Aulas de retórica',
    rating: 1.3,
    reviews: 22,
    tags: ['Debate', 'Retórica'],
  },
  {
    name: 'Olavo de Carvalho',
    location: 'Brasília, DF',
    service: 'Aulas de Filosofia',
    rating: 2.2,
    reviews: 202,
    tags: ['Política', 'Filosofia'],
  },
];

function ServiceCard({ name, location, service, rating, reviews, tags }) {
  const handleClick = () => {
    Alert.alert('Perfil', `Você clicou no perfil de ${name}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}><Text style={styles.bold}>Localização:</Text> {location}</Text>
      <Text style={styles.info}><Text style={styles.bold}>Serviço:</Text> {service}</Text>
      <Text style={styles.info}><Text style={styles.bold}>Avaliação:</Text> {rating} ({reviews} avaliações)</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, idx) => (
          <View key={idx} style={styles.tag}><Text style={styles.tagText}>{tag}</Text></View>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Ver perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

function SearchBar({ search, setSearch }) {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Buscar serviços..."
      value={search}
      onChangeText={setSearch}
    />
  );
}

export default function AppScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços Disponíveis</Text>
      <SearchBar search={search} setSearch={setSearch} />
      <ScrollView contentContainerStyle={styles.list}>
        {services
          .filter(
            (service) =>
              service.name.toLowerCase().includes(search.toLowerCase()) ||
              service.location.toLowerCase().includes(search.toLowerCase()) ||
              service.service.toLowerCase().includes(search.toLowerCase()) ||
              service.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
          )
          .map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
  },
  info: {
    fontSize: 15,
    marginBottom: 2,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  tag: {
    backgroundColor: '#cce5ff',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    color: '#0056b3',
    fontSize: 13,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
