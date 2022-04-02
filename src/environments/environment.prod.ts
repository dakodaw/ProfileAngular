import { Environment } from "./environment.interface";
import { FirebaseProdConfig } from "./firebase/firebase-prod.config";

export const environment: Environment = {
  production: true,
  firebaseConfig: FirebaseProdConfig
};
