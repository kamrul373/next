import Link from "next/link";
import styles from "../styles/nav.module.css"

const Nav = () => {
    return (
        <ul className={styles.nav}>
            <li className={styles.navlist}>
                <Link href="/" className={styles.navlink}>Home</Link>
            </li>
            <li className={styles.navlist}>
                <Link href="/about" className={styles.navlink}>About</Link>
            </li>
        </ul>
    );
};

export default Nav;