import styles from "../styles/layout.module.css"
import Header from "./Header";
import Nav from "./Nav";
const Layout = ({children}) => {
    return (
       <>
       <Nav></Nav>
       <Header></Header>
        <div className={styles.container}>
            <main className={styles.main}>
                
                {children}
            </main>
        </div>
       </>
    );
};

export default Layout;