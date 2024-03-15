import  { useState } from "react";
import axios from "axios";
import { Buttons, CardContainer } from "./styled-product-card";
import image from "../../assets/example.jpg";
import { UpdateProductForm } from "../UpdateProductForm/UpdateProductForm";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    quantity: number;
    url_image?: string;
    onDelete: (productId: number) => void;
}

export const ProductCard = ({ id, name, price, quantity, url_image, onDelete }: ProductProps): JSX.Element => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // Estado para controlar se o formulário de edição está aberto ou fechado

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            setIsDeleting(false);
            onDelete(id);
        } catch (error) {
            console.error('Erro ao excluir o produto:', error);
            setIsDeleting(false);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        setIsEditing(false);
    };

    return (
        <CardContainer>
            {isEditing ? (
                <UpdateProductForm product={{ id, name, price, quantity, url_image }} onUpdate={handleUpdate} /> // Renderize o formulário de edição se isEditing for verdadeiro
            ) : (
                <>
                    <h2>{name}</h2>
                    <img src={url_image || image} alt={name} />
                    <span>R${price},00</span>
                    <p>Quatidade em estoque: {quantity}</p>
                    <Buttons>
                        <button onClick={handleEdit}>Editar</button> 
                        <button onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? "Excluindo..." : "Excluir"}
                        </button>
                    </Buttons>
                </>
            )}
        </CardContainer>
    );
};

export default ProductCard;

