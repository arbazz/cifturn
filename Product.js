import React from "react";
import { View, Text, StyleSheet, Image , TouchableOpacity} from "react-native";


export default function Product({ item, index, data, handleFav }) {
  let curr = `./assets/${index + 1}.png`;
  return (
    <View style={{ marginTop: 20 }}>
      <View style={styles.header}>
        <View style={styles.ln}>
          <Text style={styles.headerIcon}>LIN: </Text>
        </View>
        <View style={styles.lnN}>
          <Text style={styles.headerIcon}>{item.LN} </Text>
        </View>
        <View style={styles.cat}>
          <Text style={styles.headerIcon}>{item.Categories}</Text>
        </View>
      </View>
      <View style={styles.pr}>
        <Image style={styles.image} resizeMode="stretch" source={item.assets} />
        <View style={styles.deContainer}>
          <View>
            <TouchableOpacity
             onPress={()=> handleFav(item.Name)}
             >
              {item.fav ?<Image
                source={require("./assets/fav1.jpeg")}
                style={styles.favimg}
              />
              :
              <Image
                source={require("./assets/fav.png")}
                style={styles.favimg}
              />}
            </TouchableOpacity>
            <Text style={styles.bold}>{item.Name}</Text>
            <Text style={styles.desc}>{item.Description}</Text>
          </View>
          <View style={[styles.price, { marginTop: 20 }]}>
            <Text>Unit price: </Text>
            <Text>{item.price}</Text>
          </View>
          {!!item["FOLIAGE GREEN"] && (
            <View style={styles.price}>
              <Text>FOLIAGE GREEN: </Text>
              <Text>{item["FOLIAGE GREEN"]}</Text>
            </View>
          )}
          {!!item["MAROON"] && (
            <View style={styles.price}>
              <Text>MAROON: </Text>
              <Text>{item["MAROON"]}</Text>
            </View>
          )}
          {!!item["SAND"] && (
            <View style={styles.price}>
              <Text>SAND: </Text>
              <Text>{item["SAND"]}</Text>
            </View>
          )}
          {!!item["GREEN"] && (
            <View style={styles.price}>
              <Text>GREEN: </Text>
              <Text>{item["GREEN"]}</Text>
            </View>
          )}
          {!!item["TAN"] && (
            <View style={styles.price}>
              <Text>TAN: </Text>
              <Text>{item["TAN"]}</Text>
            </View>
          )}
          {!!item["UNIVERSAL CAMO"] && (
            <View style={styles.price}>
              <Text>UNIVERSAL CAMO: </Text>
              <Text>{item["UNIVERSAL CAMO"]}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderColor: "black",
    borderWidth: 2,
    flexDirection: "row",
    padding: 2,
  },
  ln: {
    width: "20%",
    borderRightColor: "black",
    borderRightWidth: 2,
    alignItems: "center",
  },
  lnN: {
    width: "30%",
    alignItems: "center",
    borderRightColor: "black",
    borderRightWidth: 2,
  },
  cat: {
    textAlign: "center",
    alignItems: "center",
  },
  headerIcon: {
    fontWeight: "bold",
  },
  image: {
    width: "50%",
    height: 200,
    marginTop: 30,
  },
  pr: {
    flexDirection: "row",
    alignItems: "center",
  },
  deContainer: {
    width: "50%",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 15,
  },
  desc: {
    marginTop: 30,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prcontainer: {},
  favimg: {
    width: 20,
    height: 20,
    alignSelf: "flex-end",
  },
});
