
import CardProducts from '@/components/cards/card_products/idnex';
import Layout from '@/components/Layout';
import Layout_prods from '@/components/Layout/Layout_prod';
import styles from '@/styles/product_page.module.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFilter } from 'react-icons/bs';
import { toast } from "react-toastify";


export default function Edit(){
    return(
        <Layout>
            <Layout_prods/>
                <h1>Edit</h1>   
        </Layout>
    )
}