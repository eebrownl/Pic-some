import React, {useState} from 'react'

function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    
    return(
        <div className={`${className} image-container`} onMouseEnter={()=> setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img alt='pic' src={img.url} className='image-grid' />
        </div>
    )
}

export default Image