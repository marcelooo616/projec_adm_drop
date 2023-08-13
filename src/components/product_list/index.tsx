import CardProducts from "../cards/card_products/idnex";
import styles from '@/styles/product_page.module.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFilter } from 'react-icons/bs';
import { toast } from "react-toastify";


export default function Product_list(){
    //https://demoapidrop-production.up.railway.app/api/product/show/
    
    const [listProd, setListProd] = useState<Product[]>([]);
    const [listImages, setListImages] = useState<Images[]>([]);

    const [loading, setLoading] = useState(true);
    
    

    interface Product {
        id: number
        description: string;
        promotion_status: boolean;
        stock: number;
        unit_price: number;
        promotion_price: number;
        }

    interface Images {
        imageUrl: string
        productId: number
        }

    const getAllProducts = async () => {
    
        const apiUrl = "https://demoapidrop-production.up.railway.app/api/product/show/all"
        const accessToken = localStorage.getItem('token');

        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            return response.data;
            
        } catch (error) {
            console.error('Erro ao obter os produtos:', error);
            throw error;
        }
    };

    

    const getAllImages = async () => {
    
        const apiUrl = "https://demoapidrop-production.up.railway.app/api/image/show/all"
        const accessToken = localStorage.getItem('token');

        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            setListImages(response.data)
            console.log(listImages);
            return response.data;
        } catch (error) {
            console.error('Erro ao obter os produtos:', error);
            throw error;
        }
    };

    const updateListProd = async () => {
        setLoading(true);
        const storedList = sessionStorage.getItem('products');
        const storedListImg = sessionStorage.getItem('images');

            if (storedList && storedListImg) {
            try {
                const products = await getAllProducts();
                const images = await getAllImages();
        
                const updateProducts = JSON.parse(storedList);
                const updateImages = JSON.parse(storedListImg);
        
                // Verificar se há diferenças nos produtos
                const newProducts = products.filter((product: { id: any; }) => 
                !updateProducts.some((updateProduct: { id: any; }) => updateProduct.id === product.id)
                );
        
                // Verificar se há diferenças nas imagens
                const newImages = images.filter((image: {id: any;}) => 
                !updateImages.some((updateImage: {id: any;}) => updateImage.id === image.id)
                );
        
                if (newProducts.length > 0 || newImages.length > 0) {
                const updatedProd = [...updateProducts, ...newProducts];
                const updatedImag = [...updateImages, ...newImages];
                
                setListProd(updatedProd);
                setListImages(updatedImag);
                
                sessionStorage.setItem('products', JSON.stringify(updatedProd));
                sessionStorage.setItem('images', JSON.stringify(updatedImag));

                toast.success('Lista atualizada .!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
            
                })

                setLoading(false);
                } else {
                    toast.warn('Nada de novo na lista de produtos.!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                
                    })
                setLoading(false)
                }
            } catch (error) {
                toast.error('Erro ao obter os produtos.!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
            
                })
                console.error('Erro ao obter os produtos:', error);
                setLoading(false)
            }
            }
        };
        



    useEffect(() => {
        const fetchProduct = async () => {
            
            const storedList = sessionStorage.getItem('products');
            const storedListImg = sessionStorage.getItem('images');

            if(storedList && storedListImg){
                setListProd(JSON.parse(storedList));
                setListImages(JSON.parse(storedListImg));
                setLoading(false);
            }else{
                try {
                    const products = await getAllProducts(); 
                    const images = await getAllImages();
                    setListProd(products);

                    sessionStorage.setItem('products', JSON.stringify(products));
                    sessionStorage.setItem('images', JSON.stringify(images));
                    setLoading(false);

                } catch (error) {
                    console.error('Erro ao obter os produtos:', error);
                }
            }
        }
        fetchProduct();
    },[]);


    return(
        <div className={styles.container_prod_list}>
            <div className={styles.title}>
                <div className={styles.filter}>
                    <h1>Meus Produtos</h1>
                    <button onClick={updateListProd}><BsFilter className={styles.icons}/></button>
                </div>
                <button onClick={updateListProd}>Atualizar</button>
            </div>
            <hr /> 
            {
                loading ? (
                    <div className={styles.loader}></div>
                ):(
                    <div className={styles.grid_product}>
                    {listProd.map((product) => (
                        <div key={product.id}>
                        
                        {/* Encontrar a imagem correspondente ao produto pelo productId */}
                        {listImages
                            .filter((image) => image.productId === product.id)
                            .map((image) => (
                            <CardProducts
                                description={product.description}
                                img={image.imageUrl}
                                price={product.promotion_price.toFixed(2)}
                            />
                            
                            ))}
                        </div>
                    ))}
            </div>
                )
            }
        </div>
    )
}