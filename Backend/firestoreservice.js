import firestore from './firestore';

// Example function to add a document to a 'users' collection
export const addUser = async (userId, userData) => {
  try {
    await firestore.collection('users').doc(userId).set(userData);
  } catch (error) {
    throw error;
  }
};

// Example function to get user data from 'users' collection
export const getUser = async (userId) => {
  try {
    const userDoc = await firestore.collection('users').doc(userId).get();
    return userDoc.data();
  } catch (error) {
    throw error;
  }
};
