import { FC, useState, PropsWithChildren } from 'react'
import { Character } from '@types'
import { InformationModal } from './InformationModal'
import { ModalContext } from './context'

// Create a provider to manage the modal state - isOpen, character, onClose, and onOpen
export const ModalProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [character, setCharacter] = useState<Character | null>(null)

  const onClose = () => {
    setIsOpen(false)
    setCharacter(null)
  }

  const onOpen = (character: Character) => {
    setIsOpen(true)
    setCharacter(character)
  }

  const value = { isOpen, onOpen, character, onClose }

  return (
    <ModalContext.Provider value={value}>
      {children}

      <InformationModal />
    </ModalContext.Provider>
  )
}
