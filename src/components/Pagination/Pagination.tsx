import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';


type PaginationProps = {
    onChangePage: (value: number) => void
    currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({onChangePage, currentPage}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={4}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  )
}

export default Pagination;