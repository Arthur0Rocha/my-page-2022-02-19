import { ReactNode } from 'react';
import styles from '../../styles/PAE-Header.module.css';

type Props = {
    children?: ReactNode,
    pageSlug: string
}

const pages = [
    ['home', 'Home'],
    ['o-que-eh-pae', 'O que é PAE?'],
    ['gravacao', 'Gravação'],
    ['protocolo', 'Protocolo'],
    ['avancado', 'Avançado']
]

function Header({ pageSlug } : Props) {
    return (
        <header className={styles.header}>
            <ul className={styles.ul}>

            { pages.map( function( [slug, name] ) {
                return (<li key={slug} className={`${styles.li} ${slug===pageSlug ? styles.highlight : ''}`}>
                    { name }
                </li>)
            }) }
            </ul>
        </header>
    )
}

export default Header