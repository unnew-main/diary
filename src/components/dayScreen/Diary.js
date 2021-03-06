import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TimeLine} from '@/components/dayScreen/TimeLine';
import {useDispatch} from 'react-redux';
import Modal from 'react-native-modal';
import {deleteDiary} from '@/redux/diaryReducers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {customColor} from '@/../constants';

export const Diary = ({content, hour, minute, id}) => {
  const [showLongPressModal, setShowLongPressModal] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteDiray = () => {
    setShowLongPressModal(false);
    dispatch(deleteDiary({id: id}));
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
            <ButtonText style={{color: customColor.red}}>삭제하기</ButtonText>
          </DeleteButton>
          <Line />

          <CancelButton onPress={() => setShowLongPressModal(false)}>
            <ButtonText style={{color: customColor.gray}}>취소하기</ButtonText>
          </CancelButton>
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
  color: ${customColor.black};
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
  color: ${customColor.black};
`;
const ModalContainer = styled(Modal)`
  margin: 0;
  justify-content: center;
  align-items: center;
`;
const ModalSection = styled.View`
  width: 60%;
  height: 120px;
  background-color: ${customColor.white};
  border-radius: 15px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;
const CancelButton = styled.TouchableOpacity`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;
const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${customColor.gray};
`;

const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 20px;
`;
