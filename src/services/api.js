import { db } from '../firebase';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';

const API_BASE_URL = 'http://localhost:8000/api';

/**
 * API Service for Backend (Python FastAPI) and Database (Firebase)
 */
export const apiService = {
  // --- BACKEND ENDPOINTS (Python) ---
  
  async getLiveNews() {
    try {
      const response = await fetch(`${API_BASE_URL}/news`);
      if (!response.ok) throw new Error('Failed to fetch live news');
      return await response.json();
    } catch (error) {
      console.error('Backend Error:', error);
      return null; // Fallback to static data in components
    }
  },

  async getElectionDate() {
    try {
      const response = await fetch(`${API_BASE_URL}/election-date`);
      return await response.json();
    } catch (error) {
      return { target_date: '2026-03-01T00:00:00Z' }; // Hardcoded fallback
    }
  },

  async registerVolunteer(volunteerData) {
    try {
      const response = await fetch(`${API_BASE_URL}/volunteer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(volunteerData),
      });
      return await response.json();
    } catch (error) {
      throw new Error('Volunteer registration failed');
    }
  },

  // --- DATABASE ENDPOINTS (Firebase Firestore) ---

  async registerMember(memberData) {
    try {
      const docRef = await addDoc(collection(db, 'members'), {
        ...memberData,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Firestore Error:', error);
      throw error;
    }
  },

  async getDistricts() {
    try {
      const q = query(collection(db, 'districts'), orderBy('name', 'asc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Firestore Error:', error);
      return []; // Return empty or static fallback
    }
  }
};
