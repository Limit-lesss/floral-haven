import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const firebaseConfig = {
    apiKey: "AIzaSyCylsEsgwP3LCVOn4wqb_vN8uTHyUMJDKI",
    authDomain: "flower-website-735b9.firebaseapp.com",
    projectId: "flower-website-735b9",
    storageBucket: "flower-website-735b9.appspot.com",
    messagingSenderId: "185331272721",
    appId: "1:185331272721:web:e1c96c5b25d20beeb1f5b0",
    databaseURL: "https://flower-website-735b9-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);
export const useFirebase = () => {
    return useContext(FirebaseContext);
}

export const FirebaseProvider = (props) => {
    const[isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate();
    const signUPWithGoogle = () => {
        signInWithPopup(FirebaseAuth, GoogleProvider).then(() => {
            navigate('/floral-haven');
            setIsLogin(true);
        })
    }
    return(
        <FirebaseContext.Provider value={{signUPWithGoogle, isLogin, FirebaseAuth}}>
            {props.children}
        </FirebaseContext.Provider>
    );
}