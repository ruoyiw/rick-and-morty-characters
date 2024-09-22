import React from 'react'
import { Button, HStack, IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const siblingCount = 1
const boundaryCount = 1

// Helper function to create a range of numbers
const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Calculate the start and end pages
  const startPages = range(1, Math.min(boundaryCount, totalPages))
  const endPages = range(
    Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
    totalPages,
  )

  // Calculate the start of the sibling pages
  const siblingsStart = (currentPage - 1 === 3 ? Math.min : Math.max)(
    Math.min(
      currentPage - siblingCount,
      totalPages - boundaryCount - siblingCount * 2 - 1,
    ),
    boundaryCount + 1,
  )

  // Calculate the end of the sibling pages
  const siblingsEnd = (
    totalPages - currentPage === 3 ? Math.max : Math.min
  )(
    Math.max(
      currentPage + siblingCount,
      boundaryCount + siblingCount * 2 + 2,
    ),
    endPages.length > 0 ? endPages[0] - 1 : totalPages - 1,
  )

  // Create a list of items to display in the pagination component
  const itemList = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2 ? ['...'] : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < totalPages - boundaryCount - 1 ? ['...'] : []),
    ...endPages,
  ]

  return (
    <HStack spacing={1} wrap="wrap">
      {/* Previous page button */}
      <IconButton
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        aria-label="Previous page"
        icon={<ChevronLeftIcon fontSize="xl" />}
        variant="ghost"
        colorScheme="orange"
        textColor="gray.800"
      />

      {/* List of page numbers */}
      {itemList.map((item, index) => (
        <Button
          size="sm"
          key={index}
          onClick={() =>
            typeof item === 'number' && onPageChange(item)
          }
          isDisabled={item === '...'}
          colorScheme="orange"
          textColor={currentPage === item ? 'white' : 'gray.800'}
          variant={currentPage === item ? 'solid' : 'ghost'}
        >
          {item}
        </Button>
      ))}

      {/* Next page button */}
      <IconButton
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        aria-label="Next page"
        icon={<ChevronRightIcon fontSize="xl" />}
        variant="ghost"
        colorScheme="orange"
        textColor="gray.800"
      />
    </HStack>
  )
}
