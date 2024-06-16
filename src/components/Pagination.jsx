
const Pagination = ({count, limit = 7,currentPage, pageChange}) => {

  if (limit < 5) {
    return <p>No renderer found: Invalid Limit</p>
  }

  const pages = () => {
    let result = [];
    if (count <= limit) {
      result = Array.from({length: count}, (_, k) => k + 1);
    } else {
      result.push(1);

      const middleValue = limit - 2;
      let startPage,endPage;

      if (currentPage <= middleValue - 1) {
        startPage = 2;
        endPage = middleValue;
      } else if (currentPage > count - (middleValue - 1)) {
        startPage = count - (middleValue - 1);
        endPage = count - 1;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1
      }

      // adding ellips start
      if (currentPage >= middleValue) {
        result.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        result.push(i);
      }

      // adding ellips end
      if (currentPage <= count - (middleValue - 1)) {
        result.push('...');
      }

      result.push(count);
    }
    return result;
  }

  return (
    <div className="pagination-container">
      <button className="action-btn" disabled={currentPage < 2}>Prev</button>
        {pages().map(number => {
          if (!isNaN(number)) {
           return <button onClick={() => pageChange(number)} className={`${currentPage === number ? 'page-active': ''}`}>{number}</button>
          }
          // ellips
          return <span>{number}</span>
        })}
      <button className="action-btn" disabled={currentPage > count - 1}>Next</button>
    </div>
  );
}

export default Pagination;
