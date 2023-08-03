import CardProducts from "@/components/cards/card_products/idnex";
import Layout from "@/components/Layout/index";
import Layout_prod from "@/components/Layout/Layout_prod";
import NavProd from "@/components/Nav_prod";
import styles from '@/styles/product_page.module.css';
import Link from "next/link";
import { Config } from "tailwindcss";


export default function Prod() {

    return (
        <Layout>
            <div className={styles.container}>
                <Layout_prod/>
            </div>
        </Layout>
    
    )
}