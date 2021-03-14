// Imports
import styles from './styles';

// Components
import {TextInput, Button} from 'components';

// Libraries
import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {navigation} from 'utils';
import auth from '@react-native-firebase/auth';
//
import PropTypes from 'prop-types';

//
class screen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.passwordAgainRef = React.createRef();
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{paddingHorizontal: 14, paddingVertical: 8}}>
          <TextInput
            ref={this.emailRef}
            placeholder="E-posta adresi belirtiniz..."
            autoCompleteType="email"></TextInput>
          <TextInput
            ref={this.passwordRef}
            placeholder="Parola belirtiniz..."
            secureTextEntry={true}></TextInput>
          <TextInput
            ref={this.passwordAgainRef}
            placeholder="Tekrar Parola belirtiniz..."
            secureTextEntry={true}></TextInput>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button
              title="Kayıt ol"
              onPress={() => {
                let email = this.emailRef.current.getValue();
                let password = this.passwordRef.current.getValue();
                let passwordAgain = this.passwordAgainRef.current.getValue();

                if (
                  email &&
                  password &&
                  passwordAgain &&
                  password === passwordAgain
                ) {
                  auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                      navigation.push(
                        this.props.componentId,
                        'HomeScreen',
                        'Yeni form ekle, var olanı düzenle veya sil',
                        true,
                      );
                    })
                    .catch((error) => {
                      if (error.code === 'auth/email-already-in-use') {
                        alert('Bu e-posta adresi zaten kullanımda!');
                      }

                      if (error.code === 'auth/invalid-email') {
                        alert('Bu e-posta adresi geçersiz!');
                      }
                    });
                } else {
                  alert('Hata!');
                }
              }}></Button>
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                maxWidth: 100,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
              }}
              activeOpacity={0.7}
              onPress={() => {
                Navigation.pop(this.props.componentId);
              }}>
              <Text style={{color: '#757575'}}>Giriş yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

// Default Props
screen.defaultProps = {};
screen.propTypes = {};

export default screen;
