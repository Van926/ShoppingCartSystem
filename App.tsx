import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import { CartProvider } from './context/CartContext';
import CustomHeader from './CustomHeader'; // Import custom header

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: ({ scene, previous, navigation }) => {
              const { options } = scene.descriptor;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                  ? options.title
                  : scene.route.name;

              return <CustomHeader title={title} />; // Use custom header
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }} // Screen title
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'Cart' }} // Screen title
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{ title: 'Checkout' }} // Screen title
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;