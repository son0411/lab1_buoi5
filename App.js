import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddUserScreen from './AddUserScreen';
import UserListScreen from './UserListScreen';
import UpdateUserScreen from './UpdateUserScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
        <Stack.Screen name="UpdateUser" component={UpdateUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
