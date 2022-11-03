import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { data } from "./data";
import Catalogue from "./Catalogue";
import Header from "./Header";
import Splash from "./Splash";
import Fav from "./Fav";
import Bannerad from "./Bannerad";
import AsyncStorage from "@react-native-async-storage/async-storage";

const main_data = "MAIN_DAtA";

export default function App() {
  const [splash, setSplah] = useState(true);
  const [search, setSearch] = useState("");
  const [catData, setCatData] = useState(data);
  const [storedData, setStoredData] = useState([]);
  const [fv, setFv] = useState(false);
  const [onlyFv, setOnlyFv] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSplah(false);
    }, 2000);
  }, []);

  const initiateData = async () => {
    const mainData = await AsyncStorage.getItem(main_data);
    if (mainData) {
      let parsed = JSON.parse(mainData);
      setStoredData(parsed);
      let d = parsed.filter((n) => n.fav);
      setOnlyFv(d);
      return;
    }
    await AsyncStorage.setItem(main_data, JSON.stringify(data));
    setStoredData(data);
  };
  useEffect(() => {
    initiateData();
  }, []);
  function find(items, text) {
    text = text.split(" ");
    return items.filter(function (item) {
      return text.every(function (el) {
        return item.content.indexOf(el.Name) > -1;
      });
    });
  }

  useEffect(() => {
    if (!search) setCatData(storedData);
    if (!data?.length || !search) return;
    let s = data.filter((o) =>
      o.Name.toLowerCase().includes(search.toLowerCase())
    );
    setCatData(s);
  }, [search, storedData]);

  const clear = () => {
    setCatData(storedData);
  };
  const handleFav = (name) => {
    if (!storedData.length) return;
    const index = storedData.findIndex((x) => x.Name === name);
    let temp = [...storedData];
    if (index < 0) return;
    temp[index].fav = temp[index].fav ? false : true;
    AsyncStorage.setItem(main_data, JSON.stringify(temp));
    setStoredData(temp);
    let d = temp.filter((n) => n.fav);
    setOnlyFv(d);
  };
  if (fv) {
    return (
      <>
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <SafeAreaView style={{ flex: 0, backgroundColor: "#b2aca8" }} />
          <SafeAreaView />
          <Header noFav={true} goBack={() => setFv(false)} />
          <Fav />
          <Catalogue data={onlyFv} handleFav={handleFav} />
          <Bannerad />
        </View>
      </>
    );
  }
  return (
    <>
      {!splash ? (
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <SafeAreaView style={{ flex: 0, backgroundColor: "#b2aca8" }} />
          <SafeAreaView />
          <Header lftFuntion={() => setFv(true)} search={search} setSearch={setSearch} clear={clear}/>
          <Catalogue data={catData} handleFav={handleFav} />
          <Bannerad />
        </View>
      ) : (
        <Splash />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
