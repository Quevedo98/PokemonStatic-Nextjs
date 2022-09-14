import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
// import Image from 'next/image'

import { Grid } from '@mantine/core'

import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'


interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {


  return (
    <>
      <Layout title='Listado de pokemon'>
        <Grid mt={40} gutter={20}>
          {
            pokemons.map((poke) => (
              <PokemonCard pokemon={poke} key={poke.id} />
            ))
          }
        </Grid>
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((dato, i) => ({
    ...dato,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
