import CardPedido from '@/components/cards/card_pedidido';
import Layout from '@/components/Layout/index';
import styles from '@/styles/Home.module.css';
import { BsFillCircleFill } from 'react-icons/bs';

export default function Home() {

  


  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.box_grid_rigth}>
            <div className={styles.box_pedidos_recentes}>

              <div className={styles.title}>
                <h1>Pedidos recentes</h1>
                <section className={styles.icon_circle}>
                  <BsFillCircleFill className={styles.aberto} />
                  <BsFillCircleFill className={styles.i_processando} />
                  <BsFillCircleFill className={styles.i_fechado} />  
                </section>
              </div>

              <CardPedido
                  codigo='DROP578'
                  data='08/06/2023'
                  valor={499.65}
                  status_pedido='ABERTO'
              />
              <CardPedido
                  codigo='DROP578'
                  data='08/06/2023'
                  valor={499.65}
                  status_pedido='FECHADO'
              />
              <CardPedido
                  codigo='DROP578'
                  data='08/06/2023'
                  valor={499.65}
                  status_pedido='ABERTO'
              />
              <CardPedido
                  codigo='DROP578'
                  data='08/06/2023'
                  valor={499.65}
                  status_pedido='PROCESSANDO'
              />
            </div>
        </div>
        <div className={styles.box_grid_left}>
                
        </div>
      </main>
  </Layout>
    
  )
}
