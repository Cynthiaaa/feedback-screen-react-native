import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "XXXXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveFeedback = async (rating, selectedOption, comments) => {
  try {
    await addDoc(collection(db, 'feedback'), {
      rating,
      selectedOption,
      comments,
      timestamp: serverTimestamp(),
    });
    console.log('Feedback saved successfully!');
  } catch (error) {
    console.error('Error saving feedback:', error);
    throw error;
  }
};

export { db };