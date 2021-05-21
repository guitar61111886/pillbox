import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.paddingSettime}>
        <Text style={styles.SettimeText}>Set Time</Text>
      </View>
      {/* <Button
          title="go to remind screen"
          onPress={() => navigation.navigate("Notification")}
        /> */}
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

  ss: { alignItems: 'center', justifyContent: 'center', backgroundColor: "#50A3A4" }
});