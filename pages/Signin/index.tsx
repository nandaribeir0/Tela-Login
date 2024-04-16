import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../src/components/screen/button';
import { Input } from '../../src/components/screen/input';
import { Container, Content, Title } from './styles';

export const SignIn: React.FunctionComponent = () => {
    return (
        <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
        >
            <Container>
                <Content>
                    <Title>login</Title>
                    <Input placeholder="Email"/>
                    <Input placeholder="Senha"/>
                    <Button title='Entrar'/>
                </Content>
            </Container>

        </ScrollView>
    );
};