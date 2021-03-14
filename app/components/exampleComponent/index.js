// Imports
import styles from "./styles";

// Libraries
import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

//
class component extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return <View style={styles.container} />;
  }
}

// Default Props
component.defaultProps = {};
component.propTypes = {};

export default component;
