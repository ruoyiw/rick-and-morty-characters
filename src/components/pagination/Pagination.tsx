import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const siblingCount = 1
  const boundaryCount = 1

  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }

  const startPages = range(1, Math.min(boundaryCount, totalPages))
  const endPages = range(
    Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
    totalPages,
  )

  const siblingsStart = Math.max(
    Math.min(
      currentPage - siblingCount,
      totalPages - boundaryCount - siblingCount * 2 - 1,
    ),
    boundaryCount + 2,
  )

  const siblingsEnd = Math.min(
    Math.max(
      currentPage + siblingCount,
      boundaryCount + siblingCount * 2 + 2,
    ),
    endPages.length > 0 ? endPages[0] - 2 : totalPages - 1,
  )

  console.log(range(siblingsStart, siblingsEnd))

  const itemList = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2 ? ['...'] : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < totalPages - boundaryCount - 1 ? ['...'] : []),
    ...endPages,
  ]

  return (
    <HStack spacing={1} wrap="wrap">
      <Button
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeftIcon fontSize="xl" />
      </Button>
      {itemList.map((item, index) => (
        <Button
          size="sm"
          key={index}
          onClick={() =>
            typeof item === 'number' && onPageChange(item)
          }
          isDisabled={item === '...'}
          colorScheme={currentPage === item ? 'blue' : 'gray'}
          variant={currentPage === item ? 'solid' : 'ghost'}
        >
          {item}
        </Button>
      ))}
      <Button
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRightIcon fontSize="xl" />
      </Button>
    </HStack>
  )
}
