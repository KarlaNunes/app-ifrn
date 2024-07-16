import React from "react";
import { ButtonContent, Button as StyledButton } from './styles'

type ButtonProps = {
    content: string;
    bgColor: string;
}

export function Button({ content, bgColor }: ButtonProps) {
    return (
        <StyledButton bgColor={bgColor}>
            <ButtonContent>
                {content}
            </ButtonContent>
        </StyledButton>
    );
}