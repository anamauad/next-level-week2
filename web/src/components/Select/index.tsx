import React, { OptionHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends OptionHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, id, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} {...rest}>
        <option value="" selected disabled hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
