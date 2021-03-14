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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button
              title="Giriş yap"
              onPress={() => {
                // All future sign-in request now include tenant ID.
                let email = this.emailRef.current.getValue();
                let password = this.passwordRef.current.getValue();

                auth()
                  .signInWithEmailAndPassword(email, password)
                  .then(function (result) {
                    console.log('result', result);
                    navigation.push(
                      this.props.componentId,
                      'HomeScreen',
                      'Yeni form ekle, var olanı düzenle veya sil',
                      true,
                    );
                  })
                  .catch(function (error) {
                    console.log('error', error);
                  });
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
                navigation.push(
                  this.props.componentId,
                  'RegisterScreen',
                  'Devam edebilmek için kayıt ol',
                  true,
                );
              }}>
              <Text style={{color: '#757575'}}>Kayıt ol</Text>
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
