// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type { Node } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   useColorScheme,
//   View,
// } from 'react-native';
// import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Item, Input, Icon, Button } from 'native-base';


// import {
//   Colors,
//   DebugInstructions,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


// const App: () => Node = () => {

//   constructor(props) {
//     super(props)
//     this.state = {
//       data: []
//     }
//   }

//   render(){
//     return (
//       <Container>
//         <Header searchBar rounded>
//           <Item>
//             <Icon name="ios-search" />
//             <Input placeholder="Search" />
//             <Icon name="ios-people" />
//           </Item>
//         </Header>

//         <List>
//           <ListItem avatar>
//             <Body>
//               <Text>Kumar Pratik</Text>
//               <Text note>Doing what you like will always keep you happy . .</Text>
//             </Body>
//             <Right>
//               <Text note>3:43 pm</Text>
//             </Right>
//           </ListItem>
//         </List>
//       </Container>

//     )
//   }
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from 'react';
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
    <HomeStack.Screen name="Pillbox" component={HomeScreen} 
    options={{ title: 'Time Table', 
    headerLeft: () => (
      <Icon.Button name="menu-outline" size={25} backgroundColor="#3A3F58"
        onPress={() => navigation.openDrawer()}></Icon.Button>
    )
      }}/>
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
    <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{
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
    options={{ title: 'Profile', 
    headerLeft: () => (
      <Icon.Button name="menu-outline" size={25} backgroundColor="#3A3F58"
        onPress={() => navigation.openDrawer()}></Icon.Button>
    )
      }}/>
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
