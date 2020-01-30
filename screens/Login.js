import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      username: '',
      password: '',
      a: ''
    }
  }
  // componentDidMount() {

  //   return fetch('http://demo2276663.mockable.io/login')
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson.account,
  //       })
  //     })

  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }


  handleUsernameChange = username => {
    this.setState({ a: '' })
    this.setState({ username })
  }

  handlePasswordChange = password => {
    this.setState ({ password })
  }


  onLogin = () => {
    let bodyData = {
      'u': this.state.username,
      'p': this.state.password
    }
    const {
      username,
      password
    } = this.state

    fetch('http://demo2276663.mockable.io/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { 'username': username, 'password': password }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.validation === "hello") {
          alert(responseJson.validation)

        }
        else {
          alert("error")
        }
        //alert(JSON.stringify(JSON.parse(responseJson)))


        // this.props.navigation.navigate('App')


      })
      .catch((error) => {
        console.error(error);
      });


  }
  handleError = a => {
    this.setState("Fill up fields")
  }

  errorto = () => {
    if (this.state.username == '' || this.state.password == '') {
      this.setState({
        a: 'Please enter your user and password'
      })
    }
    else if (this.state.username != '' && this.state.password != '') {
      this.onLogin()
    }
    else {
      this.setState({
        a: 'Invalid User or Password'
      })
    }
  }
  //goToSignup = () => this.props.navigation.navigate('Signup')

  render() {

    // if (this.state.isLoading) {
    //   return (
    //     <View style={styles.container}>
    //       <ActivityIndicator />
    //     </View>
    //   )
    // } else {
    console.log('else: ', this.state.a)
    return (

      <View style={styles.container}>

        <Image source={require('../Images/propelrr.jpg')}
          style={styles.image} />

        <View style={styles.container1}>
          <Text style={{ color: 'red' }}>{this.state.a}</Text>
          <View style={styles.input}>
            <TextInput
              name='username'
              value={this.state.username}
              placeholder='Username'
              autoCapitalize='none'
              onChangeText={this.handleUsernameChange}


            />
          </View>
          <View style={styles.input}>
            <TextInput
              name='password'
              value={this.state.password}
              placeholder='Password'
              secureTextEntry
              onChangeText={this.handlePasswordChange}
            />
          </View>

          <TouchableOpacity style={styles.button}
            onPress={() => {
              const {
                username,
                password
              } = this.state
              // this.state.dataSource.map((val) => {

              //   if (username == val.user && password == val.password) {
              //     this.onLogin()
              //   }
              //   else if (username.length == 0 || password.length == 0) {
              //     // this.setState.a = "Please enter your user and password"
              //     this.errorto()

              //   }
              //   else {
              //     this.errorto()

              //   }



              // })\
              this.errorto()
            }



            }


          >
            <Text style={{ fontWeight: 'bold', color: 'white' }}> LOGIN </Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}
// }

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ff9800',
    alignItems: 'center',
    justifyContent: 'center'

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ef6730',
    padding: 15,
    width: 300,
    marginTop: 10
  },

  background: {
    width: 500,
    height: 200,
    backgroundColor: 'skyblue'
  },

  image: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 200,
    height: 250,
    width: 250,
    resizeMode: 'stretch',
    marginBottom: 15
  },

  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'

  },
  container1: {
    marginTop: -5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowOffset: { width: 8, height: 8, },
    shadowColor: 'black',
    shadowOpacity: .3,
    padding: 25
  },
})



