import { FC } from 'react'
import { Badge, BadgeProps } from '@chakra-ui/react'
import { Status } from '@types'

const badgeColorsMapping: Record<Status, BadgeProps['colorScheme']> =
  {
    Alive: 'green',
    Dead: 'red',
    unknown: 'gray',
  }

type StatusBadgeProps = {
  status: Status
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => (
  <Badge
    fontSize={['xs', 'sm']}
    borderRadius="full"
    px="2"
    colorScheme={badgeColorsMapping[status]}
    w="fit-content"
  >
    {status}
  </Badge>
)
