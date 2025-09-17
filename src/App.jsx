import { useState } from "react";

import "./styles/App.css";

const services = [
  {
    name: "Maria Silva",
    location: "Ilhéus, BA",
    service: "Aulas de violão",
    rating: 4.8,
    reviews: 23,
    tags: ["Música", "Ensino", "Violão"],
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    service: "Conserto de computadores",
    rating: 4.9,
    reviews: 45,
    tags: ["Tecnologia", "Reparo"],
  },
  {
    name: "Deide Costa",
    location: "Belo Horizonte, BH",
    service: "Tradução Inglês-Português",
    rating: 4.7,
    reviews: 18,
    tags: ["Idiomas", "Tradução"],
  },
  {
    name: "Nikole Ferreira",
    location: "Brasília, DF",
    service: "Aulas de retórica",
    rating: 1.3,
    reviews: 22,
    tags: ["Debate", "Retórica"],
  },
  {
    name: "Olavo de Carvalho",
    location: "Brasília, DF",
    service: "Aulas de Filosofia",
    rating: 2.2,
    reviews: 202,
    tags: ["Política", "Filosofia"],
  },
];

function ServiceCard({ name, location, service, rating, reviews, tags }) {
  const handleClick = () => {
    alert(`Você clicou no perfil de ${name}`);
  };

  return (
    <div className="service-card">
      <h2>{name}</h2>
      <p><strong>Localização:</strong> {location}</p>
      <p><strong>Serviço:</strong> {service}</p>
      <p><strong>Avaliação:</strong> {rating} ({reviews} avaliações)</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <button onClick={handleClick}>Ver perfil</button>
    </div>
  );
}

function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Buscar serviços..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h1>Serviços Disponíveis</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="service-list">
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
      </div>
    </div>
  );
}

export default App;
