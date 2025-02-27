//COMPONENTE GUITARRA
import type { Guitar } from "../types/types";

//--TS: Type
type GuitarProps = {
    guitar: Guitar,
    addToCart: (item: Guitar) => void;
}

//--TS setType
function Guitarra( { guitar, addToCart } : GuitarProps ) {
    //Variables
    const { name, image, description, price } = guitar;

    //--View--//
    return (
        <div className="my-4 row col-md-6 col-lg-4 align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={ `img/${image}.jpg` } alt="imagen guitarra" />
            </div>

            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{ name }</h3>

                <p>{ description }</p>

                <p className="fs-3 fw-black text-primary">${ price }</p>
                
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={ () => addToCart(guitar) }
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default Guitarra