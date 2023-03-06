import api_propia from "../../mock/apicultura.json"
import "./grid.css"

export function Grid() {

    const museos = api_propia.results

    return (
        <div className="page">
            <section className="search">
                <h1 className="title_search">Buscar</h1>
                <form className="form_search">
                    <input type="text" placeholder="Bellas Artes, Malvinas, Cabildo..." />
                    <button type='submit'>Icono de Lupa</button>

                </form>
            </section>

            {/* TODO: TRAER LOS NOMBRES DE LA OTRA API Y QUE COINCIDA CON LA IMAGEN */}
            <section className="grid">
                <ul className="museos">
                    {
                        museos.map(museo =>
                        (
                            <li key={museo.id} className="museo">
                                <img src={museo.logo} alt={museo.nombre} />
                                <p>{museo.nombre}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>

    )
}