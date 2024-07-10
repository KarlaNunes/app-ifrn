import React from "react";
import { TextInput } from "./styles";

type InputProps = {
    placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
    return (
        <TextInput
            placeholder={placeholder}
        />
    );  
}
