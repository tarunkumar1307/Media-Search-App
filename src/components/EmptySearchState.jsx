import SearchBar from './SearchBar';

const SearchEmptyState = () => {
    return (
        <div className='flex flex-col gap-7 items-center justify-center h-[90vh] w-full bg-(--color-bg) text-(--color-text)'>

            <div className='bg-(--color-primary) px-11 py-3 rounded-full text-white'>
                Image • Video • GIFs
            </div>

            <h1 className='text-6xl text-center font-semibold'>
                Find any <span className='text-(--color-primary)'>media</span>, <br />
                instantly.
            </h1>

            <div className='text-lg text-gray-500'>
                Find any image, video or GIF instantly.
            </div>

            <div className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-4xl'>
                <SearchBar />
            </div>
        </div>
    )
}

export default SearchEmptyState