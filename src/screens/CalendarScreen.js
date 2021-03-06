import React from 'react';
import {SafeAreaView} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import {selectDiary} from '@redux/diaryReducers';
import {customColor} from '@/../constants';

export const CalendarScreen = ({navigation}) => {
  const {diaryReducer: diarySelector, settingReducer: settingSelector} =
    useSelector(state => state);
  const markedObject = new Object();
  diarySelector.map(data => {
    if (data.nextId) return false;
    const month = data.month < 10 ? '0' + data.month : data.month;
    const day = data.day < 10 ? '0' + data.day : data.day;
    const formatDate = data.year + '-' + month + '-' + day;
    markedObject[formatDate] = {marked: true, dotColor: customColor.green};
  });

  return (
    <SafeAreaView>
      <CalendarList
        onDayPress={({dateString}) => {
          const selectedDay = new Date(dateString);
          navigation.navigate('diary', {date: selectedDay.toString()});
        }}
        firstDay={settingSelector.firstDay}
        markedDates={markedObject}
        theme={{
          todayTextColor: customColor.green,
        }}
      />
    </SafeAreaView>
  );
};
