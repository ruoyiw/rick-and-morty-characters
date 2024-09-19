export type UserData = {
  username: string
  jobTitle: string
}

export const useUserData = () => {
  const getUserData = (): UserData | null => {
    const storedUserData = localStorage.getItem('userData')
    return storedUserData ? JSON.parse(storedUserData) : null
  }

  const setUserData = (newUserData: UserData) => {
    return localStorage.setItem(
      'userData',
      JSON.stringify(newUserData),
    )
  }

  return { getUserData, setUserData }
}
