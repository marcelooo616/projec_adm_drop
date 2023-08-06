
import styles from '@/styles/FormLogin.module.css'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Link from '../../../node_modules/next/link'





interface LoginFormProps {
    onsubmit: (username: string, password: string) => void;
}

    const FormLogin: React.FC<LoginFormProps> = ({ onsubmit }) => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

    

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onsubmit(username, password);

    };

    return (
        <div className={styles.container_form}>

        <form className={styles.form} onSubmit={handleSubmit} >
            <div className={styles.header}>Sing in</div>
            <div className={styles.inputs}>
                
                <input 
                    placeholder='Email'
                    className={styles.input}
                    type='text'
                    id='username'
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <input 
                    placeholder='Password'
                    className={styles.input} 
                    type='password'
                    id='password'
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <div className={styles.checkbox_container}>
                    <label className={styles.checkbox}>
                    
                    </label>
                </div>

                
                <button className={styles.sigin_btn}  type="submit" >submit</button>

                <Link className={styles.forget} href="#">Forget password ?</Link>
                <p className={styles.signup_link}>Don't have an account? <Link className={styles.forget}  href="#">Sign up</Link></p>
            </div>
            
        </form>
    </div>
    );
};

    export default FormLogin;