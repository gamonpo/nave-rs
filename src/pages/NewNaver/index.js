import React, { useState } from 'react';

import { ScrollView, Alert } from 'react-native';

import api from '../../services/api';

import Header from '../../components/Header';
import { Container, Input, Label } from '../../components/Form/styles';
import { Button } from '../../components/LargeButton/styles';

import { Title, Info } from './styles';
import colors from '../../style/colors';

export default function NewNaver({ navigation, route }) {
  const { token } = route.params;

  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [age, setAge] = useState();
  const [time, setTime] = useState();
  const [project, setProject] = useState();
  const [url, setUrl] = useState();

  const addNaver = () => {
    try {
      async function addANaver() {
        {
          const response = await api.post(
            'navers',
            {
              job_role: role,
              admission_date: time,
              birthdate: age,
              project: project,
              name: name,
              url:
                'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response) {
            Alert.alert('Naver adicionado', 'Naver adicionado com sucesso! ');

            navigation.goBack();
          }
        }
      }

      addANaver();
    } catch (error) {
      Alert.alert('Não foi possível criar o cadastro!');
    }
  };

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
              margin: 4,
            }}
          >
            Nome
          </Label>

          <Input
            placeholder={'Nome'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
            value={name}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Cargo
          </Label>

          <Input
            placeholder={'Cargo'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setRole(text)}
            value={role}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Idade
          </Label>

          <Input
            placeholder={'Idade'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setAge(text)}
            value={age}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Tempo de empresa
          </Label>

          <Input
            placeholder={'Tempo de empresa'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setTime(text)}
            value={time}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Projetos que participou
          </Label>

          <Input
            placeholder={'Projetos que participou'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setProject(text)}
            value={project}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            URL da foto do naver
          </Label>

          <Input
            placeholder={'URL da foto do naver'}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setUrl(text)}
            value={url}
          />

          <Button style={{ top: 10 }} onPress={addNaver}>
            <Label
              style={{
                fontFamily: 'Montserrat_500Medium',
                color: colors.white,
              }}
            >
              Salvar
            </Label>
          </Button>
        </Info>
      </ScrollView>
    </Container>
  );
}
