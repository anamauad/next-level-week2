import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TeacherItem from "../../components/TeacherItem";
import Select from "../../components/Select";
import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            id="subject"
            label="Disciplina"
            options={[
              { value: "Artes", label: "Artes" },
              {
                value: "Conexão de equipamentos eletrônicos",
                label: "Conexão de equipamentos eletrônicos",
              },
              { value: "Costura", label: "Costura" },
              { value: "Matemática", label: "Matemática" },
              { value: "Lógica", label: "Lógica" },
            ]}
          />
          <Select
            id="week_day"
            label="Dia da semana"
            options={[
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
            ]}
          />
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
