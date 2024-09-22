import { createContext } from 'react'
import { Character } from '@types'

type ContextType = {
  isOpen: boolean
  character: Character | null
  onClose: VoidFunction
  onOpen: (character: Character) => void
}

export const ModalContext = createContext<ContextType | null>(null)
