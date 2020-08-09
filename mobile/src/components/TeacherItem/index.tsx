import React from "react";
import { View, Image, Text } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          // Precisa passar a url como objeto json
          source={{ uri: "http://github.com/anamauad.png" }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Ana Paula Mauad</Text>
          <Text style={styles.subject}>Lógica</Text>
        </View>
        <Text style={styles.bio}>
          Qualquer biografia {"\n"}
          abcdefgh muito coisa baboseira
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>
            Preço/hora {"   "}
            <Text style={styles.priceValue}>R$ 20,00</Text>
          </Text>
          <View style={styles.buttonsContainer}>
            <RectButton style={styles.favoriteButton}>
              <Image source={heartOutlineIcon} />
            </RectButton>
            <RectButton style={styles.contactButton}>
              <Image source={whatsappIcon} />
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
