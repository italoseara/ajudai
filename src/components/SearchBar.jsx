import { TextInput, StyleSheet } from "react-native";
import g, { colors } from "../styles/global";

export default function SearchBar({ search, setSearch, style }) {
  return (
    <TextInput
      style={[styles.searchBar, style]}
      placeholder="Buscar serviços..."
      value={search}
      onChangeText={setSearch}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    ...g.input,
    marginBottom: 16,
    borderColor: colors.border,
    width: "100%",
  },
});
