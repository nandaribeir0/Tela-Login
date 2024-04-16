import React, { PropsWithChildren } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";

export const Input: React.FunctionComponent<TextInputProps> = ({ ...otherProps }:
    PropsWithChildren<TextInputProps>) => {

        return (
            <Container>
                <TextInput placeholderTextColor="rgb(192,192,192)" {...otherProps} />
            </Container>
        );
    };
