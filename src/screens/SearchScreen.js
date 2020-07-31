import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hook/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterByGeneration = (generation) => {
    return results.filter((result) => {
      return result.generation === generation;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={styles.list}>
        <ResultsList results={filterByGeneration("1")} title="Generation 1" />
        <ResultsList results={filterByGeneration("2")} title="Generation 2" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 5
  }
});

export default SearchScreen;
