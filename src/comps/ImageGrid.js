import { motion } from 'framer-motion'
import React from 'react'
import useCollection from '../firebase/useCollection'


const ImageGrid = ({ setSelected }) => {
    const { docs } = useCollection('images')
    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <motion.div className='img-wrap' key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelected(doc.url)}>
                    <motion.img src={doc.url} alt='mahi-img' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}} />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
