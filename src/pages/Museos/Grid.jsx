import api_propia from "../../mock/apicultura.json"
import "./grid.css"
import { Search2Icon } from '@chakra-ui/icons'


export function Grid() {

    const museos = api_propia.results

    return (
        <div className="page">

            <section className="search">
                <h1 className="title_search">Buscar</h1>
                <form className="form_search">
                    <input type="text" placeholder="Bellas Artes, Malvinas, Cabildo..." />
                    <button type='submit'><Search2Icon /></button>

                </form>
            </section>

            <section className="grid">
                <ul className="museos">
                    {
                        museos.map(museo =>
                        (
                            <li key={museo.id} className="museo">
                                <img src={museo.logo} alt={museo.nombre} />
                                <p>{museo.nombre.toUpperCase()}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>

    )
}