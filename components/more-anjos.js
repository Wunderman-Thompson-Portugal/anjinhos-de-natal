import OutrosAnjos from './outros-anjos'

export default function MoreAnjos({ anjos }) {
  return (
    <section>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {anjos.map((anjo) => (
          <OutrosAnjos
            nome={anjo.nome}
            brinquedo={anjo.brinquedo.titulo}
            genero={anjo.genero}
            talhaDaRoupa={anjo.talhaDaRoupa.anos}
            idade={anjo.idade.anos}
            slug={anjo.slug}
            number={anjo.number}
          />
        ))}
      </div>
    </section>
  )
}
