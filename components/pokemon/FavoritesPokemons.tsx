import { Container, SimpleGrid, Title } from "@mantine/core"
import { FC } from "react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"

interface Props {
    pokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({ pokemons }) => {
    return (
        <Container size='md' px='xs' sx={{
            margin: '40px auto',
        }}>
            {
                pokemons.length === 0
                    ? (<Title order={1} align='center' >No hay favoritos</Title>)
                    : (
                        <SimpleGrid
                            cols={5}
                            spacing='lg'
                            breakpoints={[
                                { maxWidth: 'md', cols: 3, spacing: 'md' },
                                { maxWidth: 'sm', cols: 2, spacing: 'md' },
                                { maxWidth: 'xs', cols: 1, spacing: 'md' },
                            ]}>
                            {
                                pokemons.map((element) => (
                                    <FavoriteCardPokemon key={element} id={element} />
                                ))
                            }
                        </SimpleGrid>
                    )
            }
        </Container>
    )
}
