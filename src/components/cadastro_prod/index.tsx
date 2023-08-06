import { useState } from 'react';
import styles from '../../styles/form_cadastro_prod.module.css';
import { AiFillFileAdd } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';


interface Product {
    description: string;
    promotion_status: boolean;
    stock: number;
    unit_price: number;
    promotion_price: number;
    }

    interface ProductImage {
        image_url: string;
        product: {
            id: number;
        };
    }
    export default function Cadastro_prod() {

        const [selectedImageFile, setSelectedImageFile] = useState<File>();
        const [imagePreviewURL, setImagePreviewURL] = useState<string>('');
        const [productId, setProductId] = useState<number>();
    
        const [description, setDescription] = useState('');
        const [stockAmount, setStockAmount] = useState<number>();
        const [unitPriceValue, setUnitPriceValue] = useState<number>();
        const [promotionPriceValue, setPromotionPriceValue] = useState<number>();

        const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        setSelectedImageFile(selectedFile);
        };


        async function sendProductImage(accessToken: string, idProd: number) {
            
            const image: ProductImage = {
                image_url: imagePreviewURL,
                product: {
                    id: idProd
                    }
                }

            try {
                const apiUrl = "https://demoapidrop-production.up.railway.app/api/image/save";
                console.log(image)
            
                const response = await axios.post(apiUrl, image, {
                    headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    },
                });
            
                console.log("Imagem Adicionada com sucesso", response.data);
                } catch (error) {
                    
                console.error('Erro ao enviar a imagem:', error);
                }
            }
        
    
        const handleUpload = () => {
        if (selectedImageFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
            const base64String = reader.result as string;
            setImagePreviewURL(base64String);
            
            };
            reader.readAsDataURL(selectedImageFile);
        }
        };

    
        const handleSaveProduct = async (e: React.FormEvent) => {
        e.preventDefault();


        
    
        if (!description || !stockAmount || !unitPriceValue || !promotionPriceValue || !selectedImageFile) {
        
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        
            })
            return;
        }
    
        

        
    
        const data: Product = {
            description,
            promotion_status: false,
            stock: stockAmount,
            unit_price: unitPriceValue,
            promotion_price: promotionPriceValue,
        };



        
    
        try {
            const apiUrl = "https://demoapidrop-production.up.railway.app/api/product/save";
            const accessToken = localStorage.getItem('token');
    
            const response = await axios.post(apiUrl, data, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            });    

            toast.success('Produto cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        
            })

            

            if (response.status === 201) {
                await sendProductImage(accessToken as string, response.data.id );
                }
        
        } catch (error) {
            toast.error('Erro ao criar o produto.!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        
            })
            console.error('Erro ao criar o produto:', error);
        }
    
        setDescription('');
        setPromotionPriceValue(0);
        setStockAmount(0.00);
        setUnitPriceValue(0.00);
        setImagePreviewURL('');
        
        
        
        
        
        };

        return (
        
        <div className={styles.container}>

            <div className={styles.box_Image}>
            {imagePreviewURL ? (
                <img className={styles.img} src={imagePreviewURL} alt="Imagem selecionada" />
            ) : (
                <span className={styles.icon}><AiFillFileAdd/></span>
            )}
            <div className={styles.input}>
                <span>*clique para abrir o diretório ou arraste e solte seus arquivos aqui!</span>
                <input className={styles.input_img} type="file" accept="image/*" onChange={handleImageChange}   />
                <button onClick={handleUpload}>Salvar</button>
            </div>
            </div>
            <div className={styles.container_form}>
                <form className={styles.form} onSubmit={handleSaveProduct}>
                    <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição do produto"
                    />
        
                    <input
                    type="number"
                    value={stockAmount}
                    onChange={(e) => setStockAmount(e.target.valueAsNumber)}
                    placeholder="Estoque"
                    />
        
                    <div className={styles.box_price}>
                        <input
                            type="number"
                            value={unitPriceValue}
                            placeholder="R$ Preço unitário"
                            className={styles.input_P_unitario}
                            onChange={(e) => setUnitPriceValue(e.target.valueAsNumber)}
                        />
            
                        <input
                            type="number"
                            value={promotionPriceValue}
                            placeholder="R$ Preço de promoção"
                            className={styles.input_P_promocao}
                            onChange={(e) => setPromotionPriceValue(e.target.valueAsNumber)}
                        />
                    </div>
                    <section className={styles.box_buttons}>
                        <button>Cancelar</button>
                        <button type="submit">Adicionar</button>
                    </section>
                </form> 
            </div>
        </div>
        );
    }