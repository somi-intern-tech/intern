import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, Button } from 'react-native'

export default class Home extends React.Component {
  goToLogin = () => this.props.navigation.navigate('Login')
  logout = () => {
    if (AccessToken.getCurrentAccessToken() != null) {
      LoginManager.logOut()
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  //fetch data
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies

        })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <Text>Home</Text>
          <Button
            title='Log Out' onPress={this.goToLogin}
          />
        </View>
      )
    }

    else {
      let movies = this.state.dataSource.map((val, key) => {
        return <View key={key} style={styles.item}>
          <Text>{val.title}</Text>
        </View>
      });
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}> Movie Titles</Text>
          {movies}
          <Button
            title='Log Out' onPress={this.goToLogin}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 400
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
})
