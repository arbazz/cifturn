import { View, Text, TouchableOpacity,Image} from "react-native";
import Search from "./Search";


export default function Header({
  noFav,
  goBack,
  lftFuntion,
  search,
  setSearch,
  clear,
}) {
  return (
    <View
      style={{
        backgroundColor: "#b5f0f0",
        height: 60,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={goBack}>
        {goBack && <Image
        style={{width: 20, height: 20}}
        source={require("./assets/back.png")}/>}
      </TouchableOpacity>
      <View style={{width: '70%', }}>
     {!noFav && <Search style={{marginLeft: 30,}} search={search} setSearch={setSearch} clear={clear} />}
      </View>

      <TouchableOpacity onPress={lftFuntion}>
        {!noFav && <Text style={{ color: "black", fontWeight: 'bold' }}>My Items</Text>}
      </TouchableOpacity>
    </View>
  );
}
