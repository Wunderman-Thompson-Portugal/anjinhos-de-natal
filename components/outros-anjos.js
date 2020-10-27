export default function AnjoPreview({
  nome,
  brinquedo,
  genero,
  talhaDaRoupa,
  idade,
}) {
  return (

    <div>
      <div className="text-center">
        <p className="text-xl mx-auto leading-relaxed font-bold"> {nome}</p>
        <div className="leading-relaxed mb-4">{idade}</div>
      </div>
      <div className="md:grid text-base md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
          <p className="leading-relaxed mb-4">Prenda: {brinquedo}</p>
          <p className="leading-relaxed mb-4">Roupa para {talhaDaRoupa}</p>
      </div>
    </div>

  )
}
