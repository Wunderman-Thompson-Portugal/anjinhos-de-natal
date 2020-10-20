export default function HeroAnjo({
  nome,
  brinquedo,
  genero,
  talhaDaRoupa,
  idade,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">

      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <p className="text-lg leading-relaxed mb-4">{nome}</p>
            <p className="text-lg leading-relaxed mb-4">{genero}</p>
            <p className="text-lg leading-relaxed mb-4">{idade}</p>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{brinquedo}</p>
          <p className="text-lg leading-relaxed mb-4">{talhaDaRoupa}</p>
        </div>
      </div>
    </section>
  )
}
