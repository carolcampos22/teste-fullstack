import { useState, FormEvent } from 'react';
import axios from 'axios';
import { Product } from '../../App';
import { UpdateProductFormContainer } from './styled-update-form';

interface UpdateProductFormProps {
    product: Product;
    onUpdate: (updatedProduct: Product) => void; // Update the type to accept the updated product
}


export const UpdateProductForm = ({ product, onUpdate }: UpdateProductFormProps) => {
    const [name, setName] = useState<string>(product.name);
    const [price, setPrice] = useState<number>(product.price);
    const [quantity, setQuantity] = useState<number>(product.quantity);
    const [urlImage, setUrlImage] = useState<string>(product.url_image || '');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        try {
            const updatedProductData: Product = {
                id: product.id,
                name,
                price,
                quantity,
                url_image: urlImage
            };

            await axios.patch(`http://localhost:3000/products/${product.id}`, updatedProductData);
            
            onUpdate(updatedProductData);

            console.log("Tipo de preço no front: ",typeof price)
        } catch (error) {
            console.error('Erro ao atualizar o produto:', error);
            console.log("Tipo de preço no front: ",typeof price)
        }
    };
    
    

    return (
        <UpdateProductFormContainer onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Preço:
                <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} required />
            </label>
            <label>
                Quantidade:3
                <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
            </label>
            <label>
                URL da Imagem:
                <input type="text" value={urlImage} onChange={(e) => setUrlImage(e.target.value)} />
            </label>
            
            <button type="submit">Atualizar Produto</button>
        </UpdateProductFormContainer>
    );
};
