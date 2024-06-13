const Pagination = ({ count, currentPage, maximauVisiblePages, onChange }) => {
  const pages = () => {
    const pagesList = [];
    if (count <= maximauVisiblePages) {
      for (let i = 1; i <= count; i++) {
        pagesList.push(i);
      }
    } else {
      pagesList.push(1);

      const middleValuesCount = maximauVisiblePages - 2;
      let startPage;
      let endPage;

      if (currentPage < middleValuesCount) {
        startPage = 2;
        endPage = middleValuesCount;
      } else if (currentPage > count - middleValuesCount + 1) {
        startPage = count - middleValuesCount + 1;
        endPage = count - 1;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }

      if (currentPage >= middleValuesCount) {
        pagesList.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pagesList.push(i);
      }

      if (currentPage <= count - middleValuesCount + 1) {
        pagesList.push("...");
      }

      pagesList.push(count);
    }
    return pagesList;
  };

  return (
    <div className="pagination-wrapper">
      <button
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        ←
      </button>
      {pages().map((page, i) => {
        if (isNaN(page)) {
          return (
            <span
              key={page + " " + i}
              style={{
                margin: ".25rem",
              }}
            >
              {page}
            </span>
          );
        }
        return (
          <button
            key={page}
            className={page === currentPage ? "active" : ""}
            onClick={() => onChange(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        disabled={currentPage === count}
        onClick={() => onChange(currentPage + 1)}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
