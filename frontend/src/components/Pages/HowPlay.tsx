import { motion } from 'framer-motion'

export const HowPlay = (): JSX.Element => {
  return (
        <section className="how-to-play">
            <h2 className="how-to-play__title">
                Como jugar
                <motion.span>
                    ❓
                </motion.span>
            </h2>
            <article className='how-to-play__article'>
                <p>
                    El objetivo del juego es simple, adivinar el máximo de banderas posibles en el menor tiempo posible.
                    En total habrán 30 banderas totalmente aleatorias.
                </p>
                <p>
                    Al adivinar una bander recibirás <b>1000</b> puntos.
                </p>
                <p>
                    Cada <b>3</b> segundos tu puntuación baja <b>50</b> puntos.
                </p>
                <p>
                    Al final del juego aparecerá tu puntuación con las banderas acertadas.
                </p>
            </article>
        </section>
  )
}
