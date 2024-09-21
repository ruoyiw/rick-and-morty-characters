import Cookies from 'js-cookie'

export type UserData = {
  username?: string
  jobTitle?: string
}

// export const useUserData = () => {
//   const [userData, setUserData] = useState<UserData | null>(null)

//   useEffect(() => {
//     // This code only runs on the client side
//     const storedData = localStorage.getItem('userData')
//     if (storedData) {
//       setUserData(JSON.parse(storedData))
//     }
//   }, [])

//   const saveUserData = (data: UserData) => {
//     setUserData(data)
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('userData', JSON.stringify(data))
//     }
//   }

//   return { userData, setUserData: saveUserData }
// }

export const getUserData = (): UserData => {
  const username = Cookies.get('username')
  const jobTitle = Cookies.get('jobTitle')

  return { username, jobTitle }
}

export const setUserData = ({ username, jobTitle }: UserData) => {
  Cookies.set('username', username || '')
  Cookies.set('jobTitle', jobTitle || '')
}
