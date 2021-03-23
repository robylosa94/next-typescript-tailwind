import { FC } from "react"
import { Header } from "@components/common"

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
