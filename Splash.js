import React from "react";
import { View,Image } from "react-native";

export default function Splash() {
  return (
    <View>
        <Image 
            source={require("./assets/splash.png")}
            style={{
                width: '100%',
                resizeMode: 'stretch',
                height: '100%',
            }}
        />
    </View>
  );
}
