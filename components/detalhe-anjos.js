import PostTitle from '@/components/post-title'

export default function DetalheAnjos({ nome, idade, brinquedo, talhaDaRoupa, genero }) {
  return (
    <>
      <PostTitle>{nome}</PostTitle>
      <div className="grid grid-cols-2">
        <div className="md:grid text-base md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
          <div className="leading-relaxed mb-4">{idade}</div>
          <div className="leading-relaxed mb-4">{genero}</div>
        </div>
        <div className="md:grid text-base md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
            <p className="leading-relaxed mb-4">Prenda: {brinquedo}</p>
            <p className="leading-relaxed mb-4">Roupa para {talhaDaRoupa}</p>
        </div>
      </div>
    </>
  )
}
