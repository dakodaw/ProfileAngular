import { FirebaseConfig } from "./firebase-config.interface";
// For a different config, don't import this
import { FirebaseLocalIgnore } from "./firebase-local-ignore";

export const FirebaseTestConfig: FirebaseConfig = {
// For a different config, Fill this out with the information you can get from firebase console
  ...FirebaseLocalIgnore
}
