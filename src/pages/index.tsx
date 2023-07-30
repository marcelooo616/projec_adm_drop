import FormLogin from "@/components/FormLogin/index";
import styles from '@/styles/Login.module.css'


export default function Login(){
    return(
        <>
            <div className={styles.container}>

                <div className={styles.box_rigth}>
                    <img className={styles.img} src="https://i.imgur.com/6rQQZ6K.jpg"/>
                    <div className={styles.text_logo_overlay}>
                            DROP
                    </div>
                    <div className={styles.text_slogan_overlay}>
                        Passos firmes, estilo infinito: calce a tendência!
                    </div>

                </div>
                
                <div className={styles.box_left}>
                    <FormLogin/>
                </div>
            </div>

        </>
    )
}