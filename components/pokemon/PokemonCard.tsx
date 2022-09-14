import { FC } from "react"

import { Grid, Card, Image, Text, Group } from '@mantine/core'

import { SmallPokemon } from "../../interfaces"
import { useRouter } from "next/router"

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({ pokemon: { img, name, id } }) => {

    const router = useRouter();
    const onClick = () => { 
        router.push(`/name/${ name }`)
     }


    return (
        <>
            <Grid.Col sm={6} md={3} lg={2} xl={1} >
                <Card
                    shadow='sm'
                    p='xl'
                    radius='md'
                    withBorder
                    onClick={onClick}
                >
                    <Card.Section>
                        <Image
                            src={img}
                            height={160}
                            alt={name}
                            fit='contain'
                        />
                    </Card.Section>
                    <Group position="apart" mt="md" mb="xs">
                        <Text transform='capitalize' weight={700}>{name}</Text>
                    </Group>
                </Card>
            </Grid.Col>
        </>
    )
}
