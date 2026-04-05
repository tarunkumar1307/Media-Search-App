import ResultGrid from "./ResultGrid"
import SearchBar from "./SearchBar"
import Tabs from "./Tabs"


const SearchResult = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
        <SearchBar />
        <Tabs />
        <ResultGrid />
    </div>
  )
}

export default SearchResult