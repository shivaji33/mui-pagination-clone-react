import { useState } from "react";
import Pagination from "./components/Pagination";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState(1);
  const paginationChange = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <div className="App">
      <Pagination
        count={8}
        currentPage={page}
        maximauVisiblePages={7}
        onChange={paginationChange}
      />
    </div>
  );
}
