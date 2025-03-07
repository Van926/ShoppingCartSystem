import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.screenTitle}>{title}</Text>
      <View style={styles.appInfo}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.appName}>My Shopping App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#007bff', // Blue background
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // White text
  },
  appInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // White text
  },
});

export default CustomHeader;