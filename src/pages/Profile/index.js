import React from 'react'

import { MaterialIcons, Foundation } from '@expo/vector-icons'

import { Avatar, Info, Ico, Action } from './styles'

import colors from '../../style/colors'

import Header from '../../components/Header'
import { Button } from '../../components/SmallButton/styles'
import { Container, Label } from '../../components/Form/styles'
import { Alert } from 'react-native'

export default function Profile ({ route, navigation }) {
  const { item } = route.params

  return (
    <Container>
      <Header navigation={navigation} />

        <Avatar source={item.picture} />

        <Label
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 22,
            margin: 10
          }}
        >
          {item.name}
        </Label>

        <Label
          style={{
            fontFamily: 'Montserrat_500Medium',
            margin: 10
          }}
        >
          {item.occupation}
        </Label>

        <Info>
          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            Idade
          </Label>

          <Label
            style={{
              fontFamily: 'Montserrat_400Regular',
              margin: 4,
              marginBottom: 10
            }}
          >
            Lorem Ipsum
          </Label>

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            Tempo de empresa
          </Label>

          <Label
            style={{
              fontFamily: 'Montserrat_400Regular',
              margin: 4,
              marginBottom: 10
            }}
          >
            Lorem Ipsum
          </Label>

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4
            }}
          >
            Projetos que participou
          </Label>

          <Label
            style={{
              fontFamily: 'Montserrat_400Regular',
              margin: 4
            }}
          >
            Lorem Ipsum
          </Label>

          <Action>
            <Button
              style={{
                backgroundColor: `${colors.white}`,
                borderWidth: 1,
                borderStyle: 'solid',
                flexDirection: 'row',
                margin: 2,
                left: 0
              }}
              onPress={() =>
                Alert.alert(
                  'Excluir naver',
                  'Tem certeza que deseja excluir este naver?',
                  [
                    {
                      text: 'Cancelar',
                      style: 'cancel'
                    },
                    {
                      text: 'Sim',
                      onPress: () => Alert.alert('Excluído com sucesso!')
                    }
                  ],
                  { cancelable: false }
                )
              }
            >
              <Ico>
                <Foundation name="trash" size={20} color="black" />
              </Ico>

              <Label
                style={{
                  fontFamily: 'Montserrat_600SemiBold',
                  color: `${colors.primary}`
                }}
              >
                Excluir
              </Label>
            </Button>

            <Button
              style={{
                backgroundColor: colors.primary,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: colors.primary,
                flexDirection: 'row',
                margin: 2,
                left: 40
              }}
            >
              <Ico>
                <MaterialIcons name="edit" size={20} color="white" />
              </Ico>
              <Label
                style={{
                  fontFamily: 'Montserrat_600SemiBold',
                  color: `${colors.white}`
                }}
              >
                Editar
              </Label>
            </Button>
          </Action>
        </Info>
    </Container>
  )
}
