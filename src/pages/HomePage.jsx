import { useSelector } from 'react-redux'
import SearchEmptyState from '../components/EmptySearchState'
import SearchResult from '../components/SearchResult'

const HomePage = () => {
    const { query } = useSelector((store) => store.search)

    return (
        <div>
            {query ? <SearchResult /> : <SearchEmptyState />}
        </div>
    )
}

export default HomePage