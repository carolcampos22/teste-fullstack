import { Buttons, CardContainer } from "./styled-product-card"
import image from "../../assets/example.jpg"

export const ProductCard = (props: any) => {
    return (
        <CardContainer>
            <h2>Nome do produto</h2>
            <img src={image} alt="nome do produto" />
            <span>Preço do produto </span>
            <Buttons>
                <button>Alterar</button>
                <button>Excluir</button>
            </Buttons>
        </CardContainer>
    )
}