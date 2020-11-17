import React, { useState } from 'react';
import { Alert } from 'react-native';
import { MaterialIcons, Foundation } from '@expo/vector-icons';
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

import Header from '../../components/Header';
import { Button } from '../../components/SmallButton/styles';
import { Container, Label } from '../../components/Form/styles';

import colors from '../../style/colors';

import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';

export default function Home({ navigation }) {
  const [devs, setDevs] = useState([
    {
      id: 1,
      name: 'Juliano Reis',
      occupation: 'Front-end Developer',
      picture: img1,
      age: '20',
      time: '2',
      project: 'Lorem ipsum',
      url: 'URL da foto do naver',
    },
    {
      id: 2,
      name: 'Gabriel do Couto',
      occupation: 'Front-end Developer',
      picture: img2,
      age: '20',
      time: '2',
      project: 'Lorem ipsum',
      url: 'URL da foto do naver',
    },
    {
      id: 3,
      name: 'Eduardo Bittencourt',
      occupation: 'Front-end Developer',
      picture: img3,
      age: '20',
      time: '2',
      project: 'Lorem ipsum',
      url: 'URL da foto do naver',
    },
    {
      id: 4,
      name: 'Gustavo Pinho',
      occupation: 'Front-end Developer',
      picture: img4,
      age: '20',
      time: '2',
      project: 'Lorem ipsum',
      url: 'URL da foto do naver',
    },
  ]);

  const arr = devs

  const removeNaver = (naver) => {
    const selectedNaver = arr.filter(( i ) => i !== naver)

    setDevs(selectedNaver)

    console.log(selectedNaver)
  }

  const renderItem = ({ item }) => (
    <Naver>
      <NPic onPress={() => navigation.navigate('Profile', { item: item })}>
        <Img source={item.picture} />
      </NPic>

      <Name style={{ fontFamily: 'Montserrat_600SemiBold' }}>{item.name}</Name>

      <Ocuppation style={{ fontFamily: 'Montserrat_500Medium' }}>
        {item.occupation}
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
                  style: 'cancel'
                },
                {
                  text: 'Excluir',
                  onPress: () => removeNaver(item)
                }
              ]
            )
          }
        >
          <Foundation name="trash" size={20} color="black" />
        </Delete>

        <Edit onPress={() => navigation.navigate('EditNaver', { item: item })}>
          <MaterialIcons name="edit" size={20} color="black" />
        </Edit>
      </Action>
    </Naver>
  );

  return (
    <Container>
      <Header navigation={navigation} />

      <SubHeader>
        <Title style={{ fontFamily: 'Montserrat_600SemiBold' }}>Navers</Title>

        <Button onPress={() => navigation.navigate('NewNaver')}>
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
