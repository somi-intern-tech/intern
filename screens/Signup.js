import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class Signup extends React.Component {

  state = {
    username: '',
    password: '',
    lname: '',
    fname: ''
  }
  register = () => {
    const { username, password, lname, fname } = this.state;
    if (password.length < 5 || username.length < 5) {
      Alert.alert('Your password/username is less than 5 letters')
      console.log('Your password/username is less than 5 letters');
      if (username.trim().length == 0) {
        this.username.setNativeProps({
          borderColor: 'red',
          borderWidth: 1
        });
        return;
      }

      else {
        <TextInput style={{ borderColor: 'green' }}
          value='username'></TextInput>
      }
    }

    else {
      Alert.alert('Successfully created an account')

      this.props.navigation.navigate('Home')

    }
  }

  handleUsernameChange = username => {

    this.setState({ username })


  }

  handlePasswordChange = password => {
    this.setState({ password })
  }
  goToLogin = () => {

    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Signup</Text>
        <TextInput style={styles.inputBox}
          placeholder='First Name'
          name='fname'
        >
        </TextInput>
        <TextInput style={styles.inputBox}
          placeholder='Last Name'
          name='lname'
        >
        </TextInput>
        <TextInput style={styles.inputBox}
          placeholder='Username'
          onChangeText={this.handleUsernameChange}
          name='username'
        >

        </TextInput>
        <TextInput style={styles.inputBox}
          placeholder='Password'
          secureTextEntry
          name='password'
          onChangeText={this.handlePasswordChange}

        >
        </TextInput>
        <Button title='Register' onPress={this.register} />

        <Button title='Go to Login' onPress={this.goToLogin} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D98Ba',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: 250,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    padding: 10,
    fontSize: 18,
    marginTop: 3
  }
})