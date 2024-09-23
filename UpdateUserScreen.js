// App.js
import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddUserScreen from './AddUserScreen';
import UserListScreen from './UserListScreen';
import UpdateUserScreen from './UpdateUserScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        {/* Màn hình hiển thị danh sách người dùng */}
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={({ navigation }) => ({
            title: 'User List',
            headerRight: () => (
              <Button
                title="Add User"
                onPress={() => navigation.navigate('AddUser')}
              />
            ),
          })}
        />
        {/* Màn hình thêm người dùng */}
        <Stack.Screen
          name="AddUser"
          component={AddUserScreen}
          options={({ navigation }) => ({
            title: 'Add New User',
            headerLeft: () => (
              <Button
                title="Back"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        {/* Màn hình cập nhật thông tin người dùng */}
        <Stack.Screen
          name="UpdateUser"
          component={UpdateUserScreen}
          options={({ navigation }) => ({
            title: 'Update User',
            headerLeft: () => (
              <Button
                title="Back"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
