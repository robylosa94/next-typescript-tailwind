import { FC } from "react"
import { Header } from "components/common"

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
