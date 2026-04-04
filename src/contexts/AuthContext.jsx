import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
        alert("Firebase config is currently a placeholder. Google Sign in won't work until real credentials are provided.");
      });
  }

  function signOut() {
    return firebaseSignOut(auth);
  }

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return unsubscribe;
    } catch (e) {
      console.warn("Firebase Auth listener error: ", e);
      setLoading(false);
    }
  }, []);

  const value = {
    user,
    signInWithGoogle,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
