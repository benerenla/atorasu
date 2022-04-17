import { AppContext } from 'pages/_app'
import { useContext } from 'react'

export const appContext = () => {
  const context = useContext(AppContext)

  return context
}
