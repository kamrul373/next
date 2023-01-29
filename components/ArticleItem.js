import Link from "next/link";
import styles from "../styles/articleItem.module.css"
const ArticleItem = ({article}) => {
    return (
        <>
            <Link href={`article/${article.id}`}>
                <div className={styles.card}>
                    <h4>{article.title.slice(0,30)}</h4>
                    <p>{article.body.slice(0,120)}</p>
                </div>
            </Link>
        </>
    );
};

export default ArticleItem;