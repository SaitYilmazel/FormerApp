import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export function login (email, password) {
    auth().signInWithEmailAndPassword("");
}