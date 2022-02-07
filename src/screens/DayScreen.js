import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {AddDiaryModal} from '../components/dayScreen/AddDiaryModal';
import {useSelector} from 'react-redux';
import {selectDiary} from '../redux/DiaryReducers';
import {Diary} from '../components/dayScreen/Diary';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const DayScreen = ({route}) => {
  const date = route.params ? route.params.date : null;
  const [nowDay, setNowDay] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [todayDiary, setTodayDiary] = useState([]);
  const selector = useSelector(selectDiary);
  useEffect(() => {
    setNowDay(date !== null ? new Date(date) : new Date());
  }, [route]);

  useEffect(() => {
    const tempDiary = selector
      .filter(
        data =>
          data.year == nowDay.getFullYear() &&
          data.month == nowDay.getMonth() + 1 &&
          data.day == nowDay.getDate(),
      )
      .sort(function (a, b) {
        return a.hour - b.hour || a.minute - b.minute;
      });

    setTodayDiary(tempDiary);
  }, [selector, nowDay]);

  const handleSubDay = () => {
    const yesterday = new Date(nowDay);
    yesterday.setDate(nowDay.getDate() - 1);
    setNowDay(yesterday);
  };
  const handleAddDay = () => {
    const tomorrow = new Date(nowDay);
    tomorrow.setDate(nowDay.getDate() + 1);
    setNowDay(tomorrow);
  };
  return (
    <Container>
      <Header
        style={{
          width: wp('100%'),
          height: hp('15%'),
        }}>
        <PervDay onPress={handleSubDay}></PervDay>
        <Title>
          {nowDay.getFullYear()}년 {nowDay.getMonth() + 1}월 {nowDay.getDate()}
          일
        </Title>
        <NextDay onPress={handleAddDay}></NextDay>
      </Header>
      <DiaryList>
        {todayDiary.map(({content, hour, minute, id}) => (
          <Diary
            content={content}
            hour={hour}
            minute={minute}
            key={id}
            id={id}
          />
        ))}
      </DiaryList>
      <AddButton onPress={() => setShowModal(!showModal)} />

      <AddDiaryModal
        showModal={showModal}
        setShowModal={setShowModal}
        nowDay={nowDay}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom-width: 1px;
`;
const PervDay = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: red;
`;
const Title = styled.Text`
  font-size: 30px;
`;
const NextDay = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: red;
`;

const DiaryList = styled.ScrollView`
  width: 100%;
  height: 90%;
`;
const AddButton = styled.TouchableOpacity`
  position: absolute;
  background-color: black;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  bottom: 20px;
  left: 30px;
`;
