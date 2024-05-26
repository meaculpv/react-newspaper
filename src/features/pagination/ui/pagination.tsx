interface PaginationProps {
  currentPage: number;
  pages: number;
  onPageChange: Function;
}

export default function Pagination({
  currentPage,
  pages,
  onPageChange,
}: PaginationProps) {
  const pagesNumber = [];
  for (let i = 1; i <= pages; i++) {
    pagesNumber.push(i);
  }

  return (
    <div className='pagination'>
      <ul className='pagination__list'>
        {pagesNumber.map((page) => (
          <li
            onClick={onPageChange(page)}
            className='pagination__item'
            key={page}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}
