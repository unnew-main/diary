import React, {useState} from 'react';
import styled from 'styled-components/native';
// const selector = useSelector(selectDiary);

export const Diary = ({data}) => {
  const [content, setContent] = useState(data.content);
  return (
    <Container>
      <Text>{content}</Text>
    </Container>
  );
};

const Container = styled.View``;
const Text = styled.Text``;
