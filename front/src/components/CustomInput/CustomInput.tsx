import React from 'react';
import styles from './CustomInput.module.css';

type CustomInputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({ name, value, onChange, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>{name}</label>
      <input
        id={name}
        type="text"
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
