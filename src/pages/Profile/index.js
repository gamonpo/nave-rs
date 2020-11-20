import React from 'react';
import api from '../../services/api';

import { parseISO, format } from 'date-fns';

import { MaterialIcons, Foundation } from '@expo/vector-icons';

import { Avatar, Info, Ico, Action } from './styles';

import colors from '../../style/colors';

import Header from '../../components/Header';
import { Button } from '../../components/SmallButton/styles';
import { Container, Label } from '../../components/Form/styles';
import { Alert } from 'react-native';

import img from '../../images/img_profile.png';

export default function Profile({ route, navigation }) {
  const { item, token } = route.params;

  console.log(token);

  const ad_date = parseISO(item.admission_date);
  const bir_date = parseISO(item.birthdate);

  const ad_date_formated = format(ad_date, "dd'/'MM'/'yyyy");
  const bir_date_formated = format(bir_date, "dd'/'MM'/'yyyy");

  const removeNaver = () => {
    try {
      async function deleteNaver() {
        const response = await api.delete(`navers/${item.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response) {
          Alert.alert('Excluído com sucesso!');

          navigation.navigate('Home');
        }
      }
      deleteNaver();
    } catch (error) {
      Alert.alert('Não foi possível excluir este naver!');
    }
  };

  return (
    <Container>
      <Header navigation={navigation} />

      <Avatar source={img} />

      <Label
        style={{
          fontFamily: 'Montserrat_600SemiBold',
          fontSize: 22,
          margin: 10,
        }}
      >
        {item.name}
      </Label>

      <Label
        style={{
          fontFamily: 'Montserrat_500Medium',
          margin: 10,
        }}
      >
        {item.job_role}
      </Label>

      <Info>
        <Label
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            margin: 4,
          }}
        >
          Idade
        </Label>

        <Label
          style={{
            fontFamily: 'Montserrat_400Regular',
            margin: 4,
            marginBottom: 10,
          }}
        >
          {bir_date_formated}
        </Label>

        <Label
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            margin: 4,
          }}
        >
          Tempo de empresa
        </Label>

        <Label
          style={{
            fontFamily: 'Montserrat_400Regular',
            margin: 4,
            marginBottom: 10,
          }}
        >
          {ad_date_formated}
        </Label>

        <Label
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            margin: 4,
          }}
        >
          Projetos que participou
        </Label>

        <Label
          style={{
            fontFamily: 'Montserrat_400Regular',
            margin: 4,
          }}
        >
          {item.project}
        </Label>

        <Action>
          <Button
            style={{
              backgroundColor: `${colors.white}`,
              borderWidth: 1,
              borderStyle: 'solid',
              flexDirection: 'row',
              margin: 2,
              left: 0,
            }}
            onPress={() =>
              Alert.alert(
                'Excluir naver',
                'Tem certeza que deseja excluir este naver?',
                [
                  {
                    text: 'Cancelar',
                    style: 'cancel',
                  },
                  {
                    text: 'Sim',
                    onPress: removeNaver,
                  },
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
                color: `${colors.primary}`,
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
              left: 40,
            }}
            onPress={() => navigation.navigate('EditNaver', { item: item, token: token })}
          >
            <Ico>
              <MaterialIcons name="edit" size={20} color="white" />
            </Ico>
            <Label
              style={{
                fontFamily: 'Montserrat_600SemiBold',
                color: `${colors.white}`,
              }}
            >
              Editar
            </Label>
          </Button>
        </Action>
      </Info>
    </Container>
  );
}
