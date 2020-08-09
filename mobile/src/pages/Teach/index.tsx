import React from "react";

import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import teachBgImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Teach() {
  const { navigate } = useNavigation();

  function goBackToLandingPage() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={teachBgImage}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={goBackToLandingPage} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default Teach;
