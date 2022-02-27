import { ReactNode } from 'react';
import Link from 'next/link'

import genStyles from '../../styles/general.module.css'
import styles from '../../styles/PAE-Header.module.css';

type Props = {
    children?: ReactNode,
    pageSlug: string
}

const pages = [
    ['home', 'Home', '/pae/'],
    ['o-que-e-pae', 'O que é PAE?', '/pae/o-que-e-pae'],
    ['gravacao', 'Gravação', '/pae/gravacao'],
    ['protocolo', 'Protocolo', '/pae/protocolo'],
    ['avancado', 'Avançado', '/pae/avancado']
]

function Header({ pageSlug } : Props) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <h2>
                        Arthur Rocha
                    </h2>
                    <p>Software & Engenharia</p>
                </div>

                <ul className={styles.ul}>
                    { pages.map( function( [slug, name, link] ) {
                        return (
                            <Link key={slug} href={link}>
                                <a>
                                    <li className={`${styles.li} ${slug===pageSlug ? styles.highlight : ''}`}>
                                        { name }
                                    </li>
                                </a>
                            </Link>
                        )
                }) }
                </ul>
            </div>
        </header>
    )
}

export default Header