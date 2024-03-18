import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";



const useFetchGifs = (element) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages =  async() => {
        const newImages = await getGifs(element);
        setImages(newImages);
        setIsLoading(false);
    }
    

    useEffect(() => {
        getImages(element);
        }, []
    )

  return {
    images,
    isLoading,
  }
}

export default useFetchGifs
