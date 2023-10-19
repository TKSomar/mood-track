import React, { ReactElement, useState } from 'react';
import styles from './Login.module.css';

const Login: React.FC = (): ReactElement => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Request to API

        console.log("Email:", email);
        console.log("Password:", password);
  };

    return (
        <div className={styles.loginContainer}>

                <input id="email" className={styles.loginInput} type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

                <input id="password" className={styles.loginInput} type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

                <div>
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
        </div>
    )
}

export default Login;