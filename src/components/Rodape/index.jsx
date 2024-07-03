import styles from './Rodape.module.scss'

export default function Rodape({mode}){
    return(
        <footer className={`${styles.rodape} ${styles[`${mode}`]}`}>
            <h1>M.</h1>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramenta e tecnologias personalizadas.</p>

            <div className={styles.socialContainer}></div>

            <p>Copyright 2024 &copy; <span>Luiz Dener</span></p>
        </footer>
    )
}