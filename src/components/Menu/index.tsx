
import styles from '@/styles/Menu.module.css'
import { useRouter } from 'next/router';
import Link from '../../../node_modules/next/link'
import { ImExit } from 'react-icons/im';

export default function Menu() {

    const router = useRouter();

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

    const handleLogout = () => {
        // Limpar o token do Local Storage
        localStorage.setItem('token', '');
        console.log(localStorage.getItem('token'));
        // Verificar se o token foi removido do Local Storage
        if (!localStorage.getItem('token')) {
          // Se o token não existe, redirecionar para a página inicial ("/")
            router.push("/");
            }
        };

    return(
        
        <div className={styles.container}>
            <div className={styles.menu_lateral}>
                <div className={styles.menu_lateral_buttons}>
                    <div className={styles.buttons}>
                    {icons.map((item) => (
                        <Link key={item.name} href={item.link} className={styles.box_icon}>
                        {item.name}
                        </Link>
                    ))}
                    </div>
        
                    <div className={styles.box_buttons_sair}>
                    <button onClick={handleLogout}>
                        <ImExit className={styles.box_icon_sair} />
                    </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}