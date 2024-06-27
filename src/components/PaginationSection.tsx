import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationSectionProps {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PaginationSection: React.FC<PaginationSectionProps> = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalPosts / postsPerPage) }, (_, i) => i + 1);
  const maxPageNum = 5;
  const pageNumLimit = Math.floor(maxPageNum / 2);
  let activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
  );

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPages = () => {
    const renderedPages = activePages.map(page => (
      <PaginationItem
        key={page}
        className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}
      >
        <PaginationLink onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      );
    }

    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() => setCurrentPage(activePages[activePages.length - 1] + 1)}
        />
      );
    }

    return renderedPages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevPage} />
        </PaginationItem>
        {renderPages()}
        <PaginationItem>
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
