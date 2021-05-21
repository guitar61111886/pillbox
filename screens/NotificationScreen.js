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
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Item, Input, Icon, Button } from 'native-base';
import _ from 'lodash';

export default class NotificationScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      fullData: [],
      loading: false,
      error: null,
      query: ""
    }
  }

  componentDidMount(){
    this.requestAPI()
  }

  requestAPI = _.debounce(() => {
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
  }, 250)

  _renderItem = ({ item, index }) => {
    return (
      <ListItem style={{
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 10
        }}>
        <Body>
          <Text style={styles.sectionTitle}>{item.time_alert}</Text>
          <Text note>{item.meal_alert }</Text>
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

  handleSearch = () => {
    const formattedQuery = text.toLowercase()
    const data = _.filter(this.state.fullData, photo => {
      if(photo.title.includes(formattedQuery)){
        return true
      } 
      return false
    })
    this.setState({data, query: text})
  }

  render() {
    return (
      // <View style={styles.container}>
        <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={this.handleSearch}/>
            <Icon name="ios-people" />
          </Item>
        </Header>

        <List>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter}
          />
        </List>
        </Container>
      // </View>
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