import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TimeLine} from '../TimeLine';
import {useDispatch} from 'react-redux';
import Modal from 'react-native-modal';
import {deleteDiary} from '../../redux/DiaryReducers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Clipboard from '@react-native-community/react-native-clipboard';

export const Diary = ({content, hour, minute, id}) => {
  const [showLongPressModal, setShowLongPressModal] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteDiray = () => {
    setShowLongPressModal(false);
    dispatch(deleteDiary({id: id}));
  };
  const handleCopyDiray = () => {
    Clipboard.setString(content);
    setShowLongPressModal(false);
  };
  return (
    <Container>
      <TimeSection>
        <TimeText>{hour < 10 ? '0' + hour : hour} : </TimeText>
        <TimeText>{minute < 10 ? '0' + minute : minute}</TimeText>
      </TimeSection>
      <TimeLine />
      <ContentSection onLongPress={() => setShowLongPressModal(true)}>
        <ContentText>{content}</ContentText>
      </ContentSection>
      <ModalContainer
        style={{
          width: wp('100%'),
          height: hp('15%'),
        }}
        isVisible={showLongPressModal}
        backdropOpacity={0.2}
        onBackdropPress={() => setShowLongPressModal(false)}>
        <ModalSection>
          <DeleteButton onPress={handleDeleteDiray}>
            <ButtonText style={{color: 'red'}}>삭제하기</ButtonText>
          </DeleteButton>
          <Line />
          <CopyButton onPress={handleCopyDiray}>
            <ButtonText style={{color: 'blue'}}>복사하기</ButtonText>
          </CopyButton>
          <Line />
          <ModifyButton onPress={() => setShowLongPressModal(false)}>
            <ButtonText style={{color: 'gray'}}>취소하기</ButtonText>
          </ModifyButton>
        </ModalSection>
      </ModalContainer>
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

const ContentSection = styled.TouchableOpacity`
  width: 70%;
`;
const ContentText = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  padding-right: 10px;
  margin-bottom: 20px;
`;
const ModalContainer = styled(Modal)`
  margin: 0;
  justify-content: center;
  align-items: center;
`;
const ModalSection = styled.View`
  width: 60%;
  height: 180px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;
const ModifyButton = styled.TouchableOpacity`
  width: 100%;
  height: 33%;
  justify-content: center;
  align-items: center;
`;
const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: gray;
`;
const CopyButton = styled.TouchableOpacity`
  width: 100%;
  height: 33%;
  justify-content: center;
  align-items: center;
`;
const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  height: 33%;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: blue;
  font-size: 20px;
`;
