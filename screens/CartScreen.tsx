import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const { cart } = route.params;

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
});

export default CartScreen;