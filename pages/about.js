import Head from "next/Head"
import styles from "../styles/about.module.css"
const about = () => {
    return (
        <>
        <Head>
            <title>About US</title>
            <meta name="keywords" content="about us, this page is about our company" />
        </Head>
        <div className={styles.main }>
            <h2>About</h2>
        </div>
        </>
        
    );
};

export default about;