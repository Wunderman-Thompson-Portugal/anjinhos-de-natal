import MaisAnjos from './outros-anjos'

export default function MoreAnjos({ anjos }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Outros Anjos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {anjos.map((anjo) => (
          <MaisAnjos
            nome={anjo.nome}
            brinquedo={anjo.brinquedo.titulo}
            genero={anjo.genero}
            talhaDaRoupa={anjo.talhaDaRoupa.anos}
            idade={anjo.idade.anos}
          />
        ))}
      </div>
    </section>
  )
}
