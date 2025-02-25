//COMPONENTE APP
import useCar from "./hooks/useCart"
import Header from "./components/Header"
import Guitarra from "./components/Guitarra"
import Footer from "./components/Footer"

function App() {
  //Custom Hook
  const { data, cart, isEmpty, cartTotal, addToCart, removeFromCart, clearCart,
        decreaseQuantity, increaseQuantity } = useCar();

  //--View--//
  return (
    <>
      <Header cart={cart} isEmpty={isEmpty} cartTotal={cartTotal} removeFromCart={removeFromCart} 
      clearCart={clearCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
              {data.map(guitar => (

                <Guitarra key={guitar.id} guitar={guitar} addToCart={addToCart} />

                ))}
          </div>
      </main>

      <Footer />
    </>
  )
}

export default App
