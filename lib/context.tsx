import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"

const initialContext = {}

const SiteContext = createContext({
  context: initialContext,
  setContext: (() => null) as Dispatch<SetStateAction<{}>>,
})

type Props = {
  children: React.ReactNode
}

export function SiteContextProvider({ children }: Props) {
  const [context, setContext] = useState({
    ...initialContext,
  })
  const [initContext, setInitContext] = useState(false)

  useEffect(() => {
    if (initContext === false) {
      setInitContext(true)
    }
  }, [initContext, context, setContext])

  return (
    <SiteContext.Provider
      value={{
        context,
        setContext,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSiteContext() {
  const { context } = useContext(SiteContext)
  return context
}
