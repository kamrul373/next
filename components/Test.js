import { request, gql, GraphQLClient } from 'graphql-request'
const Test = ({a}) => {
   
   console.log(a)
    return (
        <div>
            
        </div>
    );
};


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
    const a = await res.json();
    return {
      props: {
        a
      }
    }
  }
export default Test;