import React, { createContext, useContext, useState } from 'react';
import { Platform, ConnectedPlatform } from '../types/social';

interface User {
  id: string;
  email: string;
  username?: string;
  connectedPlatforms: ConnectedPlatform[];
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: Partial<User>) => void;
  logout: () => void;
  connectPlatform: (platform: Platform) => Promise<boolean>;
  disconnectPlatform: (platform: Platform) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: Partial<User>) => {
    setIsAuthenticated(true);
    setUser({
      id: 'user-' + Math.random().toString(36).substr(2, 9),
      email: userData.email || '',
      username: userData.username,
      connectedPlatforms: []
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const connectPlatform = async (platform: Platform): Promise<boolean> => {
    // In a real implementation, this would handle OAuth flow
    if (!user) return false;

    const newPlatform: ConnectedPlatform = {
      platform,
      username: `${platform}_user`,
      connected: true,
      lastVerified: new Date()
    };

    setUser(prev => {
      if (!prev) return null;
      const updatedPlatforms = [...prev.connectedPlatforms.filter(p => p.platform !== platform), newPlatform];
      return { ...prev, connectedPlatforms: updatedPlatforms };
    });

    return true;
  };

  const disconnectPlatform = (platform: Platform) => {
    if (!user) return;

    setUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        connectedPlatforms: prev.connectedPlatforms.filter(p => p.platform !== platform)
      };
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, connectPlatform, disconnectPlatform }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};