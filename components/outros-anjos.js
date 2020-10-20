export default function AnjoPreview({
  nome,
  brinquedo,
  genero,
  talhaDaRoupa,
  idade,
}) {
  return (
    <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
      <div>
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <p className="text-lg leading-relaxed mb-4">Nome: {nome}</p>
          <p className="text-lg leading-relaxed mb-4">{genero}</p>
          <p className="text-lg leading-relaxed mb-4">Idade: {idade}</p>
        </h3>
      </div>
      <div>
        <p className="text-lg leading-relaxed mb-4">Prenda: {brinquedo}</p>
        <p className="text-lg leading-relaxed mb-4">Roupa para {talhaDaRoupa}</p>
      </div>
    </div>
  )
}
