import React from "react";
import { TextInput } from "./styles";

type InputProps = {
    placeholder: string;
}

export function Input({ placeholder }: InputProps) {
    return (
        <TextInput
            placeholder={placeholder}
        />
    );  
}
