
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>About Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sapiente fugiat molestiae suscipit, praesentium deleniti ducimus fugit dolorem ea sint! Veniam accusantium similique non doloribus delectus magni dolorum sed vel?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default MyComponent;
