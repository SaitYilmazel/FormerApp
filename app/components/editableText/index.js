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
      value: this.props.value,
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  getValue = () => {
    return this.state.value;
  };

  getValueWithTitle = () => {
    return {
      value: this.state.value,
      type: this.props.type,
    };
  };

  render() {
    return (
      <TextInput
        style={{
          height: 50,
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
  value: '',
  type: '',
};
component.propTypes = {};

export default component;
