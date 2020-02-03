import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, Button, Settings } from 'react-native'


export default class Home extends React.Component {
  goToLogin = () => this.props.navigation.navigate('Login')

  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
  }

  GetTime() {

    // Creating variables to hold time.
    var date, TimeType, hour, minutes, seconds, fullTime;

    // Creating Date() function object.
    date = new Date();

    // Getting current hour from Date object.
    hour = date.getHours();

    // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    if (hour <= 11) {

      TimeType = 'AM';

    }
    else {

      // If the Hour is Not less than equals to 11 then Set the Time format as PM.
      TimeType = 'PM';

    }
    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if (hour > 12) {
      hour = hour - 12;
    }
    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
    if (hour == 0) {
      hour = 12;
    }
    // Getting the current minutes from date object.
    minutes = date.getMinutes();

    // Checking if the minutes value is less then 10 then add 0 before minutes.
    if (minutes < 10) {
      minutes = '0' + minutes.toString();
    }

    //Getting current seconds from date object.
    seconds = date.getSeconds();

    // If seconds value is less than 10 then add 0 before seconds.
    if (seconds < 10) {
      seconds = '0' + seconds.toString();
    }
    // Adding all the variables in fullTime variable.
    fullTime = hour.toString() + ':' + minutes.toString() + ' ' + TimeType.toString();
    // Setting up fullTime variable in State.
    this.setState({
      time: fullTime
    });
  }


  componentDidMount() {
    this.Clock = setInterval(() => this.GetTime(), 1000);
    var that = this;

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      date:
        date + ',' + year,
    });
  }

  componentWillUnmount() {
    clearInterval(this.Clock);
  }




  render() {
    //const { navigation } = this.props;
    const intime = this.props.navigation.getParam('timein', 'nothing sent');

    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[d.getDay()];

    //document.write("The current month is " +);
    return (


      <View style={styles.MainContainer}>

        <Text style={styles.TextStyle}> {this.state.time} </Text>
        {/* <Text>Timed in at:{JSON.stringify(navigation.getParam('timein','default value'))} </Text> */}
       
        <Text
          style={{
            fontSize: 20,

          }}>
          {dayName + ', ' + monthNames[d.getMonth()] + ' ' + this.state.date}
        </Text>
        <Text style={styles.bordertext}>Timed-in at: {intime}</Text>
      </View>
    );
  }
}


//this.state.time.toString()
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 400
  },
  MainContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10

  },
  TextStyle:
  {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bordertext: {
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
    padding: 5,
    fontSize: 15,
    paddingLeft:25,
    paddingRight:25,
    padding:10,
    margin:10

  }
})

