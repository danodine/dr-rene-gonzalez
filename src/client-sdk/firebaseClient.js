import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Copy these values from blog-admin's own .env into each client Next.js
// project's .env.local as NEXT_PUBLIC_* vars (Next.js only exposes
// NEXT_PUBLIC_-prefixed vars to the browser). These are safe to expose —
// Firebase's client config is meant to be public; access control lives in
// Firestore security rules, not in hiding this config.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const blogApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const blogDb = getFirestore(blogApp);
