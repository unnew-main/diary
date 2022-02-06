import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TimeLine} from '../TimeLine';

export const Diary = ({content, hour, minute}) => {
  return (
    <Container>
      <TimeSection>
        <TimeText>{hour} : </TimeText>
        <TimeText>{minute}</TimeText>
      </TimeSection>
      <TimeLine />
      <ContentSection>
        <ContentText>{content}</ContentText>
      </ContentSection>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  width: 100%;
  min-height: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
`;

const TimeSection = styled.View`
  display: flex;
  width: 20%;
  flex-direction: row;
  margin-right: 5px;
  justify-content: flex-end;
`;
const TimeText = styled.Text`
  font-size: 20px;
`;

const ContentSection = styled.View`
  width: 70%;
`;
const ContentText = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  padding-right: 10px;
  margin-bottom: 20px;
`;
