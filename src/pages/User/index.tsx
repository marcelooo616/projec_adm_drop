import Layout from "@/components/Layout/index";
import styles from '@/styles/user_page.module.css';
import { FaBeer } from 'react-icons/fa';

export default function User() {

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.box_pesquisa}>
                    <input type="text" placeholder="Pesquisar pro usuários"/>
                    <button></button>
                </div>
            </div>
        </Layout>
    
    )
}