/* eslint-disable react/prop-types */
import BookItem from '../components/BookItem'

const Home = ({ books, setBooks }) => {
  const hendelFevBook = (id) => {
    const index = books?.findIndex((book) => book?.id === id)
    const updateBooks = [...books]
    updateBooks[index].isFeb = !updateBooks[index]?.isFeb
    setBooks(updateBooks)
  }

  if (books?.length === 0) {
    return (
      <div className="container mx-auto">
        <h1 className="text-center text-red-600">No book found.😥</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books?.map((b) => (
        <BookItem book={b} key={b?.id} addToFev={hendelFevBook} />
      ))}
    </div>
  )
}

export default Home
