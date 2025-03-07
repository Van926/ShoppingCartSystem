import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const CustomHeader = ({ title }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>{title}</Text>
        <View style={styles.appInfo}>
          <Image
            source={require('./images/logo.jpg')} // Logo path
            style={styles.logo} // Logo style
            resizeMode = "contain"
          />
          <Text style={styles.appName}>ShopIt</Text> 
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'orange',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: 'orange',
    margin: 0
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', 
  },
  appInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
   
    marginLeft:50,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default CustomHeader;