// import React from 'react';
// import {
//     SafeAreaView, StyleSheet, ScrollView, View, Button, StatusBar, } from 'react-native';
// import {Avatar, Title, Caption, Text, TouchableRipple} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const ProfileScreen = () => {
//     return (
//       <SafeAreaView style={styles.container} >
//         <View style={styles.userInfoSection}>
//           <View style={{flexDirection: 'row', marginTop: 15}}>
//             <Avatar.Image
//                                 source={require('../../Pillbox/src/imagegiga/gg.png')}
//                                 size={80}
//             />
//             <View style={{marginLeft: 7}}>
//               <Title style={[styles.title, {
//                 marginTop: 15, marginBottom: 5
//               }]}>Thunrada Choopromkaew</Title>
//               <Caption style={styles.caption}>@giga61111886</Caption>
//             </View>
//           </View>
//         </View>

//         <View style={styles.userInfoSection}>
//               <View style={styles.row}>
//                 <Icon name="map-marker-radius" color="#16A085" size={20} />
//                 <Text style={{color: '#777777', marginLeft: 16}}>Nakhon Si Thammarat, Thailand</Text>
//               </View>
//               <View style={styles.row}>
//                 <Icon name="phone" color="#16A085" size={20} />
//                 <Text style={{color: '#777777', marginLeft: 16}}>094-569-9615</Text>
//               </View>
//               <View style={styles.row}>
//                 <Icon name="email" color="#16A085" size={20} />
//                 <Text style={{color: '#777777', marginLeft: 16}}>guitarthunrada@gmail.com</Text>
//               </View>
//         </View>

//         <View style={styles.infoBoxWrapper}>
//               <View style={[styles.infoBox, {
//                 borderRightColor: '#dddddd',
//                 borderRightWidth: 2
//               }]}>
//                 <Title>12</Title>
//                 <Caption>Reminded</Caption>
//               </View>

//               <View style={styles.infoBox}>
//                 <Title>30</Title>
//                 <Caption>Remind/Month</Caption>
//               </View>
//         </View>

//         <View style={styles.menuWrapper}>
//               <TouchableRipple onPress={() => {}}>
//                 <View style={styles.menuItem}>
//                   <Icon name="heart-outline" color="#FF6347" size={20}/>
//                   <Text style={styles.menuItemText}>Your Favorites</Text>
//                 </View>
//               </TouchableRipple>

//               <TouchableRipple onPress={() => {}}>
//                 <View style={styles.menuItem}>
//                   <Icon name="share-outline" color="#FF6347" size={20}/>
//                   <Text style={styles.menuItemText}>Tell Your Friend</Text>
//                 </View>
//               </TouchableRipple>

//               <TouchableRipple onPress={() => {}}>
//                 <View style={styles.menuItem}>
//                   <Icon name="account-check-outline" color="#FF6347" size={20}/>
//                   <Text style={styles.menuItemText}>Support</Text>
//                 </View>
//               </TouchableRipple>

//               <TouchableRipple onPress={() => {}}>
//                 <View style={styles.menuItem}>
//                   <Icon name="cog-outline" color="#FF6347" size={20}/>
//                   <Text style={styles.menuItemText}>Settings</Text>
//                 </View>
//               </TouchableRipple>
//         </View>
//       </SafeAreaView>
//     );
//   };

// export default ProfileScreen;  

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     userInfoSection: {
//       paddingHorizontal: 30,
//       marginBottom: 25,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//     },
//     caption: {
//       fontSize: 14,
//       lineHeight: 14,
//       fontWeight: '500',
//     },
//     row: {
//       flexDirection: 'row',
//       marginBottom: 10,
//     },
//     infoBoxWrapper: {
//       borderBottomColor: '#dddddd',
//       borderBottomWidth: 1,
//       borderTopColor: '#dddddd',
//       borderTopWidth: 1,
//       flexDirection: 'row',
//       height: 100,
//     },
//     infoBox: {
//       width: '50%',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     menuWrapper: {
//       marginTop: 10,
//     },
//     menuItem: {
//       flexDirection: 'row',
//       paddingVertical: 15,
//       paddingHorizontal: 30,
//     },
//     menuItemText: {
//       color: '#777777',
//       marginLeft: 20,
//       fontWeight: '600',
//       fontSize: 16,
//       lineHeight: 26,
//     },
// });

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