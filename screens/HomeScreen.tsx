import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const products = [
  { id: 1, name: 'Apples', price: 10 },
  { id: 2, name: 'Burger', price: 20 },
  { id: 3, name: 'Pizza', price: 30 },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.cartButton}
      >
        <Text style={styles.cartButtonText}>Go to Cart ({cart.length})</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"white"
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#007bff', // Blue background
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#ffffff', // White text
    fontSize: 14,
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0fec5c',
    padding: 10,
    borderRadius: 5,
  },
  cartButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default HomeScreen;