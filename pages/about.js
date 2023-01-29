import Head from "next/Head"
import styles from "../styles/about.module.css"
const about = () => {
    return (
        <>
        <Head>
            <title>About US</title>
            <meta name="keywords" content="about us, this page is about our company" />
        </Head>
        <div>
            <h2 className={styles.heading}>About</h2>
        </div>
        </>
        
    );
};

export default about;