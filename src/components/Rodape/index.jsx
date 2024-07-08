import styles from './Rodape.module.scss'

import Image from 'next/image'
import Fb from '/public/facebook.png'
import Tw from '/public/twitter.png'
import Lk from '/public/linkedin.png'
import Db from '/public/dribble.png'
import Be from '/public/behance.png'
import Go from '/public/google-plus.png'

export default function Rodape({mode}){
    return(
        <footer className={`${styles.rodape} ${styles[`${mode}`]}`}>
            <h1>M.</h1>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramenta e tecnologias personalizadas.</p>

            <div className={styles.socialContainer}>
                <Image src={Fb}/>
                <Image src={Tw}/>
                <Image src={Lk}/>
                <Image src={Db}/>
                <Image src={Be}/>
                <Image src={Go}/>
            </div>

            <p>Copyright 2024 &copy; <span>Luiz Dener</span></p>
        </footer>
    )
}