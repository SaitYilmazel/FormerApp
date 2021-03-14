// Imports
import styles from './styles';

// Libraries
import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

//
class component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  getValue = () => {
    return this.state.value
  }

  render() {
    return (
      <TextInput
        style={{
          height: 50,
          borderBottomWidth: 1,
          borderColor: '#BDBDBD',
        }}
        {...this.props}
        placeholder={this.props.placeholder}
        multiline={this.props.multiline}
        value={this.state.value}
        onChangeText={(value) => {
          this.setState({
            value: value,
          });
        }}></TextInput>
    );
  }
}

// Default Props
component.defaultProps = {
  placeholder: '',
  multiline: false,
};
component.propTypes = {};

export default component;
