// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React from 'react';
//  import type { Node } from 'react';
//  import {
//    SafeAreaView,
//    ScrollView,
//    StatusBar,
//    StyleSheet,
//    useColorScheme,
//    View,
//  } from 'react-native';
//  import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Item, Input, Icon, Button } from 'native-base';
 
 
//  import {
//    Colors,
//    DebugInstructions,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';
 
 
//  const App: () => Node = () => {
 
//    constructor(props) {
//      super(props)
//      this.state = {
//        data: []
//      }
//    }
 
//    render(){
//      return (
//        <Container>
//          <Header searchBar rounded>
//            <Item>
//              <Icon name="ios-search" />
//              <Input placeholder="Search" />
//              <Icon name="ios-people" />
//            </Item>
//          </Header>
 
//          <List>
//            <ListItem avatar>
//              <Body>
//                <Text>Kumar Pratik</Text>
//                <Text note>Doing what you like will always keep you happy . .</Text>
//              </Body>
//              <Right>
//                <Text note>3:43 pm</Text>
//              </Right>
//            </ListItem>
//          </List>
//        </Container>
 
//      )
//    }
//  };
 
//  const styles = StyleSheet.create({
//    sectionContainer: {
//      marginTop: 32,
//      paddingHorizontal: 24,
//    },
//    sectionTitle: {
//      fontSize: 24,
//      fontWeight: '600',
//    },
//    sectionDescription: {
//      marginTop: 8,
//      fontSize: 18,
//      fontWeight: '400',
//    },
//    highlight: {
//      fontWeight: '700',
//    },
//  });
 
//  export default App;
 
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

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.paddingSettime}>
        <Text style={styles.SettimeText}>Alert history</Text>
      </View>
      {/* <Button
          title="go to remind screen"
          onPress={() => navigation.navigate("Notification")}
        /> */}
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