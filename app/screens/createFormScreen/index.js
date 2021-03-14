// Imports
import styles from './styles';

// Components
import { EditableText, Question, Button } from 'components';
import Questionradio from "components/questionradio";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Navigation } from 'react-native-navigation';

// Libraries
import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';

import PropTypes from 'prop-types';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

//

class screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      form: [],
    };

    this.formRef = [];
    this.titleRef = React.createRef();
  }

  componentWillMount() { }

  componentDidMount() {
    console.log('auth', auth().currentUser._user);
  }

  renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ flex: 1 }}>
          <ScrollView
            style={styles.modal}
            contentContainerStyle={styles.modalContainerStyle}>
            <TouchableOpacity
              style={styles.modalItem}
              activeOpacity={0.7}
              onPress={() => {
                this.setState({
                  form: [
                    ...this.state.form,
                    { type: 'question', title: 'Bir soru girin' },
                  ],
                  modalVisible: false,
                });
              }}>
              <Text style={styles.modalText}>Kısa Metin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalItem}
              activeOpacity={0.7}
              onPress={() => {
                this.setState({
                  form: [
                    ...this.state.form,
                    { type: 'question1', title: 'Bir Soru Girin' },
                  ],
                  modalVisible: false,
                });
              }}>
              <Text style={styles.modalText}>Tekli Seçim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Text style={styles.modalText}>Çoklu Seçim</Text>
              <View style={styles.modalBadge}>
                <Text style={styles.modalBadgeText}>YAKINDA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Text style={styles.modalText}>E-posta</Text>
              <View style={styles.modalBadge}>
                <Text style={styles.modalBadgeText}>YAKINDA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Text style={styles.modalText}>Telefon</Text>
              <View style={styles.modalBadge}>
                <Text style={styles.modalBadgeText}>YAKINDA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Text style={styles.modalText}>Harita</Text>
              <View style={styles.modalBadge}>
                <Text style={styles.modalBadgeText}>YAKINDA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Text style={styles.modalText}>Görsel</Text>
              <View style={styles.modalBadge}>
                <Text style={styles.modalBadgeText}>YAKINDA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Text style={styles.modalText}>Adres</Text>
              <View style={styles.modalBadge}>
                <Text style={styles.modalBadgeText}>YAKINDA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Text style={styles.modalText}>Tarih</Text>
              <View style={styles.modalBadge}>
                <Text style={styles.modalBadgeText}>YAKINDA</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <TouchableOpacity
            style={styles.modalCloseButton}
            activeOpacity={0.7}
            onPress={() => {
              this.setState({
                modalVisible: false,
              });
            }}>
            <Text style={styles.modalCloseButtonText}>×</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  renderAddButton = () => {
    return (
      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.7}
        onPress={() => {
          this.setState({
            modalVisible: true,
          });
        }}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    );
  };

  renderForm = () => {
    return this.state.form.map((item, index) => {
      console.log('item', item, index);
      switch (item.type) {
        case 'question':
          return (
            <Question
              ref={(ref) => (this.formRef[index] = ref)}
              title={item.title}
              value={item.value}></Question>
          );
          break;
        case 'question1':
          return (
            <Questionradio
              ref={(ref) => (this.formRef[index] = ref)}
              title={item.title}
              value={item.value}>
            </Questionradio>
          );
          break;
      }
    });
  };
  //<Question ref={ref => (this.formRef[0] = ref)} title={'Bir soru girin'} value={''}></Question>

  renderWrapper = () => {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <EditableText
            ref={this.titleRef}
            style={styles.formTitle}
            type={'title'}
            value="Bir başlık yazın"></EditableText>
          {this.state.form.length === 0 ? (
            <View style={styles.firstQuestionView}>
              <Text
                style={styles.firstQuestionText}
                onPress={() => {
                  this.setState({
                    modalVisible: true,
                  });
                }}>
                İlk sorunuzu ekleyin
              </Text>
            </View>
          ) : (
              this.renderForm()
            )}
          <TouchableOpacity
            style={styles.sendButton}
            activeOpacity={0.7}
            onPress={() => { 
              let formGroup = this.state.form.map((item, index) => {
                return this.formRef[index].getValue();
              });
              let form = {
                title: this.titleRef.current.getValue(),
                form: formGroup,
                uid: auth().currentUser._user.uid,
              };
              console.log('form', form);
              firestore()
                .collection('forms')
                .add(form)
                .then(() => {
                  Navigation.pop(this.props.componentId);
                  console.log('form added!');
                });
            }}>
            <Text style={styles.sendButtonText}>Oluştur</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderModal()}
        {this.renderWrapper()}
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
            elevation: 1
          }}
          activeOpacity={0.7}
          onPress={() => {
            this.setState({
              modalVisible: true,
            });
          }}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

// Default Props
screen.defaultProps = {};
screen.propTypes = {};

export default screen;
