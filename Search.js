import React from "react";
import { View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default function Search({ spinnerVisibility, setSearch, clear, style }) {
  return (
    <SearchBar
    style={style}
      height={50}
      fontSize={24}
      fontColor="#fdfdfd"
      iconColor="#fdfdfd"
      shadowColor="#282828"
      cancelIconColor="#fdfdfd"
      spinnerVisibility={spinnerVisibility}
      placeholder="Search..."
      onChangeText={e=>setSearch(e)}
      onClearPress={clear}
    />
  );
}
