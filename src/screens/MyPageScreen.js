import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {selectDiary} from '../redux/diaryReducers';

export const MyPageScreen = () => {
  const selector = useSelector(selectDiary).DiaryReducer;
  console.log(selector.length - 1);

  return (
    <Container>
      <AllDiarySection>
        <AllDiaryData>{selector.length - 1}</AllDiaryData>
        <AllDiaryText>당신의 기록들</AllDiaryText>
      </AllDiarySection>
      <Line />
      <SettingSection>
        <CheckSection>
          <CheckText>월요일 시작으로 변경</CheckText>
          <CheckToggle />
        </CheckSection>
      </SettingSection>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
  margin-top: 50px;
`;
const AllDiarySection = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const AllDiaryText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;
const AllDiaryData = styled.Text`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: gray;
  margin-bottom: 40px;
`;
const SettingSection = styled.View`
  width: 100%;
  align-items: center;
`;
const CheckSection = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;
const CheckText = styled.Text`
  font-size: 20px;
  color: gray;
`;
const CheckToggle = styled.Switch``;
