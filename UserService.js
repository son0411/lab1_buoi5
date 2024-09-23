// UserService.js
import axios from 'axios';
import { firebaseConfig } from './firebase'; // Đảm bảo bạn có cấu hình Firebase

// Hàm lấy danh sách người dùng
export const getUsers = async () => {
  const response = await axios.get(
    'https://firestore.googleapis.com/v1/projects/sonnn-e81e3/databases/(default)/documents/users'
  );

  // Chuyển đổi dữ liệu trả về từ Firebase thành dạng người dùng dễ sử dụng
  return response.data.documents.map(doc => ({
    id: doc.name.split('/').pop(),
    name: doc.fields.name.stringValue,
    email: doc.fields.email.stringValue,
    age: doc.fields.age.integerValue
  }));
};

// Hàm thêm người dùng
export const addUser = async (name, email, age) => {
  const user = {
    fields: {
      name: { stringValue: name },
      email: { stringValue: email },
      age: { integerValue: age }
    }
  };

  await axios.post(
    'https://firestore.googleapis.com/v1/projects/sonnn-e81e3/databases/(default)/documents/users',
    user
  );
};

// Hàm xóa người dùng
export const deleteUser = async (id) => {
  await axios.delete(
    `https://firestore.googleapis.com/v1/projects/sonnn-e81e3/databases/(default)/documents/users/${id}`
  );
};

// Hàm cập nhật người dùng
export const updateUser = async (id, name, email, age) => {
  const user = {
    fields: {
      name: { stringValue: name },
      email: { stringValue: email },
      age: { integerValue: age }
    }
  };

  await axios.patch(
    `https://firestore.googleapis.com/v1/projects/sonnn-e81e3/databases/(default)/documents/users/${id}`,
    user
  );
};
