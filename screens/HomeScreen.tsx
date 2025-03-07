import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { CartContext } from '../context/CartContext'; 
import {useState} from 'react';
const products = [
  {
    id: 1,
    name: 'PS5',
    price: 30000,
    image: require('../images/ps5.jpg'), 
    backgroundColor: '#ffcccc', 
    description: "PS5 with controller included"
  },
  {
    id: 2,
    name: 'Iphone 16',
    price: 25000,
    image: require('../images/iphone16.jpg'), 
    backgroundColor: '#ccffcc', 
    description: "Iphone 16 with charger included"
  },
  {
    id: 3,
    name: 'Laptop',
    price: 25000,
    image: require('../images/Samsung.jpg'), 
    backgroundColor: '#ccccff', 
    description: "Laptop with intel i8, nvidia rtx 3050 and 12 gb ram"
  },
  {
    id: 4,
    name: 'Laptop',
    price: 25000,
    image: require('../images/Samsung.jpg'), 
    backgroundColor: '#ccccff', 
    description: "Laptop with intel i8, nvidia rtx 3050 and 12 gb ram"
  },
  {
    id: 5,
    name: 'Laptop',
    price: 25000,
    image: require('../images/Samsung.jpg'), 
    backgroundColor: '#ccccff', 
    description: "Laptop with intel i8, nvidia rtx 3050 and 12 gb ram"
  },
  {
    id: 6,
    name: 'Laptop',
    price: 25000,
    image: require('../images/Samsung.jpg'), 
    backgroundColor: '#ccccff', 
    description: "Laptop with intel i8, nvidia rtx 3050 and 12 gb ram"
  },
];

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

 
  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };


  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalVisible(true); 
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
                <Text style={styles.productPrice}>Php{item.price}</Text>
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
        onRequestClose={() => setModalVisible(false)}
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
    paddingBottom: 80,
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
    elevation: 5, 
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
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#cccccc', 
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
    backgroundColor: '#28a745',
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