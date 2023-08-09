import Layout from "@/components/Layout/index";
import styles from '@/styles/user_page.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { IoIosAddCircle } from 'react-icons/io';
import { BiEdit } from 'react-icons/bi';
import CardUserInline from "@/components/card_user_inline";
import axios from "axios";
import {useEffect, useState } from "react";

export default function User() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    interface User{
        id: number;
        name: string;
        email: string;
        password: string
        admin: boolean;
        _active_user: boolean;
    }

    const getAllUsers = async () => {
        const apiUrl = "https://demoapidrop-production.up.railway.app/api/usuario/all"
        const accessToken = localStorage.getItem('token');
        try {
            const response = await axios.get(apiUrl, {
                headers:{
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            return response.data;
            
        } catch (error) {
            console.error('Erro ao obter os usuarios:', error);
            throw error;
        }


    }
    useEffect(() => {
        const fetchUsers = async () => {
            const listUsers = sessionStorage.getItem('users');
            if(listUsers){
                setUsers(JSON.parse(listUsers));
                setLoading(false);
                console.log("LIsta do session maneger")
            }else{
                try {
                    const usersFromApi = await getAllUsers();
                    setUsers(usersFromApi); // Atualiza o estado `users` com os dados obtidos
                    sessionStorage.setItem('users', JSON.stringify(usersFromApi)); // Armazena no sessionStorage
                    console.log("Primeiro carregamento")
                    setLoading(false);
                } catch (error) {
                    console.error('Erro ao obter os usuários:', error);
                }
            }};
            fetchUsers();
        }, []);

    return (
        <Layout>
            <div className={styles.container}>
                {/* Aqui comeca o header com inputs de pesquisa*/ }
                <div className={styles.box_nav}>
                    <div className={styles.sher}>
                        <input type="text" placeholder="Pesquisar pro usuários"/>
                        
                        <div className={styles.button_search}>
                            <button><AiOutlineSearch className={styles.icons}/></button>
                        </div>

                        <div className={styles.button_filter}>
                            <button><BsFilter className={styles.icons}/></button>
                        </div>
                    </div>
                    <div className={styles.button_add}>
                        <button><IoIosAddCircle className={styles.icons}/>NOVO</button>
                    </div>
                </div>

                {/* Aqui comeca a tabela de usuarios*/ }

                <div className={styles.contant_table}>
                    <div className={styles.box_tags}>
                        <button className={styles.b_id}>ID</button>
                        <button className={styles.b_nome}>NOME</button>
                        <button className={styles.b_email}>E-MAIL</button>
                        <button className={styles.b_status}>STATUS</button>
                        <button className={styles.b_permissao}>PERMISSÂO</button>
                        <button>< BiEdit className={styles.icon_edit}/></button>
                    </div>
                </div>

                {/* Aqui comeca o conteudo da  tabela de usuarios*/ }
                <div className={styles.box}>
                    {
                        users.map((user) => (
                            <CardUserInline
                            nome={user.name}
                            permissao={user.admin}
                            status={user._active_user}
                            email={user.email}
                            id={user.id}
                            />
                            
                        ))
                    };
                    
                </div>
            </div>
        </Layout>
    
    )
}