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
  Text
} from 'react-native';
import { Container, Header, Content,List, ListItem, Left, Body, Right, Thumbnail, Item, Input, Icon, Button } from 'native-base';
//import _ from 'lodash';
// import {ListItem,searchBar} from 'react-native-elements';
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

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     time_alert1: [],
  //     meal_alert1: [],
  //     isLoading: true
  //   };
  // }

  
  // componentDidMount() {
  //   fetch('http://172.20.10.5/API/remindapi.php',{
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       time_alert: this.state.time_alert1,
  //       meal_alert: this.state.meal_alert1
  //     }),
  //   })
  //     // .then((response) => response.json())
  //     .then((json) => {
  //       console.log('JSON', json)
  //       this.setState({
  //         loading: false,
  //         data: json,
  //         data1: json
  //       })
  //       // Alert.alert(responseJson);
  //     })
  //     // .then((json) => {
  //     //   return json.time_alert,
  //     //    json.meal_alert
  //     // })
  //     .catch((error) => {
  //       console.error(error)
  //       })
  // };
  // // state ={
  // //   data: []
  // // }

  componentDidMount(){
    this.requestAPI()
  }

  requestAPI = () => {
    this.setState({loading: true})
    const apiURL = "http://172.20.10.5/API/remindapi.php"
    fetch(apiURL).then((res) => res.json())
    .then((json) =>{
      console.log('JSON',json)
      this.setState({
        loading: false,
        data: json,
       // fullData: json,
        filterPill: json
      })
    }).catch(error => {
      console.error(error);
      this.setState({data: []})
      this.setState({error,loading: false})
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
          <Text style={styles.sectionTitle}>{item.meal_alert}</Text>
          <Text >{item.time_alert }</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    )
  }

  renderFooter = () =>{
    if (!this.state.loading) return null
    return (
      <View style={{paddingVertical: 20, borderTopWidth: 1, borderColor: "EE6A59"}}>
        <ActivityIndicator animating size="large"/>
      </View>
    )
  }

  onChangeText(text){
    console.log('textChanged', text)
    let filterArray = this.state.filterPill
    let searchResult = filterArray.filter(data => 
      data.meal_alert.includes(text)
      )
      this.setState({filterPill : searchResult})
  }

  // handleSearch = (text) => {
  //   const formattedQuery = text.toLowercase()
  //   const data = _.filter(this.state.fullData, photo => {
  //     if(photo.title.includes(formattedQuery)){
  //       return true
  //     } 
  //     return false
  //   })
  //   this.setState({data, query: text})
  // }

  render() {
    return (
      <View style={styles.container}>
        {/* // <Container> */}
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            {/* <Input placeholder="Search" onChangeText={this.handleSearch}/> */}
            <Input placeholder="Search" onChangeText={text => this.onChangeText(text)}/>
            <Icon name="ios-people" />
          </Item>
        </Header>

        <List>
          <FlatList
             data={this.state.data}
            // data={this.state.data1}
            // data={data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter}
          />
        </List>
        {/* </Container> */}
       </View>
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
});

// import React from 'react';
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
// } from 'react-native';

// const NotificationScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.paddingSettime}>
//         <Text style={styles.SettimeText}>Alert history</Text>
//       </View>
//       {/* <Button
//           title="go to remind screen"
//           onPress={() => navigation.navigate("Notification")}
//         /> */}
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

//   ss: { alignItems: 'center', justifyContent: 'center', backgroundColor: "#50A3A4" }
// });