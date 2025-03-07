import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const CustomHeader = ({ title }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>{title}</Text>
        <View style={styles.appInfo}>
          <Image source={require('./images/logo.jpg')} style={styles.logo} /> 
          <Text style={styles.appName}>My Shopping App</Text> 
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#007bff', // Match header background color
  },
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