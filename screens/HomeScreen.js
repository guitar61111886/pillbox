import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet, Text, Picker, ScrollView, Image, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Card, Divider, FAB } from 'react-native-paper';
import CreateMeal from './CreateMeal';
// import { constants } from 'jest-config';

const HomeScreen = ({ navigation }) => {

  // const data = [
  //   { id: 1, name: "เช้าก่อนอาหาร", slave: "S1", time: "07:30" },
  //   { id: 2, name: "เช้าหลังอาหาร", slave: "S2", time: "08:30" },
  //   { id: 3, name: "เที่ยงก่อนอาหาร", slave: "S3", time: "11:30" },
  //   { id: 4, name: "เช้าหลังอาหาร", slave: "S4", time: "12:30" },
  //   { id: 5, name: "เช้าก่อนอาหาร", slave: "S1", time: "07:30" },
  //   { id: 6, name: "เช้าหลังอาหาร", slave: "S2", time: "08:30" },
  //   { id: 7, name: "เที่ยงก่อนอาหาร", slave: "S3", time: "11:30" },
  //   { id: 8, name: "เช้าหลังอาหาร", slave: "S4", time: "12:30" },
  // ]
  const [data, setData] = useState([])
  const [loading, setloading] = useState(true)

  const fetchData = () => {
    fetch("http://172.20.10.5:3000/")
      .then(res => res.json())
      .then(results => {
        // console.log(results)
        setData(results)
        setloading(false)
      }).catch(err => {
        Alert.alert("Someting went wrong")
      })
  }

  useEffect(() => {
    fetchData()
    // fetch("http://172.20.10.5:3000/")
    //     .then(res => res.json())
    //     .then(results => {
    //         console.log(results)
    //         setData(results)
    //         setloading(false)
    //     })
  }, [])

  const renderList = ((item) => {
    return (
      <View>
        <Card style={styles.mycard}
          onPress={() => navigation.navigate("Information", { item })}
        >
          <View style={styles.cardView}>
            <Image
              style={{ width: 70, height: 70, borderRadius: 100 }}
              source={{ uri: "https://i.pinimg.com/736x/82/a6/ba/82a6bac99d3a9c2942724f5fc8dfca86.jpg" }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={styles.textCard}>{item.meal}</Text>
              <Text style={styles.textCard}>{item.slave}</Text>
              <Text style={styles.textCard}>{item.time}</Text>
            </View>
          </View>
        </Card>
        <Divider />
      </View>
    );
  })

  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);
  // const [text, setText] = useState('Empty');

  // // const [selectedValue, setSelectedValue] = useState("java");

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);

  //   let tempDate = new Date(currentDate);
  //   let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
  //   let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
  //   setText(fDate + ' ' + fTime)

  //   console.log(fDate + '(' + fTime + ')')
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  return (

    <View style={styles.container}>

      <View style={styles.paddingSettime}>
        <Text style={styles.SettimeText}>ตั้งค่าเวลากินยา</Text>
      </View>
      {/* <Text style={{ textAlign: 'center', fontSize: 26, color: 'white', marginTop: 12, marginVertical: 5 }}>ตั้งค่าเวลากินยา</Text> */}
      <Divider />
      {/* {renderList} */}
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item)
        }}
        keyExtractor={item => item._id}
        onRefresh={() => fetchData()}
        refreshing={loading}
      />

      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: '#a657cf' } }}
        onPress={() => navigation.navigate("Create")}
      />

      {/* <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{text}</Text> */}
      {/* <View style={styles.instructions}>
        <Button color="#000000" marginLeft='80' onPress={showDatepicker} title="Date Picker" />
      </View> */}

      {/* <View style={styles.instructions}>
        <Button color="#F9AC67" onPress={showTimepicker} title="Time picker" />
      </View> */}

      {/* {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */}

      {/* <View style={styles.pickerpad}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select " value="java" />
        <Picker.Item label="S1" value="S1" />
        <Picker.Item label="S2" value="S2" />
        <Picker.Item label="S3" value="S3" />
        <Picker.Item label="S4" value="S4" />
        <Picker.Item label="S5" value="S5" />
        <Picker.Item label="S6" value="S6" />
        <Picker.Item label="S7" value="S7" />
      </Picker>
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: '#50A3A4',
    //justifyContent: 'center',
    //alignItems: 'center',
  },

  containerbutton: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: '#000000',
    alignItems: 'center',
    width: 80,
    justifyContent: 'center',
  },

  containertri: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: '#50A3A4',
    //justifyContent: 'center',
    //alignItems: 'center',
  },

  SettimeText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 30,
    fontFamily: "Cochin",
    textAlign: 'center',
  },

  paddingSettime: {
    padding: 10,
    backgroundColor: '#EE6A59',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 90,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 90,
    marginBottom: 15,
    color: '#333333',
    marginTop: 10,
  },

  ss: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#50A3A4"
  },

  mycard: {
    margin: 9,
    backgroundColor: '#ece6cd',
    padding: 5,
    marginTop: 10
  },
  cardView: {
    flexDirection: "row",
  },
  textCard: {
    fontSize: 20
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
});