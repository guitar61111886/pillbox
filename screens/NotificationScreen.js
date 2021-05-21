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
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Item, Input, Icon, Button } from 'native-base';


export default class NotificationScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      fullData: [],
      loading: false,
      error: null
    }
  }

  componentDidMount(){
    this.requestAPI()
  }

  requestAPI = () => {
    this.setState({loading: true})
    const apiURL = "http://172.20.10.5/API/remindapi.php"
    fetch(apiURL).then((res) => res.json())
    .then((resJSON) =>{
      this.setState({
        loading: false,
        data: resJSON,
        fullData: resJSON
      })
    }).catch(error => {
      this.setState({error,loading: false})
    })
  }

  _renderItem = ({ item, index }) => {
    return (
      <ListItem avatar>
        <Body>
          <Text>{item.time_alert}</Text>
          <Text note>{item.meal_alert}</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    )
  }


  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
        </Header>

        <List>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </List>
      </Container>

    )
  }
};



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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