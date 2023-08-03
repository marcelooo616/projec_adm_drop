import CardProducts from "@/components/cards/card_products/idnex";
import NavProd from "@/components/Nav_prod";
import Home from "@/pages/Home";
import { Component, ReactNode, useState } from "react";
import styles from '@/styles/product_page.module.css';
import Link from "next/link";
import Product_list from "@/components/product_list";
import Cadastro_prod from "@/components/cadastro_prod";
import Filter_prod from "@/components/filter_prod";
import Mais_vends from "@/components/mais_vends_prod";
import Melh_avali_prod from "@/components/melh_avali_prod";


export default function Layout_prods(){

    const [index, setIndex] =  useState(0);

    const componentesArray = [

                            <Product_list/>,
                            <Cadastro_prod/>,
                            <Filter_prod/>,
                            <Mais_vends/>,
                            <Melh_avali_prod/>,
                            
                            ] 

    
    const componenteFiltrado = componentesArray[index];

    function handleNavigator(numero: number): void {
        setIndex(numero)
        console.log(index)
        
        }
    
    return(
        <div>
        <div>
            <div>
            <nav className={styles.nav}>
                <button onClick={() => handleNavigator(0)}  className={styles.nav_item}>
                    Produtos
                </button>
                <button onClick={() => handleNavigator(1)} className={styles.nav_item}>
                    Cadastra
                </button>
                <button onClick={() => handleNavigator(2)}  className={styles.nav_item}>
                    Filtra
                </button>
                <button onClick={() => handleNavigator(3)}  className={styles.nav_item}>
                    Mais vends.
                </button>
                <button onClick={() => handleNavigator(4)} className={styles.nav_item}>
                    Melh. aval.
                </button>
            </nav>
            </div>
            <div>
                <div>
                    {componenteFiltrado}
                </div>
            </div>
        </div>
    </div>
    );
};















