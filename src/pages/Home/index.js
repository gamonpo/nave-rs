import React, { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { MaterialIcons, Foundation } from '@expo/vector-icons';

import api from '../../services/api';

import {
  SubHeader,
  Title,
  Navers,
  Naver,
  Img,
  Name,
  Ocuppation,
  Action,
  Delete,
  Edit,
  NPic,
} from './styles';

import HeadHome from '../../components/HeadHome';
import { Button } from '../../components/SmallButton/styles';
import { Container, Label } from '../../components/Form/styles';

import colors from '../../style/colors';

import img1 from '../../images/img1.png';

export default function Home({ route, navigation }) {
  const { token } = route.params;

  const [devs, setDevs] = useState([]);

  try {
    useEffect(() => {
      async function loadData() {
        const response = await api.get('navers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDevs(response.data);
      }

      loadData();
    });
  } catch (error) {
    Alert.alert('Não foi possível carregar os dados!');
  }

  const removeNaver = (item) => {
    async function deleteNaver() {
      await api.delete(`navers/${item.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    deleteNaver();
  };

  const renderItem = ({ item }) => (
    <Naver>
      <NPic onPress={() => navigation.navigate('Profile', { item: item, token: token })}>
        <Img source={img1} />
      </NPic>

      <Name style={{ fontFamily: 'Montserrat_600SemiBold' }}>{item.name}</Name>

      <Ocuppation style={{ fontFamily: 'Montserrat_500Medium' }}>
        {item.job_role}
      </Ocuppation>

      <Action>
        <Delete
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
                  text: 'Excluir',
                  onPress: () => removeNaver(item),
                },
              ]
            )
          }
        >
          <Foundation name="trash" size={20} color="black" />
        </Delete>

        <Edit onPress={() => navigation.navigate('EditNaver', { item: item, token: token })}>
          <MaterialIcons name="edit" size={20} color="black" />
        </Edit>
      </Action>
    </Naver>
  );

  return (
    <Container>
      <HeadHome navigation={navigation} />

      <SubHeader>
        <Title style={{ fontFamily: 'Montserrat_600SemiBold' }}>Navers</Title>

        <Button
          onPress={() => navigation.navigate('NewNaver', { token: token })}
        >
          <Label
            style={{ fontFamily: 'Montserrat_500Medium', color: colors.white }}
          >
            Adicionar naver
          </Label>
        </Button>
      </SubHeader>

      <Navers
        data={devs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
        numColumns={2}
      />
    </Container>
  );
}
