import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Select from "../../components/Select";
import "./styles.css";
import api from "../../services/api";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState([]);

  // Caso quisesse fazer a busca assim que alterasse algum dos campos:
  // useEffect(() => {
  //   if (!subject || !week_day || !time) {
  //     return;
  //   }
  //   searchTeachers();
  // }, [subject, week_day, time]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    if (!subject || !week_day || !time) {
      return;
    }

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
        alert("Não há proffys disponíveis!");
      }
    } catch (error) {
      alert("Houve um erro na busca");
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            id="subject"
            label="Disciplina"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
            ]}
          />
          <Input
            id="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
