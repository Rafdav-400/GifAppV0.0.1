export const getGifs = async ({ category }) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9rSdj5ZspuvA3bAUaH0YTxtm0Ykf8GAX&q=${category}&limit=5`;
    const busqueda = await fetch(url);
    /*console.log(busqueda)*/
    const { data } = await busqueda.json();
    console.log(data)
    const resultado = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.url,
        images: gif.images.downsized_medium.url,
    }));
    return resultado;
};
