import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { Ionicons } from '@expo/vector-icons';

const CheckoutScreen = ({ navigation }) => {
  const { cart, clearCart } = useContext(CartContext); // Access cart and clearCart function

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
          onPress: () => {
            clearCart(); // Clear the cart
            navigation.navigate('Home'); // Redirect to HomeScreen
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#007bff" />
        <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
      <Text>Items for Checkout</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>
              ${item.price} x {item.quantity} = Php{item.price * item.quantity}
            </Text>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total: Php{totalPrice.toFixed(2)}</Text>
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
   backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#007bff',
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