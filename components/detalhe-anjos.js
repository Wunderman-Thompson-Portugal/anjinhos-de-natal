import PostTitle from '@/components/post-title'
import { CommerceLayer, AddToCartButton } from '@commercelayer/react-components'

export default function DetalheAnjos({ nome, idade, brinquedo, talhaDaRoupa, genero }) {
  return (
    <>
    <div>
      <PostTitle>{nome}</PostTitle>
      <div className="grid grid-cols-2 ">
        <div className="md:grid text-base md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
          <div className="leading-relaxed mb-4">{idade}</div>
          <div className="leading-relaxed mb-4">{genero}</div>
        </div>
        <div className="md:grid text-base md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
            <p className="leading-relaxed mb-4">Prenda: {brinquedo}</p>
            <p className="leading-relaxed mb-4">Roupa para {talhaDaRoupa}</p>
        </div>
      </div>
      <CommerceLayer accessToken="eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjE5NTB9LCJhcHBsaWNhdGlvbiI6eyJpZCI6Mjc4NCwia2luZCI6InNhbGVzX2NoYW5uZWwiLCJwdWJsaWMiOnRydWV9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE2MDQ2ODk0NjksIm1hcmtldCI6eyJpZCI6MzQwMywicHJpY2VfbGlzdF9pZCI6MzM3OSwic3RvY2tfbG9jYXRpb25faWRzIjpbMzc2M10sImdlb2NvZGVyX2lkIjpudWxsLCJhbGxvd3NfZXh0ZXJuYWxfcHJpY2VzIjpmYWxzZX0sInJhbmQiOjAuNjM5NTc5Njg0OTk4MDMwMn0.HhuI3ew0ixN0o00zuP6P_OT2MQ-KCodLrdLqIlmmdhDuRDYTzusAYsiMWVYqRCF3h1oQYXBghQ8elgOxhx36CA" endpoint="https://anjinhosdenatal.commercelayer.io">
      {/* ... child components */}
      <AddToCartButton>
        {CustomAddToCart}
      </AddToCartButton>
      </CommerceLayer>
    </div>
    </>
  )
}

const CustomAddToCart = (props) => {
  const classes = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  const myClick = async () => {
    const { success } = await props.handleClick()
    if (success) {
      location.href = 'https://anjinhosdenatal-escolher.netlify.app/wOBnhRaVWR'
    }
  }
  return (
    <button
      id="add-to-bag"
      className={`${classes} ${props.className}`}
      onClick={myClick}
      disabled={props.disabled}
    >
      Buy now
    </button>
  )
}
