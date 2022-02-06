import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {AddDiaryModal} from '../components/dayScreen/AddDiaryModal';
import {useSelector} from 'react-redux';
import {selectDiary} from '../redux/DiaryReducers';
import {Diary} from '../components/dayScreen/Diary';
export const DayScreen = () => {
  let today = new Date();
  let time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    day: today.getDate(), // 현제 날짜
  };
  const selector = useSelector(selectDiary);

  const [selectDay, setDay] = useState(time);
  const [showModal, setShowModal] = useState(false);

  const [todayDiary, setTodayDiary] = useState([]);
  // useEffect(() => {
  //   setDay({
  //     year: days.getFullYear(), //현재 년도
  //     month: days.getMonth() + 1, // 현재 월
  //     date: days.getDate(), // 현제 날짜 })
  //   });
  // }, [days]);

  useEffect(() => {
    setTodayDiary(
      selector.filter(
        data =>
          data.year == selectDay.year &&
          data.month == selectDay.month &&
          data.day == selectDay.day,
      ),
    );
  }, [selector]);
  console.log(todayDiary);
  const handleAddDiary = () => {
    setShowModal(prev => !prev);
  };
  return (
    <Container>
      <Title>
        {selectDay.year}년 {selectDay.month}월 {selectDay.day}일
      </Title>
      <DiaryList>
        {todayDiary.map(data => (
          <Diary data={data} />
        ))}
      </DiaryList>
      <AddButton onPress={handleAddDiary} />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
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
const Title = styled.Text`
  font-size: 30px;
  margin-top: 30px;
  height: 10%;
`;
const DiaryList = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
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
const Modal = styled(AddDiaryModal)``;
