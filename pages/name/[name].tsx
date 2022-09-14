import { NextPage, GetStaticProps, GetStaticPaths }from 'next';

import { Button, Card, Grid, Group, Image, SimpleGrid, Title } from "@mantine/core";

import { useEffect,useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { localFavorites, getPokemonInfo } from "../../utils";


interface Props{
    pokemon: Pokemon
}

const PokemonPageByName: NextPage<Props> = ({ pokemon}) => {
    const onToggleFavorite = () => {
        localFavorites.toggleFavorite( pokemon.id );
 
        setIsInFavorites(!isInFavorites);
     }
 
     const [isInFavorites, setIsInFavorites] = useState(localFavorites.verifyFavo(pokemon.id));
 
     return (
         <Layout title={pokemon.name}>
 
             <Grid mt={35}>
 
                 {/* FOTO DEL POKEMON */}
                 <Grid.Col xs={12} sm={4}>
                     <Card shadow="sm" radius="md" >
                         {/* <Card.Section> */}
                         <Image
                             src={pokemon.sprites.other?.dream_world.front_default}
                             alt={pokemon.name}
                             fit="contain"
                             withPlaceholder
                         />
                         {/* </Card.Section> */}
                     </Card>
                 </Grid.Col>
 
                 {/* INFORMACION DEL POKEMON */}
                 <Grid.Col xs={12} sm={8}>
                     <Card shadow="sm" radius="md" >
                         <Group position="apart" >
                             <Title order={1}>{pokemon.name}</Title>
                             <Button 
                                 variant='gradient' 
                                 onClick={ onToggleFavorite }
                                 >
                                 { isInFavorites ? 'Esta en favoritos' : 'Guardar en favoritos' }
                             </Button>
                         </Group>
 
                         <Group position="center">
                             <SimpleGrid cols={4}>
                                 <Image src={pokemon.sprites.front_default} />
                                 <Image src={pokemon.sprites.back_default} />
                                 <Image src={pokemon.sprites.front_shiny} />
                                 <Image src={pokemon.sprites.back_shiny} />
                             </SimpleGrid>
                         </Group>
                     </Card>
                 </Grid.Col>
             </Grid>
 
         </Layout>
     )
}

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map((element) => element.name);

    return {
        paths: pokemonNames.map(name => ({
            params: { name }
        })),
        fallback: false
    }

  }

  export const getStaticProps: GetStaticProps = async ({params}) => {
    
    const { name } = params as {name: string};

    return {
        props:{
            pokemon: await getPokemonInfo( name ),
        }
    }
  }

export default PokemonPageByName;