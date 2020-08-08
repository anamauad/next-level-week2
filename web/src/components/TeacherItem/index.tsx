import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/31990591"
          alt="Foto de Ana Paula Mauad"
        />
        <div>
          <strong>Ana Paula Mauad</strong>
          <span>Conexão de equipamentos eletrônicos</span>
        </div>
      </header>

      <p>
        Sou apaixonada por música clássica (especialmente piano) e também gosto
        de rock, pop, samba e choro.
        <br />
        <br />
        Para ouvir esta música com qualidade e também acompanhar os vídeos, é
        preciso conectar vários equipamentos eletrônicos, às vezes equipamentos
        antigos. Como muitas pessoas desconhecem como fazer exatamente isto,
        este curso irá mostrar as diferenças entre os conectores, a sua
        finalidade e as várias possibilidades de combinações.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
