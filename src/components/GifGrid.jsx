import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getImages();
    }, []);
    const getImages = async () => {
        const newImages = await getGifs({ category });
        setImages(newImages);
    };
    return (
        <>
            <ol>
                {images.map((img) => (
                    <>
                        <li key={img.id}>{img.title}</li>
                        <img src={img.images} alt={img.title} />
                    </>
                ))}
            </ol>
        </>
    );
};
