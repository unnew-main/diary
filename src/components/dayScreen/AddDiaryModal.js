import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {uploadDiary} from '@redux/diaryReducers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {customColor} from '@/../constants';

export const AddDiaryModal = ({showModal, setShowModal, nowDay}) => {
  const [diaryContent, setDiaryContent] = useState('');
  const [date, setDate] = useState(new Date(nowDay));
  const [dateOpen, setDateOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => setDate(new Date(nowDay)), [nowDay]);

  const submitDiary = ({date, diaryContent}) => {
    if (diaryContent === '') {
      alert('내용을 입력해주세요.');
      return;
    }
    dispatch(
      uploadDiary({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),

        content: diaryContent.toString(),
      }),
    );
    setShowModal(prev => !prev);
  };
  return (
    <ModalSection
      style={{
        width: wp('100%'),
        height: hp('100%'),
      }}
      animationType={'slide'}
      transparent={false}
      visible={showModal}
      onRequestClose={() => closePopup()}>
      <Container>
        <ModalHeader
          style={{
            width: wp('100%'),
            height: hp('5%'),
          }}>
          <BackButton onPress={() => setShowModal(prev => !prev)}>
            <ButtonText>뒤로가기</ButtonText>
          </BackButton>
          <Title>메모 작성</Title>
          <SubmitButton onPress={() => submitDiary({date, diaryContent})}>
            <ButtonText>글쓰기</ButtonText>
          </SubmitButton>
        </ModalHeader>
        <ModalBody>
          <StyledKeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={Platform.OS === 'ios'}
            extraHeight={30}
            scrollEnabled={true}
            enableAutomaticScroll={true}>
            <CenterView>
              <Subtitle>날짜</Subtitle>
              <DiaryDateButton onPress={() => setDateOpen(true)}>
                <DiaryDateText>
                  {date.getFullYear()}년 {date.getMonth() + 1}월{' '}
                  {date.getDate()}일 {date.getHours()}시 {date.getMinutes()}분
                </DiaryDateText>
              </DiaryDateButton>
              <DatePicker
                modal
                open={dateOpen}
                date={date}
                onConfirm={date => {
                  setDateOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setDateOpen(false);
                }}
              />
              <Subtitle>내용</Subtitle>

              <DiaryTextInput
                style={{
                  textAlignVertical: 'top',
                  width: wp('80%'),
                  height: hp('30%'),
                }}
                onChangeText={text => setDiaryContent(text)}
                autoCapitalize="sentences"
                multiline={true}
                onEndEditing={text => setDiaryContent(text)}
                onSubmitEditing={text => setDiaryContent(text)}
                enableOnAndroid={true}
              />
            </CenterView>
          </StyledKeyboardAwareScrollView>
        </ModalBody>
      </Container>
    </ModalSection>
  );
};
const ModalSection = styled.Modal`
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: ${customColor.white};
`;
const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ModalHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;
`;
const Title = styled.Text`
  font-size: 30px;
  color: ${customColor.black};
`;
const ButtonText = styled.Text`
  font-size: 16px;
  color: ${customColor.green};
`;
const BackButton = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: center;
  color: ${customColor.green};
  width: 80px;
  height: 100%;
`;
const SubmitButton = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: center;
  color: ${customColor.green};
  width: 80px;
  height: 100%;
`;
const StyledKeyboardAwareScrollView = styled(KeyboardAwareScrollView)`
  width: 100%;
  height: 100%;
`;
const ModalBody = styled.View`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90%;
  margin-top: 20px;
`;
const CenterView = styled.View`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90%;
`;
const DiaryDateButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border: 1px;
`;
const DiaryDateText = styled.Text`
  font-size: 20px;
  color: ${customColor.black};
`;
const DiaryTextInput = styled.TextInput`
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;
const Subtitle = styled.Text`
  width: 80%;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-top: 15px;
  margin-left: 10px;
  color: ${customColor.gray};
`;
