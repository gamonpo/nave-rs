import React from 'react'

import { ScrollView } from 'react-native'

import Header from '../../components/Header'
import { Container, Input, Label } from '../../components/Form/styles'
import { Button } from '../../components/LargeButton/styles'

import { Title, Info } from './styles'
import colors from '../../style/colors'

export default function EditNaver ({ route, navigation }) {
  const { item } = route.params

  return (
    <Container>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
        <Title>
          <Label style={{ fontSize: 22 }}>Editar Naver</Label>
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
            value={item.name}
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
            value={item.occupation}
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
            value={item.age}
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
            value={item.time}
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
            value={item.project}
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
            value={item.url}
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
