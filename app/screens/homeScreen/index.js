// Imports
import styles from './styles';

// Components
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
      forms: [],
    };
  }

  componentWillMount() {}

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidMount() {
    let uid = auth().currentUser._user.uid;

    firestore()
      .collection('forms')
      .where('uid', '==', uid)
      .onSnapshot((querySnapshot) => {
        console.log('querySnapshot---', querySnapshot);

        const forms = [];

        querySnapshot.docs.forEach((documentSnapshot) => {
          forms.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.ref._documentPath.id,
          });
        });
        this.setState({
          forms: forms,
        });

        console.log('querySnapshot', querySnapshot.docs);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{paddingHorizontal: 14, paddingVertical: 8, flex: 1}}>
          <FlatList
            data={this.state.forms}
            renderItem={(data) => {
              console.log("data",data);
              return (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.push(
                      this.props.componentId,
                      'AnswerScreen',
                      data.item.title,
                      true,
                      {
                        data: data.item,
                      },
                    );
                  }}>
                  <Text style={{color: '#212121', fontSize: 16}}>
                    {data.item.title}
                  </Text>
                  <TouchableOpacity
                    style={{
                      position:"absolute",
                      right:0,
                      width: 32,
                      height: 32,
                      backgroundColor: '#F44336',
                      borderRadius: 16,
                      alignItems: 'center',
                      justifyContent: 'center',
                      elevation: 2,
                    }}
                    onPress={() => {
                      firestore()
                        .collection('forms')
                        .doc(data.item.id)
                        .delete()
                        .then((data) => {})
                        .catch((error) => {
                          console.error(error);
                        });
                    }}>
                    <Text style={{color: '#ffffff', fontSize: 12}}>sil</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
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
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 14,
              bottom: 8,
              paddingHorizontal: 20,
              paddingVertical: 10,
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
              navigation.push(
                this.props.componentId,
                'CreateFormScreen',
                'Dilediğin şekilde forumunu tasarla',
                true,
              );
            }}>
            <Text style={{color: '#ffffff', fontSize: 24}}>+</Text>
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
