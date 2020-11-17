import React from 'react'

import { ScrollView } from 'react-native'

import Header from '../../components/Header'
import { Container, Input, Label } from '../../components/Form/styles'
import { Button } from '../../components/LargeButton/styles'

import { Title, Info } from './styles'
import colors from '../../style/colors'

export default function NewNaver ({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
        <Title>
          <Label style={{ fontSize: 22 }}>Adicionar Naver</Label>
        </Title>

        <Info>
          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            Nome
          </Label>

          <Input
            placeholder={'Nome'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            Cargo
          </Label>

          <Input
            placeholder={'Cargo'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            Idade
          </Label>

          <Input
            placeholder={'Idade'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            Tempo de empresa
          </Label>

          <Input
            placeholder={'Tempo de empresa'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            Projetos que participou
          </Label>

          <Input
            placeholder={'Projetos que participou'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            URL da foto do naver
          </Label>

          <Input
            placeholder={'URL da foto do naver'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
          />

          <Button style={{ top: 10 }}>
            <Label
              style={{
                fontFamily: 'Montserrat_500Medium',
                color: colors.white
              }}
            >
              Salvar
            </Label>
          </Button>
        </Info>
      </ScrollView>
    </Container>
  )
}
