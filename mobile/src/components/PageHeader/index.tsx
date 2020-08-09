import React from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import styles from "./styles";

import backIco from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

function PageHeader() {
  function handleGoBack() {}

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIco} resizeMode="contain"></Image>
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain"></Image>
      </View>

      <Text style={styles.title}>Proffys disponíveis</Text>
    </View>
  );
}

export default PageHeader;
