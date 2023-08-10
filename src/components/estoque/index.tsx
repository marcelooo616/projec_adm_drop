
import styles from '@/styles/PageNotFound.module.css';
import gifImage from '../../../public/assets/gifs/gificon.gif';
import PageNotFound from '../PageNotFound';





export default function Estoque(){

    
    return(
        
        <div className={styles.container}>
            <PageNotFound
                page='Filter_prod'
            />
        </div>
    )
}