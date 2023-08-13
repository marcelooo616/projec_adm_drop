import styles from '@/styles/button.module.css'

interface ButtonProps{
    background_color: string;
    color: string;
    children: string;
    width: string;
    height: string;
    borderRadius:string;
    border: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    background_color,
    color,
    children,
    width,
    height,
    borderRadius,
    border,
    
    onClick
}) => {
    const buttonStyles: React.CSSProperties = {
        backgroundColor: background_color,
        color: color || 'white', // Cor padrão caso não seja fornecida
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: borderRadius ||'15px ',
        width: width || '20%',
        height: height || '50px',
        border: border || 'none',
    };

    return<button className={styles.button} onClick={onClick}  style={{...buttonStyles}}>{children}</button>
}

export default Button;