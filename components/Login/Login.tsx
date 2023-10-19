import React, { ReactElement } from 'react';
import styles from './Login.module.css';

const Login: React.FC = (): ReactElement => {
    return (
        <div className={styles.loginContainer}>

            <div className={styles.loginInput}>

                <p className={styles}>Username</p>
                <input type="email" />
                </div>

            <div className={styles.loginInput}>

                <p className={styles}>Password</p>
                <input type="password" />

            </div>
        </div>
    )
}

export default Login;