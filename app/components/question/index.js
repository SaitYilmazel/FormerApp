// Imports
import styles from './styles';

import EditableText from './../editableText';
import TextInput from './../textInput';

// Libraries
import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

//
class component extends Component {
  constructor(props) {
    super(props);

    this.textRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentWillMount() {}

  componentDidMount() {}

  getTextInputValue = () => {
    return this.inputRef.current.value;
  };

  getEditableTextValue = () => {
    return this.textRef.current.getValue();
  };

  getValue = () => {
    return {
      title: this.getEditableTextValue(),
      values: {},
      type: 'question',
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
        <TextInput
          style={{
            backgroundColor: '#ffffff',
            marginHorizontal: 8,
            borderRadius: 8,
            marginBottom: 12,
            color: '#757575',
            fontSize: 18,
            paddingHorizontal: 8
          }}
          editable={false}
          ref={this.inputRef}
          value={this.props.value}></TextInput>
      </View>
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
