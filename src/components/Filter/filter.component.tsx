//react
import { Dispatch, SetStateAction, useContext, useEffect, FC } from 'react'

//context
import { MovieContext } from '../../store/movie'

//components
import { ButtonClick, ButtonPages } from '../Button/button.styles'

//styles
import { FilterContainer } from './filter.styles'

//icons
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'

//interface
interface FilterProps {
    movies: any
    setFiltered: Dispatch<SetStateAction<string[]>>
    setActiveGenre: Dispatch<SetStateAction<number>>
    activeGenre: number
}

const Filter:FC<FilterProps> = ({movies, setFiltered, setActiveGenre, activeGenre}) => {

    //context
    const {moreMovies, setMoreMovies} = useContext(MovieContext)

    useEffect(() => {
        if(activeGenre === 0) {
            setFiltered(movies)
            return
        }
        const filtered = movies.filter((movie: any) => 
            movie.genre_ids.includes(activeGenre)
        )
        setFiltered(filtered)
    },[activeGenre])


    const handleMoreMovies = () => {
        setMoreMovies(moreMovies + 1)
    }

    const handleBackMovies = () => {
        if(moreMovies === 1) {
            return setMoreMovies(moreMovies)
        }
        setMoreMovies(moreMovies - 1)
    }


    return (
        <FilterContainer>
            <div>
            <ButtonClick 
                draggable={activeGenre === 0 ? true : false}
                onClick={() => setActiveGenre(0)}>
                Todos
            </ButtonClick>

            <ButtonClick 
                draggable={activeGenre === 35 ? true : false}
                onClick={() => setActiveGenre(35)}
                >Comédia
            </ButtonClick>

            <ButtonClick 
                draggable={activeGenre === 28 ? true : false}
                onClick={() => setActiveGenre(28)}
                >Ação
            </ButtonClick>

            </div>

            <div>
                <ButtonPages 
                    onClick={handleBackMovies}
                    >
                       <HiArrowCircleLeft size="20"/>  Anterior
                        
                </ButtonPages>
                    {/* <p>Página atual {moreMovies}</p> */}
                <ButtonPages 
                    onClick={handleMoreMovies}
                    >
                       <HiArrowCircleRight size="20"/> Próximo
                        
                </ButtonPages>
            </div>

        </FilterContainer>
    )
}

export default Filter