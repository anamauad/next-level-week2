import React from "react";
import { View, ScrollView, Text, TextInput } from "react-native";

import styles from "./styles";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Disciplina</Text>
          <TextInput
            style={styles.input}
            placeholder="Qual a disciplina?"
            placeholderTextColor="#c1bccc"
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual a dia?"
                placeholderTextColor="#c1bccc"
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual o horário?"
                placeholderTextColor="#c1bccc"
              />
            </View>
          </View>
        </View>
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        // padding é melhor definir aqui do que no styles
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
