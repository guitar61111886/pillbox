import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.paddingProfile}>
      <Text style={styles.SettimeText}> Profile Screen</Text>
      </View>
      <Button
        title="go to remind screen"
        onPress={() => navigation.navigate("Notification")}
      />
    </View>
  );
};

export default NotificationScreen;

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
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: "Cochin",
  },

  paddingProfile: {
    padding: 10,
    backgroundColor: '#EE6A59',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 90,
  },
});