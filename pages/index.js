import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Articles from '@/components/Articles'

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {
  console.log(articles)
  return (
    <>
     <div>
        <h2 className={styles.heading}>Welcome to Next</h2>
     </div>
     <Articles articles={articles}></Articles>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
