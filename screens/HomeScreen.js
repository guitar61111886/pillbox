import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, Text, Picker } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const HomeScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [selectedValue, setSelectedValue] = useState("java");
  // componentWillMount() {
  //   this._panResponder = PanResponder.create({
  //     onStartShouldSetPanResponder: (e) => { console.log('onStartShouldSetPanResponder'); return true; },
  //     onMoveShouldSetPanResponder: (e) => { console.log('onMoveShouldSetPanResponder'); return true; },
  //     onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
  //     onPanResponderMove: (e) => console.log('onPanResponderMove'),
  //     onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
  //     onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
  //   });
  // }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <View style={styles.paddingSettime}>
        <Text style={styles.SettimeText}>Set Time</Text>
      </View>

      <View style={styles.instructions}>
        <Button
          color="#F9AC67"
          onPress={showDatepicker}
          title="Show date picker!"
        />
      </View>
      <View style={styles.instructions}>
        <Button
          color="#F9AC67"
          onPress={showTimepicker}
          title="Show time picker!"
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

        <View style={styles.pickerpad}>
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
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: '#50A3A4',
    //justifyContent: 'flex-start',
    alignItems: 'center',
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
    color: '#333333',
    marginTop: 20
  },

  ss: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#50A3A4"
  },

  pickerpad:{
    marginTop: 5,
    paddingTop: 3,
    backgroundColor: '#ece6cd',
  }
});


// import React, { Component } from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import type {Node} from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Button,
//   PanResponder
// } from 'react-native';
// import DatePicker from 'react-native-datepicker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { renderNode } from 'react-native-elements/dist/helpers';

// // const HomeScreen = ({ navigation }) => {


// class HomeScreen extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       date: '',
//       time: '20:00',
//       datetime: '2016-05-05 20:00',
//       datetime1: '2016-05-05 20:00'
//     };
//   }

//   componentWillMount() {
//     this._panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (e) => { console.log('onStartShouldSetPanResponder'); return true; },
//       onMoveShouldSetPanResponder: (e) => { console.log('onMoveShouldSetPanResponder'); return true; },
//       onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
//       onPanResponderMove: (e) => console.log('onPanResponderMove'),
//       onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
//       onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.paddingSettime}>
//           <Text style={styles.SettimeText}>Set Time</Text>
//         </View>

//         <View style={styles.paddingSettime}>
//         <DatePicker
//           style={{ width: 200 }}
//           date={this.state.date}
//           mode="date"
//           placeholder="placeholder"
//           format="YYYY-MM-DD"
//           minDate="2016-05-01"
//           maxDate="2016-06-01"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           // iconSource={require('./google_calendar.png')}
//           onDateChange={(date) => { this.setState({ date: date }); }}
//         />
//         <Text style={styles.instructions}>date: {this.state.date}</Text>
//         <DatePicker
//           style={{ width: 200 }}
//           date={this.state.time}
//           mode="time"
//           format="HH:mm"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           minuteInterval={10}
//           onDateChange={(time) => { this.setState({ time: time }); }}
//         />
//         <Text style={styles.instructions}>time: {this.state.time}</Text>
//         <DatePicker
//           style={{ width: 200 }}
//           date={this.state.datetime}
//           mode="datetime"
//           format="YYYY-MM-DD HH:mm"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           showIcon={false}
//           onDateChange={(datetime) => { this.setState({ datetime: datetime }); }}
//         />
//         <Text style={styles.instructions}>datetime: {this.state.datetime}</Text>
//         <DatePicker
//           style={{ width: 200 }}
//           date={this.state.datetime1}
//           mode="datetime"
//           format="YYYY-MM-DD HH:mm"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           customStyles={{
//             dateIcon: {
//               position: 'absolute',
//               left: 0,
//               top: 4,
//               marginLeft: 0
//             },
//             dateInput: {
//               marginLeft: 36
//             }
//           }}
//           minuteInterval={10}
//           onDateChange={(datetime) => { this.setState({ datetime1: datetime }); }}
//         />
//         <Text style={styles.instructions}>datetime: {this.state.datetime1}</Text>


//         </View>
//         {/* <Button
//           title="go to remind screen"
//           onPress={() => navigation.navigate("Notification")}
//         /> */}
//       </View>
//     );
//   }

// }
// // };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //flexDirection: 'column',
//     backgroundColor: '#50A3A4',
//     //justifyContent: 'flex-start',
//     alignItems: 'center',
//   },

//   SettimeText: {
//     color: 'white',
//     fontWeight: '300',
//     fontSize: 30,
//     fontFamily: "Cochin",
//     textAlign: 'center',
//   },

//   paddingSettime: {
//     padding: 10,
//     backgroundColor: '#EE6A59',
//     marginTop: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     marginHorizontal: 90,
//   },

//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   },

//   ss: { alignItems: 'center', justifyContent: 'center', backgroundColor: "#50A3A4" }
// });