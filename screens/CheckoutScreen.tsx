import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cart } = route.params; // Access cart from route.params

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle checkout
  const handleCheckout = () => {
    Alert.alert(
      'Checkout Successful',
      'Thank you for your purchase!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'), // Redirect to HomeScreen
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>
              ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </Text>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 5,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;