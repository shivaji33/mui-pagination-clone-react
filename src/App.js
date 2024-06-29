
import { useState } from 'react';
import './styles.css';
import Pagination from './components/Pagination'

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
    <Pagination count={1000} limit={5} currentPage={currentPage} pageChange={onPageChange} />
    </>
  )
}

export default App
