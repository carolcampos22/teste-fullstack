import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { AppContainer } from "./app-styled";
import {CreateProductForm} from "./components/CreateProductForm/CreateProductForm";

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    url_image?: string;
}

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts(); 
    }, []);

    const fetchProducts = () => {
        const apiUrl = 'http://localhost:3000/products';

        axios.get<Product[]>(apiUrl)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter produtos:', error);
            });
    };

    const handleCreateProduct = async (newProduct: Product) => {
        try {
            const response = await axios.post<Product>('http://localhost:3000/products', newProduct);
            setProducts([...products, response.data]);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
        }
    };

    const handleDeleteProduct = (productId: number) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <>
            <Header />
            <AppContainer>
                
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        onDelete={handleDeleteProduct}
                    />
                ))}
            </AppContainer>
            <CreateProductForm onCreate={handleCreateProduct} /> 
        </>
    );
}

export default App;
