import styles from '@/styles/FormLogin.module.css'
import Link from '../../../node_modules/next/link'

export default function FormLogin() {
    return(
        

        <div className={styles.container_form}>

            <form className={styles.form}>
                <div className={styles.header}>Sing in</div>
                <div className={styles.inputs}>
                    <input placeholder='Email' className={styles.input} type='text'/>
                    <input placeholder='Password' className={styles.input} type='password'/>
                    <div className={styles.checkbox_container}>
                        <label className={styles.checkbox}>
                        
                        </label>
                    </div>

                    
                    <button className={styles.sigin_btn}>submit</button>

                    <Link className={styles.forget} href="#">Forget password ?</Link>
                    <p className={styles.signup_link}>Don't have an account? <Link className={styles.forget}  href="#">Sign up</Link></p>
                </div>
                
            </form>
        </div>
    )
    
}