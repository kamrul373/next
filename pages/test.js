import { request, gql, GraphQLClient } from 'graphql-request'
const test = ({data}) => {
   
   console.log(data)
    return (
        <div>
            
        </div>
    );
};

export const getStaticProps = async () => {
    const query =  gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        results {
          url
          name
          image
        }
      }
    }
  `;
  const gqlVariables = {
    limit: 5,
    offset: 1,
  };
  const data = await request({
    url: "https://graphql-pokeapi.graphcdn.app",
    document: query,
    variables: gqlVariables,
    requestHeaders: { 'Content-Type': 'application/json' },
   
  })
  const pokemons = data.pokemons.results; 
  // pokemon type
  let newPokemons = [];
  for(let i = 0; i< pokemons.length;i++){
    const gquery = gql`
    query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types {
        type {
          name
        }
      }
    }
  }
  `
    const name = {
        name : pokemons[i]["name"]
    }
        const pokemon = await request({
        url: "https://graphql-pokeapi.graphcdn.app",
        variables: name,
        document: gquery,
    })
    const current = pokemons[i];
    const modified = {
        ...current,
        types: pokemon.pokemon.types
    }
    newPokemons = [...newPokemons, modified]
  }
  
  return  {
    props: {
        data: newPokemons
    }
  }
 
  
}
export default test;