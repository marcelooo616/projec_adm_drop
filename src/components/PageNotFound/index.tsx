import styles from '@/styles/PageNotFound.module.css';



interface PageNotFoundProps{
    page: string,
}

const PageNotFound: React.FC<PageNotFoundProps> = ({
    page,
}) => {
    return(
        <div className={styles.container_}>
            <div className={styles.box_rigth}>
                <img src="https://i.imgur.com/BJJP8rn.gif" alt="GIF Animado" />
            </div>
            <div className={styles.box_left}>
                <span>Pagina: {page}</span>
                <p>
                    Desculpe-nos, mas a página que você está tentando acessar não está disponível no momento.
                    Estamos trabalhando para resolver isso o mais rápido possível. Por favor, tente novamente 
                    mais tarde ou volte à página inicial para explorar outros conteúdos. Agradecemos sua compreensão
                    e paciência.
                </p>
            </div>
        </div>
    )
}

export default PageNotFound;


