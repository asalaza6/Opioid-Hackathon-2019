import {StyleSheet,Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    lowerDash: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'flex-end',
    },
    menuOne: {
      width:deviceWidth,
      justifyContent: 'center',
      flexDirection:'row',
      backgroundColor:'lightblue'
    },
    menuTwo: {
      width:deviceWidth,
      justifyContent: 'center',
      flexDirection:'row',
      backgroundColor:'beige'
    },
    menuThree: {
      width:deviceWidth,
      justifyContent: 'center',
      flexDirection:'row',
      backgroundColor:'palevioletred'
    },
  
    welcome:{
      textAlign: "center",
      fontSize: 20,
      color: "blue",
    },
    missionStatement:{
      margin: 15,
      fontSize: 15,
      color: "black",
    },
    myth:{
      margin: 20,
      fontSize: 15,
      color: "black",
      fontWeight: "normal"
    },
    fact:{
      margin: 20,
      fontSize: 15,
      fontWeight: "bold",
    },
    menuTitle:{
      textAlign: "center",
      fontSize: 30,
      color: "black",
    },
    menuSubtitle:{
      margin: 10,
      fontSize: 20,
      color: "black",
    },
    menuNormal:{
      margin: 20,
      fontSize: 15,
      color: "black",
    },
    quotes:{
      textAlign: "center",
      fontSize: 15,
      color: "black",
    },
    phone: {
      textAlign: "center",
      fontSize: 30,
      color: "black",
      fontWeight: "bold",
    },
    address: {
      textAlign: "center",
      fontSize: 15
    }
  });