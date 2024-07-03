import styles from './Informacoes.module.scss'

export default function Informacoes({mode}){
    return(
        <section className={`${styles.informacoes} ${styles[`${mode}`]}`}>
            <div className={`limitedWidth ${styles['limitedWidth']}`}>
                <h1>Experiências De Trabalho</h1>

                <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>
        </section>
    )
}