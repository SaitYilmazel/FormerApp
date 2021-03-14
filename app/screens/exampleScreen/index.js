// Imports
import styles from './styles';

// Components

// Libraries
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

//
class screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>yo</Text>
      </View>
    );
  }
}

// Default Props
screen.defaultProps = {};
screen.propTypes = {};

export default screen;
