import { createStyles, Text, Title } from "@mantine/core"
import { NextLink } from "@mantine/next";
import Image from "next/image";

const useStyles = createStyles((theme, __params, getRef) => ({
  divNav: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px',
    backgroundColor: theme?.colors.dark[3]
  }
}))

export const Navbar = () => {

  const { classes } = useStyles();//CLASES DE ESTILO DEFINIDAS POR MANTINE

  return (
    <>
      <div className={classes.divNav}>

        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
          alt='Icono de la app'
          width={70}
          height={70}
        />
        <Text
          color='gray'
          size="xl"
          component={NextLink}
          href="/"
        >
          Pokemon
        </Text>
        <Text component={ NextLink } href="/favorites">Favoritos</Text>
      </div>
    </>
  )
}