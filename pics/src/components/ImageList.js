import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList( {images}) {

    const renderedImages = images.map((image) => {
        return (
            // Always add the key to the top-most JSX element in the list
            <div key={image.id}>
                <ImageShow image={image} /> 
            </div>
        ) 
    });

    return <div className='image-list'>{renderedImages}</div>
}

export default ImageList;