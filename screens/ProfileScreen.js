import React from 'react';
// import type { Node } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  ActivityIndicator,
  Text,
  Image, Avatar
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Item, Input, Icon, Button } from 'native-base';

export default class NotificationScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fullData: [],
      loading: false,
      error: null,
      query: ""
    }
  }

  componentDidMount() {
    this.requestAPI()
  }

  requestAPI = () => {
    this.setState({ loading: true })
    const apiURL = "http://172.20.10.5/API/profileapi.php"
    fetch(apiURL).then((res) => res.json())
      .then((json) => {
        console.log('JSON', json)
        this.setState({
          loading: false,
          data: json,
          // fullData: json,
          filterPill: json
        })
      }).catch(error => {
        console.error(error);
        this.setState({ data: [] })
        this.setState({ error, loading: false })
      })
  }

  _renderItem = ({ item, index }) => {
    return (

      <ListItem style={{
        backgroundColor: '#FFD180',
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: "#6D4C41",
        borderWidth: 1,
        padding: 10
      }}>
        <Body>
          <Text style={styles.sectionTitle}>{item.firstname}  {item.lastname}
          </Text>
          <Text style={styles.sectionTitle}>{item.email}
          </Text>
        </Body>
      </ListItem>
    )
  }

  renderFooter = () => {
    if (!this.state.loading) return null
    return (
      <View style={{ paddingVertical: 20, borderTopWidth: 1, borderColor: "EE6A59" }}>
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  // onChangeText(text){
  //   console.log('textChanged', text)
  //   let filterArray = this.state.filterPill
  //   let searchResult = filterArray.filter(data => 
  //     data.meal_alert.includes(text)
  //     )
  //     this.setState({filterPill : searchResult})
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* // <Container> */}
        <View style={styles.paddingSettime}>
        <Text style={styles.SettimeText}>ข้อมูลส่วนตัว</Text>
      </View>
        <View style={styles.profilepic}>
          <Image source={require('../../project/src/cat.jpg')}
            style={{ width: 150, height: 150, marginTop: 20}}
          />
        </View>

      {/* <View style={{marginLeft: 15}}>
        <Text style={styles.SetNameText1}>Name : </Text>
      </View> */}

        <View style={{marginTop: 15}}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter}
          />
        </View>
        {/* </Container> */}
      </ScrollView>
    )
  }
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
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
  SetNameText1: {
    color: 'white',
    fontWeight: '300',
    fontSize: 25,
    fontFamily: "Cochin",
    marginLeft: 25
    // textAlign: 'justify'
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  profilepic: {
    // justifyContent: 'center',
    // alignContent: 'center',
    // display: "flex",
    alignItems: "center",
    // flexDirection: 'column'
  }
});

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
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
// } from 'react-native';

// const NotificationScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.paddingProfile}>
//       <Text style={styles.SettimeText}> Profile Screen</Text>
//       </View>
//       {/* <Button
//         title="go to remind screen"
//         onPress={() => navigation.navigate("Notification")}
//       /> */}
//     </View>
//   );
// };

// export default NotificationScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //flexDirection: 'column',
//     backgroundColor: '#50A3A4',
//     //justifyContent: 'flex-start',
//     //alignItems: 'center',
//   },

//   SettimeText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 30,
//     fontFamily: "Cochin",
//   },

//   paddingProfile: {
//     padding: 10,
//     backgroundColor: '#EE6A59',
//     marginTop: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     marginHorizontal: 90,
//   },
// });