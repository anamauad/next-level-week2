import React, { InputHTMLAttributes } from "react";

import "./styles.css";

// extender de InputHTMLAttributes faz com que possam ser passados
// a este componente todos os atributos da tag input do HTML
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

// usa-se o ...rest para não ter que definir individualmente todas
// as propriedades e repassar ao input
const Input: React.FC<InputProps> = ({ label, id, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} {...rest} />
    </div>
  );
};

export default Input;
