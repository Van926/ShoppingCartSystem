import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.screenTitle}>{title}</Text> {/* Current page name */}
      <View style={styles.appInfo}>
        <Image source={require('./images/logo.jpg')} style={styles.logo} /> {/* Logo */}
        <Text style={styles.appName}>ShopIt</Text>
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
    backgroundColor: 'orange', // Blue background
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