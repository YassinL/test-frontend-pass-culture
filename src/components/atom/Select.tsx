import React, { ChangeEventHandler } from "react";

interface ISelect {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  id: string;
  label: string;
}

export const Select =({ options, value, onChange, id, label }: ISelect) => {
  const handleValueChange: ChangeEventHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };

  return (
    <>
    <label htmlFor={id}>{label} : </label>
    <select value={value} onChange={handleValueChange} id={id}>
      {options?.map((option, i) => (
        <option key={i} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </select>
    </>
  );
};
