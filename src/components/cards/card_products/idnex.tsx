import styles from '@/styles/card_products.module.css'
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';

interface CardProductsProps{
    description: string;
    img: string;
    price: string;
}

const CardProducts: React.FC<CardProductsProps> = ({
    description,
    img,
    price,

}) => {
    return(
        <div className={styles.container}>
            <div className={styles.image_overlay}>
                <div className={styles.icon_img}>
                    
                    <img className={styles.img} src={img} alt="image tenis jorndas" width={50} height={50}/>
                </div>
                
                {/*<div className={styles.icon}>
                    <FiHeart/>
                </div>*/}
                
            </div>
            <div className={styles.description}>
                <span className={styles.title}>{description}</span>
                <strong className={styles.price}>R$ {price}</strong>
            </div>

        </div>
    )
}

export default CardProducts;