// Imports
import {Navigation} from 'react-native-navigation';

// Screens
import ExampleScreen from 'screens/exampleScreen';
import WelcomeScreen from 'screens/welcomeScreen';
import LoginScreen from 'screens/loginScreen';
import RegisterScreen from 'screens/registerScreen';
import HomeScreen from 'screens/homeScreen';
import CreateFormScreen from 'screens/createFormScreen';
import AnswerScreen from 'screens/answerScreen';
import AnswerDetailScreen from 'screens/answerDetailScreen';

//
export default function registerScreens() {
  Navigation.registerComponent('ExampleScreen', () => ExampleScreen);
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('RegisterScreen', () => RegisterScreen);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('CreateFormScreen', () => CreateFormScreen);
  Navigation.registerComponent('AnswerScreen', () => AnswerScreen);
  Navigation.registerComponent('AnswerDetailScreen', () => AnswerDetailScreen);
}
