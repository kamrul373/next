import styles from "../styles/Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <h2><span>Devs</span> News</h2>
            <p>Keep up to date about latest news</p>
            <button className={styles.explore}>Explore</button>
        </div>
    );
};

export default Header;