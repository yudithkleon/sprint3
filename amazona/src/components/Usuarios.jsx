import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

export const Usuarios = () => {
    return (
        <div style={{width:'342px', height: '513px'}}>
            <div>
                <ReactImageMagnify {...{
                smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: "https://res.cloudinary.com/danimel/image/upload/v1633271974/obcmukjpeywevckvr5qq.jpg"
                },
                largeImage: {
            src:"https://res.cloudinary.com/danimel/image/upload/v1633271974/obcmukjpeywevckvr5qq.jpg",
            width: 1099,
            height: 1428
                }
            }} />
            </div>
        </div>
    )
}
