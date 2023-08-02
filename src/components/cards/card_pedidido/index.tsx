import styles from '@/styles/card_pedido.module.css';
import { BsFillCircleFill } from 'react-icons/bs';

interface CardPedidoProps {
    codigo: string;
    data: string;
    valor: number;
    status_pedido: string;
}

    const CardPedido: React.FC<CardPedidoProps> = ({
    codigo,
    data,
    valor,
    status_pedido,
    
}) => {

    let iconeCor = "";
    let font = "";

  // Lógica para determinar a cor do ícone com base no status_pedido
    if (status_pedido === "ABERTO") {
        iconeCor = styles.i_aberto;
        font = styles.f_color_aberto;
    } else if (status_pedido === "PROCESSANDO") {
        iconeCor = styles.i_processando;
        font = styles.f_color_processando;
    } else if (status_pedido === "FECHADO") {
        iconeCor = styles.i_fechado;
        font = styles.f_color_fechado;
    }

    return (

        
        <div className={styles.card}>
            <div className={styles.box_colum}>
                <span>codigo:</span>
                <span>data:</span>
                <span>valor:</span>
                <span>status pedido:</span>
            </div>

            <div className={styles.box_colum}>
                <span>{codigo}</span>
                <span>{data}</span>
                <span>R$ {valor.toFixed(2)}</span>
                <div className={styles.status_pedido}>
                    <span className={font}>{status_pedido}</span>
                    <span className={styles.icon}>
                        <BsFillCircleFill className={iconeCor} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardPedido;
