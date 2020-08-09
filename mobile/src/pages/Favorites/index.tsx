import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import styles from "./styles";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favTeachers = JSON.parse(response);
        setFavorites(favTeachers);
      }
    });
  }

  // Como o useEffect é chamado somente quando a tela é carregada pela primeira vez,
  // o tab navigator não carrega a tela novamente.
  // Então para carregar a lista de novo, deve ser usado o useFocusEffect, mas
  // mas com cuidado para não causar loop, usando o React.useCallback.
  useFocusEffect(() => {
    React.useCallback(() => {
      loadFavorites();
    }, []);
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
