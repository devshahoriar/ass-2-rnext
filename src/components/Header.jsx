/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import bookJson from '../data/books.json'

const Header = ({ setBooks, books }) => {
  const [searchText, setSearchText] = useState('')
  const [debounchedText, setDebounchedText] = useState('')
  const [sortTypeValue, setShortTypeValue] = useState('dflt')
  const [error, setError] = useState(false)

  const hendelSearchTextChange = (v) => {
    setSearchText(v)
    setError(false)
    setShortTypeValue('dflt')
  }

  const hendelSearch = (e) => {
    e.preventDefault()
    if (searchText.length === 0) {
      setError(true)
    }
  }

  //debounch hendel
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounchedText(searchText)
    }, 500)
    return () => clearTimeout(timeOut)
  }, [searchText])

  const search = () => {
    const filterBooks = bookJson?.filter((book) =>
      book?.name?.toLowerCase()?.includes(debounchedText?.toLowerCase())
    )
    setBooks([...filterBooks])
  }

  //search hendel
  useEffect(() => {
    search()
  }, [debounchedText])

  //sort hendel
  useEffect(() => {
    if (sortTypeValue === 'dflt') {
      search()
      return
    }
    if (sortTypeValue === 'name_asc') {
      const sort = books?.sort((a, b) => a?.name.localeCompare(b?.name))
      setBooks([...sort])
      return
    }
    if (sortTypeValue === 'name_desc') {
      const sort = books
        ?.sort((a, b) => a?.name.localeCompare(b?.name))
        .reverse()
      setBooks([...sort])
      return
    }
    if (sortTypeValue === 'year_asc') {
      const sort = books?.sort((a, b) => a?.pubYear - b?.pubYear)
      setBooks([...sort])
      return
    }
    if (sortTypeValue === 'year_desc') {
      const sort = books?.sort((a, b) => b?.pubYear - a?.pubYear)
      setBooks([...sort])
      return
    }
  }, [sortTypeValue])

  return (
    <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
          <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
          <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>
          <form onSubmit={hendelSearch}>
            <div className="flex">
              <div
                className={`relative w-full overflow-hidden rounded-lg border-2  text-[#1C4336] md:min-w-[380px] lg:min-w-[440px] ${
                  error ? 'border-red-500' : 'border-[#1C4336]'
                }`}
              >
                <input
                  name="search"
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                  placeholder="Search Book"
                  required=""
                  value={searchText}
                  onChange={(e) => hendelSearchTextChange(e.target.value)}
                />
                <div className="absolute right-0 top-0 flex h-full items-center">
                  <button
                    type="submit"
                    className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                  >
                    <svg
                      className="h-[14px] w-[14px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-stretch space-x-3">
          <select
            value={sortTypeValue}
            onChange={(e) => setShortTypeValue(e.target.value)}
            className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
            name="sortBy"
            id="sortBy"
          >
            <option value="dflt">Default</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
            <option value="year_asc">Publication Year (Oldest)</option>
            <option value="year_desc">Publication Year (Newest)</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header
