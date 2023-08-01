import FormLogin from "@/components/FormLogin/index";
import styles from '@/styles/Login.module.css'
import Image from "next/image";

import runnerImg from '../../public/assets/runner.jpg';


export default function Login(){
    return(
        <>
            <main className={styles.container}>

                <div className={styles.box_rigth}>
                    <Image className={styles.img} src={runnerImg} alt={"humano correndo"}/>
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
            </main>

        </>
    )
}