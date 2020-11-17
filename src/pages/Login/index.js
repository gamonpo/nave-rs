import React from 'react'

import { Header, Logo, Form, Item } from './styles'

import img from '../../images/Logo.png'

import colors from '../../style/colors'

import { Button } from '../../components/LargeButton/styles'

import { Container, Input, Label } from '../../components/Form/styles'

export default function Login ({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={img} />
      </Header>

      <Form>
        <Item>
          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold'
            }}
          >
            Email
          </Label>

          <Input
            placeholder={'E-mail'}
            style={{ fontFamily: 'Montserrat_400Regular' }}
          />
        </Item>

        <Item>
          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold'
            }}
          >
            Senha
          </Label>

          <Input
            placeholder={'Senha'}
            style={{ fontFamily: 'Montserrat_400Regular' }}
          />
        </Item>

        <Button onPress={() => navigation.navigate('Menu')}>
          <Label style={{ fontFamily: 'Montserrat_500Medium', color: colors.white }}>Entrar</Label>
        </Button>
      </Form>
    </Container>
  )
}
