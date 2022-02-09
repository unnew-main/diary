import React from 'react';
import {TextLoop} from '@components/TextLoop';
import styled from 'styled-components/native';
import {customColor} from '@/../constants';
export const BannerScreen = ({navigation}) => {
  return (
    <Container>
      <TitleView>
        <Title>
          <UpTtle>기록</UpTtle>
          <DownTitle>일기</DownTitle>
        </Title>
      </TitleView>
      <StartButton onPress={() => navigation.navigate('Main')}>
        <StartButtonText text={'- 하루를 기록하러 가기 -'} />
      </StartButton>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
const TitleView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;
const Title = styled.View``;
const UpTtle = styled.Text`
  font-size: 90px;
  color: ${customColor.green};
`;
const DownTitle = styled.Text`
  font-size: 90px;
  color: ${customColor.green};
`;
const StartButton = styled.TouchableOpacity`
  height: 20%;
  width: 70%;
  justify-content: center;
  align-items: center;
`;
const StartButtonText = styled(TextLoop)`
  font-size: 20px;
  color: ${customColor.black};
`;
