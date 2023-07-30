import styles from '@/styles/Header.module.css'

export default function Header() {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.logo_style}>
                    <h1 className={styles.logo}>ADM-DROP</h1>
                </div>
            </header>
    </>
    )
}