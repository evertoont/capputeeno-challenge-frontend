"use client";

import { InputWrapper } from "./styles";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <InputWrapper {...props} />;
}
