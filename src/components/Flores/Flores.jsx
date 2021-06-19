import { filterLimit } from 'async'
import dados from '../../services/dados'

import '../Flores/styles.css'

function Flores () {
    return (
        <div className="body">
            {dados.map(flor => {
                return(
                    <div>
                        <img src={flor.imagem} alt={flor.nome}/>
                        <h2>{flor.nome}</h2>
                        <p>{flor.descricao}</p>
                     </div>

                )
                
            })}
        </div>
    )
}

export default Flores