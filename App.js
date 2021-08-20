import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import type {Node} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
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

import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateMeal from './screens/CreateMeal';
import Information from './screens/Information';

// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="go to remind screen"
//         onPress={() => navigation.navigate("Notification")}
//       />
//     </View>
//   );
// };

// const RemindScreen = ({navigation}) => {
//   return (
//     <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Remind Screen</Text>
//     </View>
//   );
// };

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#3A3F58' },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: '100'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
        title: 'Set Time',
        headerLeft: () => (
          <Icon.Button name="menu-outline" size={25} backgroundColor="#3A3F58"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />

    <HomeStack.Screen
      name="Create"
      component={CreateMeal}
    // options={{...myOptions,title:"Create Meal"}}
    />

    <HomeStack.Screen
      name="Information"
      component={Information}
    // options={myOptions}
    // options={{...myOptions,title:"Information"}}
    />
  </HomeStack.Navigator>
);

const NotificationStackScreen = ({ navigation }) => (
  <NotificationStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#3A3F58' },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: '100'
    }
  }}>
    <NotificationStack.Screen name="Alert history" component={NotificationScreen} options={{
      headerLeft: () => (
        <Icon.Button name="reorder-four" size={25} backgroundColor="#3A3F58"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </NotificationStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#3A3F58' },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: '100'
    }
  }}>
    <ProfileStack.Screen name="Pillbox" component={ProfileScreen}
      options={{
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button name="menu-outline" size={25} backgroundColor="#3A3F58"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
  </ProfileStack.Navigator>
);


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Notification" component={NotificationStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
