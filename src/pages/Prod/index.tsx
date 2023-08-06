import Layout from "@/components/Layout/index";
import Layout_prod from "@/components/Layout/Layout_prod";
import styles from '@/styles/product_page.module.css';



export default function Prod() {

    return (
        <Layout>
            <div className={styles.container}>
                <Layout_prod/>
            </div>
        </Layout>
    
    )
}