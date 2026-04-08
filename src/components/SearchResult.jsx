import ResultGrid from "./ResultGrid"
import SearchBar from "./SearchBar"
import Tabs from "./Tabs"


const SearchResult = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex gap-10 w-full">
        <SearchBar className='w-[60%]' />
        <Tabs className='' />
      </div>
      <ResultGrid />
    </div>
  )
}

export default SearchResult