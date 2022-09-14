import type {ReactElement} from 'react'
import Head from "next/head"
import {Navbar} from '../ui';

interface Props {
    children: ReactElement,
    title?:string,
}

export const Layout = ({children, title}: Props)=> {
  return (
    <>
        <Head>
            <title>{title || "Pokemon App"}</title>
            <meta  name="autor" content='Oscar Quevedo'/>
            <meta name="description" content="Informacion de los pokemon" />
            <meta name="keywords" content= {`${title}, pokedex, pokemon`} />
            <meta property='og:title' content={`Informacion sobre ${title}`} />
        </Head>
        {/* NAVBAR */}
        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
