import React from 'react';
import styles from './CustomInput.module.css';

type CustomInputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string; // Adicione a prop type
};

const CustomInput: React.FC<CustomInputProps> = ({ name, value, onChange, placeholder, type = 'text' }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>{name}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default CustomInput;
