import styles from './Banner.module.scss'

import Image from 'next/image'
import Rapaz from '/public/banner.png'

export default function Banner({mode}){
    return(
        <section className={`${styles.banner} ${styles[`${mode}`]}`}>
            <aside className={styles.containerImagem}>
                <Image src={Rapaz}/>
            </aside>

            <aside className={styles.containerTitulo}>
                <span>BRANDING / UI / UX / TECNOLOGIA</span>
                <h1>Agência de Branding</h1>
                <p><strong>e design digital</strong></p>
            </aside>
        </section>
    )
}