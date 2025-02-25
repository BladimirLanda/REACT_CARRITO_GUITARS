//COMPONENTE HEADER
import { Guitar, CartItem } from "../types/types"

//--TS Type
type HeaderProps = {
    cart: CartItem[],
    isEmpty: boolean,
    cartTotal: number,
    clearCart: () => void, 
    removeFromCart: (id: Guitar['id']) => void,
    increaseQuantity: (id: Guitar['id']) => void,
    decreaseQuantity: (id: Guitar['id']) => void,
}

//--TS setType
function Header( { cart, isEmpty, cartTotal ,removeFromCart, clearCart, increaseQuantity, decreaseQuantity } 
                : HeaderProps ) {
    //--View--//
    return (
        <header className="header py-5">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="/">
                            <img className="img-fluid" src="img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>

                    <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid" src="img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center">El carrito está vacio</p>
                                ) : (
                                    <>
                                        <table className="table w-100">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cart.map(guitar => (
                                                    <tr key={guitar.id}>
                                                        <td>
                                                            <img className="img-fluid" src={ `img/${guitar.image}.jpg` } 
                                                            alt="imagen guitarra" />
                                                        </td>

                                                        <td>{guitar.name}</td>

                                                        <td className="fw-bold">${guitar.price}</td>

                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseQuantity(guitar.id)}
                                                            >
                                                                -
                                                            </button>

                                                            <span>{guitar.quantity}</span>

                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(guitar.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>

                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(guitar.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <p className="text-end">Total pagar: 
                                            <span className="fw-bold">${ cartTotal }</span>
                                        </p>
                                    </>
                                )}

                                <button 
                                    className="btn btn-dark w-100 mt-3 p-2"
                                    onClick={ clearCart }
                                >
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header