import firebase from "./firebase-config";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
