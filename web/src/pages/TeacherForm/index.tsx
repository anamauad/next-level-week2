import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input id="name" label="Nome completo" />
          <Input id="avatar" label="Avatar" />
          <Input id="whatsapp" label="WhatsApp" />
          <Textarea id="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input id="cost" label="Custo da sua aula por hora" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>
          <div className="schedule-item">
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
            <Input id="from" label="De" type="time" />
            <Input id="to" label="Até" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
