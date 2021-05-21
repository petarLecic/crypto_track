import { StyledPagination } from './StyledPagination'

const Pagination = ({currAmount, perPage, setCurrentPage}) => {
    const pageNumbers = []
    const pagesAmount = Math.ceil(currAmount / perPage)

    for (let i = 1; i <= pagesAmount; i++) {
        pageNumbers.push(i)
    }

    return (
        <StyledPagination>
            <ul>
                {
                    pageNumbers.map(num => {
                        return (
                            <li 
                                key={num} 
                                onClick={() => setCurrentPage(num)}
                            >{num}</li>
                        )
                    })
                }
            </ul>
        </StyledPagination>
    )
}

export default Pagination