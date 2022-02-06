import React from 'react';
import {TextLoop} from '../components/TextLoop';
import styled from 'styled-components/native';
export const BannerScreen = ({navigation}) => {
  return (
    <Container
      source={require('../../assets/imgs/bannerIMG.jpg')}
      blurRadius={5}>
      <Title>당신의 하루를 위하여</Title>
      <StartButton onPress={() => navigation.navigate('Main')}>
        <StartButtonText text={'- 터치하여 당신의 하루를 보기 -'} />
      </StartButton>
    </Container>
  );
};

const Container = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 30px;
  color: white;
  margin-top: 80px;
`;
const StartButton = styled.TouchableOpacity`
  height: 20%;
  width: 70%;
  justify-content: center;
  align-items: center;
`;
const StartButtonText = styled(TextLoop)`
  font-size: 20px;
  color: white;
`;
