import React, {useState} from 'react';
import styled from 'styled-components/native';
// const selector = useSelector(selectDiary);

export const Diary = ({content, hour, minute}) => {
  // const [day, setDay] = useState(data.day);
  // const [content, setContent] = useState(data.content);
  return (
    <Container>
      <TimeSection>
        <TimeText>{hour} :</TimeText>
        <TimeText>{minute}</TimeText>
      </TimeSection>
      <LineSection>
        <Point />
        <Line />
      </LineSection>
      <ContentSection>
        <ContentText>{content}</ContentText>
      </ContentSection>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const TimeSection = styled.View`
  display: flex;
  width: 20%;
  flex-direction: row;
  margin-left: 10px;
`;
const TimeText = styled.Text`
  font-size: 20px;
`;

const LineSection = styled.View`
  position: relative;
  width: 10%;
  justify-content: center;
  align-items: center;
`;
const Point = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 3px;
`;
const Line = styled.View`
  position: absolute;
  width: 3px;
  height: 100%;
  background-color: black;
`;
const ContentSection = styled.View`
  width: 70%;
`;
const ContentText = styled.Text`
  margin-left: 10px;
  font-size: 20px;
`;
