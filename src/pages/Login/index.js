import React, { useState } from 'react';

import { Alert } from 'react-native';

import api from '../../services/api';

import { Header, Logo, Form, Item } from './styles';

import img from '../../images/Logo.png';

import colors from '../../style/colors';

import { Button } from '../../components/LargeButton/styles';

import { Container, Input, Label } from '../../components/Form/styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginApp = () => {
    if ((!email && !password) || !email || !password) {
      Alert.alert('Informe as credenciais!');
    } else {
      try {
        async function loginIn() {
          {
            const response = await api.post('users/login', {
              email: email,
              password: password,
            });

            const { token } = response.data;

            if (response) {
              navigation.navigate('Home', {
                token: token,
              });
            }
          }
        }

        loginIn();
      } catch (error) {
        Alert.alert('Não foi possível fazer login!');
      }
    }
  };

  return (
    <Container>
      <Header>
        <Logo source={img} />
      </Header>

      <Form>
        <Item>
          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
            }}
          >
            Email
          </Label>

          <Input
            placeholder={'E-mail'}
            style={{ fontFamily: 'Montserrat_400Regular' }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </Item>

        <Item>
          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
            }}
          >
            Senha
          </Label>

          <Input
            placeholder={'Senha'}
            style={{ fontFamily: 'Montserrat_400Regular' }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </Item>

        <Button onPress={loginApp}>
          <Label
            style={{ fontFamily: 'Montserrat_500Medium', color: colors.white }}
          >
            Entrar
          </Label>
        </Button>
      </Form>
    </Container>
  );
}
