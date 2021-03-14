// Imports
import styles from './styles';

import EditableText from './../editableText';
import TextInput from './../textInput';
import Questionradio from "components/questionradio";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';


// Libraries
import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

//

var radio_props = [
];

class component extends Component {

  constructor(props) {
    super(props);

    this.textRef = React.createRef();
    this.inputRef = React.createRef();
    this.titleRef = React.createRef();

    this.textRefrdbtn = React.createRef();

    this.state = {
      radiofrm: [],
      types3: [],
      value3: 0,
      value3Index: 0,
      aaa:'',
    }
    this.formRef = [];

    this.radioRef = [];
  }

  componentWillMount() { }

  componentDidMount() { }

  getTextInputValue = () => {
    return this.inputRef.current.value;
  };

  getEditableTextValue = () => {
    return this.textRef.current.getValue();
  };

  getEditableTextValueRdBtn = () => {
    return this.textRefrdbtn.current.getValue();
  };

  getValue = () => {
    let values = this.state.types3.map((value, index)=>{
      return this.radioRef[index].getValue()
    })
    return {
      title: this.getEditableTextValue(),
      values: values,
      type: 'question1',
    };
  };

  render() {
    return (
      <View
        style={{
          marginBottom: 12,
          width: '100%',
          backgroundColor: '#BDBDBD',
          borderWidth: 2,
          borderStyle: 'dashed',
          borderColor: '#757575',
          borderRadius: 8,
        }}>
        <EditableText
          style={{
            fontSize: 18,
            color: '#757575',
            fontWeight: '700',
            marginHorizontal: 8,
          }}
          ref={this.textRef}
          value={this.props.title}></EditableText>
        <RadioForm formHorizontal={false} animation={true} >
          {this.state.types3.map((obj, i) => {
            console.log('item',obj,i);
            var onPress = (value, index) => {
              this.setState({
                value3: value,
                value3Index: index
              })
            }
            return (
              <RadioButton labelHorizontal={true} key={i} >
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={this.state.value3Index === i}
                  onPress={onPress}
                  buttonInnerColor={'#f39c12'}
                  buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                  buttonSize={30}
                  buttonStyle={{}}
                  buttonWrapStyle={{ marginLeft: 10 }} />
                <EditableText
                  style={{
                    fontSize: 18,
                    color: '#757575',
                    fontWeight: '700',
                    marginHorizontal: 8,
                    borderWidth: 1,
                  }}
                  ref={(ref) => (this.radioRef[i] = ref)}
                  value={obj.title}>
                </EditableText>
              </RadioButton>
            )
          })}
        </RadioForm>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.setState({
              types3: [
                ...this.state.types3,
                { type: 'rdnbtn', title: 'Seçenek girin', label: '', value: ""},
              ]
            });
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#757575',
              height: 31,
              marginLeft: 35,
              marginBottom: 10
            }}>+</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

// Default Props
component.defaultProps = {
  title: '',
  value: '',
};
component.propTypes = {};

export default component;