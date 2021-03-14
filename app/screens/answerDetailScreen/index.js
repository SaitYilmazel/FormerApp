// Imports
import styles from './styles';

// Components
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Share from 'react-native-share';

// Libraries
import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { navigation } from 'utils';

import PropTypes from 'prop-types';

//
class screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
      answers: [],
    };
  }

  componentWillMount() { }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidMount() {
    console.log('props', this.props);
    let data = this.props.data;
    firestore()
      .collection('forms')
      .get()
      .then((querySnapshot) => {
        const forms = [];

        querySnapshot.docs.forEach((documentSnapshot) => {
          forms.push({
            ...documentSnapshot.data(),
          });
        });
        this.setState({
          forms: forms,
        });
      });
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={{ paddingHorizontal: 14, paddingVertical: 8, flex: 1 }}>
          <FlatList
            data={this.state.forms}
            renderItem={(data, index) => {
              console.log("item", data);
              return (
                <View
                  style={{
                    width: '100%',
                    minHeight: 50,
                    justifyContent: 'center',
                  }}>

                  <Text style={{ color: '#212121', fontSize: 16 }}>
                    {data.item.form[0].values[0]}
                  </Text>

                  <Text style={{ color: '#757575', fontSize: 10 }}>{data.item.title}</Text>

                </View>
              );
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
        </View>
      </SafeAreaView>
    );
  }
}

// Default Props
screen.defaultProps = {};
screen.propTypes = {};

export default screen;
