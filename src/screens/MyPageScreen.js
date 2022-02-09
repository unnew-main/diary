import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {selectDiary} from '@redux/diaryReducers';
import {handleFirstDay} from '@redux/settingReducer';
import {customColor} from '@/../constants';

export const MyPageScreen = () => {
  const [isFirstDay, setIsFirstDay] = useState(false);
  const selector = useSelector(selectDiary).DiaryReducer;
  const dispatch = useDispatch();
  const handleFirstDayToggle = () => {
    setIsFirstDay(prev => !prev);
    dispatch(handleFirstDay({firstDay: !isFirstDay ? true : false}));
  };
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
          <CheckToggle
            onValueChange={handleFirstDayToggle}
            value={isFirstDay}
          />
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
  margin-top: 100px;
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
  color: ${customColor.gray};
`;
const AllDiaryData = styled.Text`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${customColor.green};
`;
const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${customColor.gray};
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
  color: ${customColor.gray};
`;
const CheckToggle = styled.Switch``;
