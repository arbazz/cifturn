import { Text, View, StyleSheet } from "react-native";

export default function Fav() {
  return (
    <View style={styles.container}>
      <Text style={styles.fav}>My Items</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexGrow: 1,
  },
  fav: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});
