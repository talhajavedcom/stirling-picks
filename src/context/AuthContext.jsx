"use client";

import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

const tempUser = {
  id: "1",
  name: "John Doe",
  email: "admin@mail.com",
  avatar: null,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const login = useCallback((credentials) => {
    if (
      credentials.username === "admin@mail.com" &&
      credentials.password === "admin123"
    ) {
      setUser(tempUser);
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const openLoginModal = useCallback(() => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  }, []);

  const closeLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  const openSignupModal = useCallback(() => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  }, []);

  const closeSignupModal = useCallback(() => {
    setIsSignupModalOpen(false);
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoginModalOpen,
    isSignupModalOpen,
    openLoginModal,
    closeLoginModal,
    openSignupModal,
    closeSignupModal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

