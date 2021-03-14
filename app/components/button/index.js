// Imports
import styles from './styles';

// Libraries
import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

//
class component extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={{
          backgroundColor: '#448AFF',
          paddingHorizontal: 20,
          paddingVertical: 10,
          maxWidth: 100,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
          elevation: 1
        }}
        activeOpacity={0.7}>
        <Text style={{color: '#ffffff'}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

// Default Props
component.defaultProps = {
  title: '',
};
component.propTypes = {};

export default component;
