import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import CustomHeader from './CustomHeader'; 
import { CartProvider } from './context/CartContext';


const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            header: () => {
            
              const routeName = route.name;
              return <CustomHeader title={routeName} />; 
            },
          })}
        >
          <Stack.Screen name="Home"  component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }}/>
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;