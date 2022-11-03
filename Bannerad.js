import React from "react";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { View } from "react-native";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-2680809045744286/6543162042";

function Bannerad() {
  return (
    <View style={{ marginTop: 20, position: 'absolute', bottom: 20, zIndex: 200000}}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

export default Bannerad;
