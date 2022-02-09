import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAllData = async data => {
  try {
    const jsonState = JSON.stringify(data);
    console.log(jsonState);
    await AsyncStorage.setItem('@allData', jsonState);
  } catch (e) {
    console.log('err');
  }
};
export const getAllData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@allDate');
    console.log('get', jsonValue);

    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('err');
  }
};
