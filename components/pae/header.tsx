import { ReactNode } from 'react';
import styles from '../../styles/PAE-Header.module.css';

type Props = {
    children?: ReactNode,
    page: string
}

function Header({ page } : Props) {
    return (
        <header className={styles.header}>
            { page }
        </header>
    )
}

export default Header