// Imports
import styles from './styles';

// Components
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Share from 'react-native-share';

// Libraries
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {navigation} from 'utils';

import PropTypes from 'prop-types';

//
class screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      answersOptions: [],
    };
  }

  componentWillMount() {}

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidMount() {
    console.log('->', auth().currentUser._user.uid);
    let data = this.props.data;
    console.log('props', data.form[0]);

    firestore()
      .collection('forms')
      .where('title', '==', data.title)
      .get()
      .then((querySnapshot) => {
        const answers = [];

        querySnapshot.docs.forEach((documentSnapshot) => {
          answers.push({
            ...documentSnapshot.data(),
          });
        });
        this.setState({
          answers: answers,
        });
      });

    firestore()
      .collection('answers')
      .where('form_id', '==', this.props.data.id)
      .get()
      .then((querySnapshot) => {
        const answersOptions = {};
        console.log('User exists: ', querySnapshot.size);

        querySnapshot.docs.forEach((documentSnapshot) => {
          if (
            answersOptions[documentSnapshot.data().answer[0].value] ===
            undefined
          ) {
            answersOptions[documentSnapshot.data().answer[0].value] = 1;
          } else {
            answersOptions[documentSnapshot.data().answer[0].value]++;
          }
        });
        answersOptions['total'] = querySnapshot.docs.length;
        console.log('answersOptions', answersOptions);

        this.setState({
          answersOptions,
        });
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{paddingHorizontal: 14, paddingVertical: 8, flex: 1}}>
          <FlatList
            data={this.state.answers}
            renderItem={(data, index) => {
              return this.props.data.form[0].values.map((item, index) => {
                return (
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                      flex: 1,
                    }}>
                    <Text style={{color: '#212121', fontSize: 16}}>
                      <Text style={{fontWeight: '700'}}>{item}:</Text>{' '}
                      {this.state.answersOptions[item]
                        ? this.state.answersOptions[item]
                        : 0}{' '}
                      oy -{' '}
                      {this.state.answersOptions[item]
                        ? (
                            (this.state.answersOptions[item] * 100) /
                            this.state.answersOptions['total']
                          ).toFixed(1)
                        : 0}
                      %
                    </Text>
                  </View>
                );
              });
            }}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: '#BDBDBD',
                }}
              />
            )}
            keyExtractor={(item) => item.title}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 14,
              bottom: 8,
              backgroundColor: '#448AFF',
              borderRadius: 28,
              width: 56,
              height: 56,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 1,
            }}
            activeOpacity={0.7}
            onPress={() => {
              let data = this.props.data;
              console.log('data');
              const url = 'http://elviamoda.com/former?form=' + data.id;
              const title = '';
              const message =
                '"' + data.title + '" formumu şu adreste bulabilirsiniz:';
              const options = Platform.select({
                default: {
                  title,
                  subject: title,
                  message: `${message} ${url}`,
                },
              });
              Share.open(options);
            }}>
            <Text style={{color: '#ffffff', fontSize: 12, fontWeight: '700'}}>
              paylaş
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

// Default Props
screen.defaultProps = {};
screen.propTypes = {};

export default screen;
