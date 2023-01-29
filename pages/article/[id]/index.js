//import { useRouter } from "next/router";

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
        </div>
    );
};

// export const getServerSideProps = async ({params}) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     const article = await res.json()

//     return {
//         props : {
//             article
//         }
//     }
// }

export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const article = await res.json()

    return {
        props : {
            article
        }
    }
}

export const getStaticPaths = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const articles = await res.json();

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id : id.toString() }}) )

    console.log(paths)

    return {
        paths,
        fallback : false
    }
}



export default article;