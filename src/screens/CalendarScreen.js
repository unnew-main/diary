import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import {selectDiary} from '../redux/DiaryReducers';

export const CalendarScreen = ({navigation}) => {
  const selector = useSelector(selectDiary);
  const markedObject = new Object();
  selector.map(data => {
    if (data.nextId) return false;
    const month = data.month < 10 ? '0' + data.month : data.month;
    const day = data.day < 10 ? '0' + data.day : data.day;
    const formatDate = data.year + '-' + month + '-' + day;
    markedObject[formatDate] = {marked: true};
  });

  return (
    <SafeAreaView>
      <Calendar
        onDayPress={({dateString}) => {
          const selectedDay = new Date(dateString);
          navigation.navigate('diary', {date: selectedDay.toString()});
        }}
        markedDates={markedObject}
      />
    </SafeAreaView>
  );
};
