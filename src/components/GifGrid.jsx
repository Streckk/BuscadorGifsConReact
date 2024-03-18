
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";


const GifGrid = ({ element }) => {

    const {images, isLoading } = useFetchGifs(element);
    

    return (
        <>
            <h4>{element}</h4>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                            <GifItem 
                            key={image.id} 
                            {...image}
                            />
                        )
                    )
                }

            </div>
        </>
    )
}

export default GifGrid
