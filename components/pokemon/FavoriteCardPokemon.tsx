import { Card, CardSection, Image } from "@mantine/core"
import { useRouter } from "next/router";
import { FC } from "react"

interface Props {
    id: number;
}

export const FavoriteCardPokemon: FC<Props> = ( { id } ) => {
    const router = useRouter();
    const redirect = () => {
        router.push(`/pokemon/${ id }`)
    }

    return (
        <Card onClick={redirect}>
            <CardSection>
                <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                />
            </CardSection>
        </Card>
    )
}
