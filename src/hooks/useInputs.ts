import React, { useState, useCallback } from "react";

export default function useInputs(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputedValue:any = e.target.value;
    setValue(inputedValue);
  };

  const onReset = () => {
    setValue('');
  };

  return { onChange, onReset, value }
}
