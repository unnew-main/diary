import React, {useState} from 'react';
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {uploadDiary} from '../../redux/DiaryReducers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const AddDiaryModal = ({showModal, setShowModal}) => {
  const [diaryContent, setDiaryContent] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);

  const dispatch = useDispatch();

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
          <Title>일기 작성</Title>
          <SubmitButton onPress={() => submitDiary({date, diaryContent})}>
            <ButtonText>글쓰기</ButtonText>
          </SubmitButton>
        </ModalHeader>
        <ModalBody>
          <StyledKeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={Platform.OS === 'ios'}
            // contentContainerStyle={{height: '-10%'}}
            extraHeight={30}
            // resetScrollToCoords={{x: 0, y: 0}}
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
const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
`;

const ModalSection = styled.Modal`
  justify-content: center;
  align-items: center;

  background-color: white;
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
`;
const ButtonText = styled.Text`
  color: blue;
`;
const BackButton = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: center;
  color: blue;
  width: 80px;
  height: 100%;
`;
const SubmitButton = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: center;
  color: blue;
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
  margin-top: 10px;
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
  color: black;
`;
const DiaryTextInput = styled.TextInput`
  justify-content: center;
  align-items: flex-start;
  /* width: 80%; */
  /* height: 300px; */
  border-radius: 10px;
  border: 1px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;

  /* top : hp('30%'); // 스크린 세로 크기의 30% 만큼 0에서부터 이동 */
`;
const Subtitle = styled.Text`
  width: 80%;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-top: 15px;
  margin-left: 10px;
  color: gray;
`;
