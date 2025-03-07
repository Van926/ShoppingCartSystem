import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { CartContext } from '../context/CartContext'; // Import CartContext
import {useState} from 'react';
const products = [
  {
    id: 1,
    name: 'PS5',
    price: 30000,
    image: require('../images/ps5.jpg'), // Local image path
    backgroundColor: '#ffcccc', // Light red background
  },
  {
    id: 2,
    name: 'Iphone 16',
    price: 25000,
    image: require('../images/iphone16.jpg'), // Local image path
    backgroundColor: '#ccffcc', // Light green background
  },
  {
    id: 3,
    name: 'Product 3',
    price: 25000,
    image: require('../images/Samsung.jpg'), // Local image path
    backgroundColor: '#ccccff', // Light blue background
  },
];

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart } = useContext(CartContext); // Access cart state and functions
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const [modalVisible, setModalVisible] = useState(false); // Control modal visibility

  // Check if a product is already in the cart
  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  // Function to handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setModalVisible(true); // Show the modal
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductClick(item)}>
            <View style={[styles.productItem, { backgroundColor: item.backgroundColor }]}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <TouchableOpacity
                  style={[
                    styles.addToCartButton,
                    isProductInCart(item.id) && styles.disabledButton, // Disable if already in cart
                  ]}
                  onPress={() => addToCart(item)}
                  disabled={isProductInCart(item.id)} // Disable button if already in cart
                >
                  <Text style={styles.addToCartButtonText}>
                    {isProductInCart(item.id) ? 'Added to Cart' : 'Add to Cart'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContent}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cartButtonText}>Go to Cart ({cart.length})</Text>
      </TouchableOpacity>

      {/* Modal for Product Description */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)} // Close modal on Android back button
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedProduct && (
              <>
                <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
                <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
                <Button title="Close" onPress={() => setModalVisible(false)} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  flatListContent: {
    paddingBottom: 80, // Add padding to avoid overlap with the "Go to Cart" button
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#cccccc', // Gray background for disabled button
  },
  addToCartButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;