import FormLogin from "@/components/FormLogin/index";
import styles from '@/styles/Login.module.css'
import axios from "axios";
import Image from "next/image";

import runnerImg from '../../public/assets/runner.jpg';
import { useRouter } from "next/router";


export default function Login(){

    //https://demoapidrop-production.up.railway.app/api/usuario/auth

    const router = useRouter();

    const handleLogin = async (email: string, password: string) => {
        
        

        try {
            const data = { email, password }
            
            const response = await axios.post(
                "https://demoapidrop-production.up.railway.app/api/usuario/auth",
                data,
            );

            

            if (response.status === 200 && response.data.admin === true) {
                const { token } = response.data;
                localStorage.setItem('token', token);
            
                    router.push('/Home');
                } else {
                    // Caso o login não seja permitido (não é administrador), você pode exibir uma mensagem de erro
                    throw new Error('Login não autorizado');
                }
                } catch (error) {
                // Tratar erros de requisição ou outros erros de login, caso necessário
                console.error('Erro ao fazer login:', error);
                }

        };
        
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
                    <FormLogin onsubmit={handleLogin}/>
                </div>
            </main>

        </>
    )
}