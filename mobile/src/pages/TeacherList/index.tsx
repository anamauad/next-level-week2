import React from "react";
import { View, ScrollView } from "react-native";

import styles from "./styles";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />

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
