import Cookies from 'js-cookie'

export type UserData = {
  username?: string
  jobTitle?: string
}

// getUserData function that reads the username and jobTitle from the cookies and returns them as an object.
export const getUserData = (): UserData => {
  const username = Cookies.get('username')
  const jobTitle = Cookies.get('jobTitle')

  return { username, jobTitle }
}

// setUserData function that sets the username and jobTitle in the cookies.
export const setUserData = ({ username, jobTitle }: UserData) => {
  Cookies.set('username', username || '')
  Cookies.set('jobTitle', jobTitle || '')
}
