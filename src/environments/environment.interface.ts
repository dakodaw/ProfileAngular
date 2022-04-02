import { FirebaseConfig } from "./firebase/firebase-config.interface";

export interface Environment {
  production: boolean;
  firebaseConfig?: FirebaseConfig;
}
