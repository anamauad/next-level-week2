import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import teachIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import api from "../../services/api";

function Landing() {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    let mounted = true;
    api.get("connections").then((response) => {
      if (mounted) {
        setTotalConnections(response.data.total || 0);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);

  function handleNavigateToTeachPage() {
    navigate("Teach");
  }
  function handleNavigateToStudyPage() {
    navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPage}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigateToTeachPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={teachIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections}{" "}
        {totalConnections === 1
          ? "conexão já realizada"
          : "conexões já realizadas"}{" "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
