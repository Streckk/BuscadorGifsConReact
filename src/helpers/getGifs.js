const getGifs = async (element) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gLTdJy1BQRXjHnKIziEVklO4b9xPJvXm&q=${element}&limit=100`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}

export default getGifs