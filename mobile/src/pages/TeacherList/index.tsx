import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import api from "../../services/api";

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  async function handleFiltersSubmit() {
    if (!subject || !week_day || !time) {
      return;
    }
    loadFavorites();

    try {
      const response = await api.get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(response.data || []);
      if (!response.data || response.data.length < 1) {
        console.log("Não há proffys disponíveis!");
      } else {
        setIsFiltersVisible(false);
      }
    } catch (error) {
      console.log("Houve um erro na busca");
    }
  }

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favTeachers = JSON.parse(response);
        const favIds = favTeachers.map((teacher: Teacher) => teacher.id);
        setFavorites(favIds);
      }
    });
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton>
            <Feather
              name="filter"
              size={20}
              color="#fff"
              onPress={handleToggleFiltersVisible}
            />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Disciplina</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a disciplina?"
              placeholderTextColor="#c1bccc"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana (1 a 5)</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder="Qual a dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        // padding é melhor definir aqui do que no styles
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
