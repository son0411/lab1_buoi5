// AddUserScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { addUser } from './UserService';

const AddUserScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleAddUser = async () => {
    if (name === '' || email === '' || age === '') {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      await addUser(name, email, parseInt(age));
      Alert.alert('Success', 'User added successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to add user');
    }
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

export default AddUserScreen;
