import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TeacherItem from "../../components/TeacherItem";
import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input id="subject" label="Disciplina" />
          <Input id="week_day" label="Dia da semana" />
          <Input id="time" label="Hora" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
