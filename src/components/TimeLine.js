import React from 'react';
import styled from 'styled-components';
import {customColor} from '@/../constants';
export const TimeLine = () => {
  return (
    <LineSection>
      <Point />
      <Line />
    </LineSection>
  );
};

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
  background-color: ${customColor.green};
  margin-top: 2px;
`;
const Line = styled.View`
  position: absolute;
  width: 2px;
  height: 900%;
  bottom: 0px;
  background-color: ${customColor.green};
`;
