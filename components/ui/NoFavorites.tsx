import { Container, Title } from "@mantine/core"


export const NoFavorites = () => {


    return (
        <Container
            size='md' 
            px='xs' 
            sx={{
                margin: '40px auto',
            }}>
            <Title order={1}>No hay favoritos</Title>
        </Container>
    )
}
