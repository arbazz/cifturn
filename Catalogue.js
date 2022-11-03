import React from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";
import Product from "./Product";

export default function Catalogue({data,handleFav}) {

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item,index}) =><Product item={item} handleFav={handleFav} index={index}/>}
        keyExtractor={(item,index) => index}
        contentContainerStyle={{paddingBottom:100}}
        maxToRenderPerBatch={20}
        ListFooterComponent={() => (
          <View style={{height: 140}}/>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexGrow: 1
  },
});
