import styles from './Topo.module.scss'

export default function Topo({mode, iconMode, handleChange}){
    
    return(
        <header className={`${styles['topo']} ${styles[`${mode}`]}`}>
                M.
                <button onClick={handleChange}>{iconMode}</button>
        </header>
    )
}