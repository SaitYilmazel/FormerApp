import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import LoginScreen from 'screens/loginScreen';
import HomeScreen from 'screens/homeScreen';
import {navigation} from 'utils';

export default function App(props) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    console.log('this.props', props);
    navigation.push(
      props.componentId,
      'LoginScreen',
      'Devam edebilmek için giriş yapın',
    );
  } else {
    navigation.push(
      props.componentId,
      'HomeScreen',
      'Yeni form ekle, var olan formu sil',
    );
  }

  return null;
}
