import React, { ReactElement, useState } from 'react';
import styles from './Login.module.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../server/auth/config/firebase";

const Login: React.FC = (): ReactElement => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        console.log("Email:", email);
        console.log("Password:", password);
  };

    return (
        <div className={styles.loginContainer}>

                <input className={styles.loginInput} type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <div style={{ ['height' as any]: "16px" }}></div>
                <input className={styles.loginInput} type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <div style={{ ['height' as any]: "16px" }}></div>

                <div>
                    <button className='loginSubmit' type="submit" onClick={handleSubmit}>Login</button>
                </div>

                <div className={styles.requestLinks}>
                    <div style={{ ['height' as any]: "16px;" }}></div>
                    <a href="#">Create a new account</a>
                    <div style={{ ['height' as any]: "16px;" }}></div>
                    <a href="#">Request password reset</a>
                </div>
        </div>
    )
}

export default Login;