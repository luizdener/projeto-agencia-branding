import styles from './CardInfos.module.scss'

export default function CardInfo({periodo, cargo, empresa, funcoes}){
    return(
        <div className={styles.cardInfo}>
            <p>{periodo}</p>
            <h1 className={styles.tituloCargo}>{cargo}</h1>
            <p>{empresa}</p>
            
            <section>
                <p>{funcoes}</p>
            </section>
        </div>
    )
}