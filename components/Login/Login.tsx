import React, { ReactElement } from 'react';
import styles from './Login.module.css';

const Login: React.FC = (): ReactElement => {
    return (
        <div className={styles.loginContainer}>

                <input id="email" className={styles.loginInput} type="email" placeholder='Email' />

                <input id="password" className={styles.loginInput} type="password" placeholder='Password' />
        </div>
    )
}

export default Login;