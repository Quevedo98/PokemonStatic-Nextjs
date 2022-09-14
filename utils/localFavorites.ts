

const toggleFavorite = (id: number) => {

    console.log("togglefavorite llamado");
    
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id);
    }else{
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))

}

const verifyFavo = ( id: number ): boolean => {

    if(typeof window === "undefined") return false; //estamos en el lado del servidor o no?

    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');
    
    return favorites.includes( id );
}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}


export default{
    toggleFavorite,
    verifyFavo,
    pokemons
}