import Alerta from './alerta'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alerta preview={preview} />
        <main>{children}</main>
      </div>
    </>
  )
}
