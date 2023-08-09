import styles from '@/styles/card_user_inline.module.css';
import { BiEdit } from 'react-icons/bi';
interface CardUserProps{
    id: number;
    nome: string;
    email: string;
    status: boolean;
    permissao: boolean;
}

const CardUserInline: React.FC<CardUserProps> = ({
    id,
    nome,
    email,
    status,
    permissao

}) => {
    
    
    let pass = permissao ? "ADM" : "USER";
    let e = status ? "Ativo" : "Desativado";
    let color = status ? styles.a : styles.d;


    
    return(
        <div className={styles.container_card_user}>
            <div className={styles.aling}>
                <div className={styles.b_id}><span>{id}</span></div>
                <div className={styles.b_nome}><span>{nome}</span></div>                        
                <div className={styles.b_email}><span>{email}</span></div>
                <div className={styles.b_status}><span className={color}>{e}</span></div>
                <div className={styles.b_permissao}><span>{pass}</span></div>
            </div>
                <button>< BiEdit className={styles.icon_edit}/></button>
        </div>
    )
};

export default CardUserInline;