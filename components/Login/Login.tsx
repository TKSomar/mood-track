import React, { ReactElement } from 'react';
import styles from './Login.module.css';

const Login: React.FC = (): ReactElement => {
    return (
        <div className={styles.loginContainer}>

            <div className={styles.loginInput}>

                <p className={styles.userInput}>Username</p>
                <input type="email" />
                </div>

            <div className={styles.loginInput}>

                <p className={styles.passInput}>Password</p>
                <input type="password" />

            </div>
        </div>
    )
}

export default Login;