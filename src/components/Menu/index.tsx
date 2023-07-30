
import styles from '@/styles/Menu.module.css'
import Link from '../../../node_modules/next/link'

export default function Menu() {

    const icons = [
        {
            name: "HOME",
            link: "Home",
        },
        {
            name: "USER",
            link: "User",
        },
        {
            name: "PROD",
            link: "Prod",
        },
        {
            name: "ESTQ",
            link: "Estq",
        },
        {
            name: "PEDS",
            link: "Peds",
        },
        
    ];

    return(
        <>
        <div className={styles.container}>
        <div className={styles.menu_lateral}>
            <div className={styles.menu_lateral_buttons}>
                {icons.map((item) => (
                    <Link key={item.name} href={item.link} className={styles.box_icon}>
                        {item.name}
                    </Link>
                ))};
            </div>
        
            <div className={styles.box_buttons_sair}>
                <Link href="" className={styles.box_icon}>SAIR </Link>
            </div>
        </div>
        </div>
        </>
    )
}