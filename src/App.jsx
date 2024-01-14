import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './page/Home'
import booksJson from './data/books.json'
import { useState } from 'react'

function App() {
  const [books, setBooks] = useState(booksJson)

  return (
    <>
      <NavBar />
      <main className="my-10 lg:my-14">
        <Header books={books} setBooks={setBooks} />
        <Home books={books} setBooks={setBooks} />
      </main>
      <Footer />
    </>
  )
}

export default App
