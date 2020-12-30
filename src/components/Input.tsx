import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid #fff;
`;

const InputElement = styled.input`
  width: 100%;
  outline: none;
  border: 0;
  padding: 12px;
  background: transparent;
  box-sizing: border-box;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any
}

const Input = ({ onChange, value }:InputProps) => {
  return (
    <InputWrapper>
      <InputElement
        placeholder={'할일을 입력하세요.'}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
