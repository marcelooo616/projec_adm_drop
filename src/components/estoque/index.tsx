
import styles from '@/styles/input_p.module.css';
import gifImage from '../../../public/assets/gifs/gificon.gif';
import PageNotFound from '../PageNotFound';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { IoIosAddCircle } from 'react-icons/io';
import { BiEdit } from 'react-icons/bi';





export default function Estoque(){

    
    return(
        
        <div className={styles.container}>

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
                </div>

                {/**lista de product */}

                







            {/*<PageNotFound
                page='Filter_prod'
            />*/}
        </div>
    )
}