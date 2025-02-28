import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import styles from "./styles";

import backIco from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIco} resizeMode="contain"></Image>
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain"></Image>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
};

export default PageHeader;
