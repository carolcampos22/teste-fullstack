import { AppContainer } from "./app-styled"
import { AddButton } from "./components/AddButton/AddButton"
import { Header } from "./components/Header/Header"
import { ProductCard } from "./components/ProductCard/ProductCard"

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <ProductCard />
      </AppContainer>
      <AddButton />
    </>
  )
}

export default App
