import styles from "../styles/articleItem.module.css"
import ArticleItem from "./ArticleItem";
const Articles = ({articles}) => {
    return (
        <div className={styles.grid}>
            {
                articles.map(article => <ArticleItem article={article}></ArticleItem>)
            }
        </div>
    );
};

export default Articles;