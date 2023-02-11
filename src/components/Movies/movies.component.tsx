//react
import { FC } from "react"

//framer motion
import { motion } from 'framer-motion'

//interface
import MovieProps from "../types/movies.types"

const Movie:FC<MovieProps>  = ({ movie })=> {
    return (
        <motion.div 
          layout
          animate={{opacity: 1}} 
          initial={{opacity: 0}} 
          exit={{opacity: 0}}
        > 
            <h2>{movie.title}</h2>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
            />
        </motion.div>
    )
}

export default Movie