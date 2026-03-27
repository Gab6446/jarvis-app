import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const sessionUser = localStorage.getItem('jarvis_session');
    return sessionUser ? JSON.parse(sessionUser) : null;
  });

  // Get all registered users
  function getUsers() {
    const users = localStorage.getItem('jarvis_users');
    return users ? JSON.parse(users) : [];
  }

  // Register a new user
  function register(userData) {
    const users = getUsers();
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      records: [],
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem('jarvis_users', JSON.stringify(users));
    localStorage.setItem('jarvis_session', JSON.stringify(newUser));
    setCurrentUser(newUser);
    return newUser;
  }

  // Login by matching name + dob
  function login(name, dob) {
    const users = getUsers();
    const found = users.find(
      u => u.name.toLowerCase() === name.toLowerCase() && u.dob === dob
    );
    if (found) {
      localStorage.setItem('jarvis_session', JSON.stringify(found));
      setCurrentUser(found);
      return found;
    }
    return null;
  }

  // Logout
  function logout() {
    localStorage.removeItem('jarvis_session');
    setCurrentUser(null);
  }

  // Update user data (e.g., adding records)
  function updateUser(updatedData) {
    const users = getUsers();
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...updatedData };
      localStorage.setItem('jarvis_users', JSON.stringify(users));
      localStorage.setItem('jarvis_session', JSON.stringify(users[idx]));
      setCurrentUser(users[idx]);
    }
  }

  // Add a health record to the current user
  function addRecord(record) {
    if (!currentUser) return;
    const users = getUsers();
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
      const newRecord = { id: Date.now().toString(), ...record, createdAt: new Date().toISOString() };
      if (!users[idx].records) users[idx].records = [];
      users[idx].records.unshift(newRecord);
      localStorage.setItem('jarvis_users', JSON.stringify(users));
      localStorage.setItem('jarvis_session', JSON.stringify(users[idx]));
      setCurrentUser(users[idx]);
    }
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
    updateUser,
    addRecord,
    getUsers
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
