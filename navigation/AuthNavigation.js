import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import { Header } from 'react-native/Libraries/NewAppScreen'

const AuthNavigation = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false
      }
    },
    Signup: {
      screen: Signup, navigationOptions: {
        headerShown: false
      }
    }


  },
  {
    initialRouteName: 'Login'

  }
)

export default AuthNavigation