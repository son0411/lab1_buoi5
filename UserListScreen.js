// UserListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Alert, FlatList } from 'react-native';
import { getUsers, deleteUser } from './UserService';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users khi component mount
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        setError(error.message);
        Alert.alert('Error', 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Hàm xử lý xóa người dùng
  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteUser(id);
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
      Alert.alert('Success', 'User deleted successfully');
    } catch (error) {
      setError(error.message);
      Alert.alert('Error', 'Failed to delete user');
    } finally {
      setLoading(false);
    }
  };

  // Hiển thị loading nếu đang tải dữ liệu
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.email}</Text>
            <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default UserListScreen;
