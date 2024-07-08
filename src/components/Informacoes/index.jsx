import CardInfo from '../CardInfos'
import styles from './Informacoes.module.scss'

export default function Informacoes({mode}){

    const experiencias = [
        {
            periodo: 'JUNHO 2012 - 2015',
            cargo: 'Web Designer',
            empresa: 'Pled Piper StartUp',
            funcoes: 'Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'
        },
        {
            periodo: 'AGOSTO 2016 - 2019',
            cargo: 'Product Designer',
            empresa: 'E Corp.',
            funcoes: 'Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra'
        },
        {
            periodo: 'FEVEREIRO 2019 - 2021',
            cargo: 'Digital Consulting',
            empresa: 'Arasaka Inc.',
            funcoes: 'Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'
        }
    ]

    return(
        <section className={`${styles.informacoes} ${styles[`${mode}`]}`}>
            <div className={`limitedWidth ${styles['limitedWidth']}`}>
                <h1>Experiências De Trabalho</h1>

                <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>

                <section className={styles.cardsContainer}>
                    {experiencias.map((experiencia) => (
                        <CardInfo periodo={experiencia.periodo} cargo={experiencia.cargo} empresa={experiencia.empresa} funcoes={experiencia.funcoes} />
                    ))}
                </section>
            </div>
        </section>
    )
}