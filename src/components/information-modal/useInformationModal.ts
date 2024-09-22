import { useContext } from 'react'
import { ModalContext } from './context'

export const useInformationModal = () => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error(
      'useInformationModal must be used inside ModalProvider',
    )
  }

  return context
}
