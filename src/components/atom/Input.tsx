import React from "react";
import styled from "styled-components";

export interface IProps {
  id?: string;
  label?: string;
  value?: string;
  type?: string;
  name?: string;
  onChange: (value: string) => void;
//   minlength?: string;
//   maxlength?: string;
  required?: boolean;
}

export const Input = ({
  id,
  label,
  value,
  type,
  name,
  onChange,
//   minlength,
//   maxlength,
  required
}: IProps) => {
  const handleValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };

  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <Field
        id={id}
        value={value}
        type={type}
        name={name}
        onChange={handleValueChange}
        // minLength={minlength}
        // maxLength={maxlength}
        required={required}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.input``;
