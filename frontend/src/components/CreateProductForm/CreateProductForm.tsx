import { useState, FormEvent } from 'react';
import axios from 'axios';
import { Product } from '../../App';
import { FormContainer } from './styled-form';

interface CreateProductFormProps {
    onCreate: (newProduct: Product) => void;
}

export const CreateProductForm = ({ onCreate }: CreateProductFormProps) => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [urlImage, setUrlImage] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const newProductData = { 
                name,
                price,
                quantity,
                url_image: urlImage
            };

            const response = await axios.post<Product>('http://localhost:3000/products', newProductData); 

            const createdProduct: Product = { 
                id: response.data.id,
                ...newProductData
            };

            setName('');
            setPrice(0);
            setQuantity(0);
            setUrlImage('');

            onCreate(createdProduct); 
        } catch (error) {
            console.error('Erro ao criar o produto:', error);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Preço:
                <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} required />
            </label>
            <label>
                Quantidade:
                <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
            </label>
            <label>
                URL da Imagem:
                <input type="text" value={urlImage} onChange={(e) => setUrlImage(e.target.value)} />
            </label>
            <button type="submit">Criar Produto</button>
        </FormContainer>
    );
};




