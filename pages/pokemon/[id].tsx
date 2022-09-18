import { Button, Card, Grid, Group, Image, SimpleGrid, Title } from "@mantine/core";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect,useState } from "react";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { localFavorites, getPokemonInfo } from "../../utils";


interface Props {
    pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {


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

//////////GET STATIC PATHS PARA CREAR LAS PAGINAS AUTOMATICAMENTE en build time
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => {
        return `${index + 1}`
    })

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        //fallback: false,
        fallback: "blocking",
    }
}

///////GET STATIC PROPS
export const getStaticProps: GetStaticProps = async ({ params }) => {


    const { id } = params as { id: string };

    const pokemon = await getPokemonInfo( id );

    if(!pokemon){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            pokemon,
        },
        revalidate: 86400,
    }
}




export default PokemonPage;
