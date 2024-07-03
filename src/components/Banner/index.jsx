import styles from './Banner.module.scss'

import Image from 'next/image'

export default function Banner({mode}){
    return(
        <section className={`${styles.banner} ${styles[`${mode}`]}`}>
            <aside className={styles.containerImagem}>
                <Image/>
            </aside>

            <aside className={styles.containerTitulo}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>Agência de Branding</h1>
                <span><strong>e design digital</strong></span>
            </aside>
        </section>
    )
}