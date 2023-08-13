import Layout from "@/components/Layout/index";
import styles from '@/styles/desc_prod.module.css'
import styless from '../../styles/form_cadastro_prod.module.css';
import { useState } from "react";
import { AiFillFileAdd } from 'react-icons/ai';
import Button from "@/components/button";


export default function Edit() {
    const [index, setIndex] =  useState(0);
    const [selectedImageFile, setSelectedImageFile] = useState<File>();
    const [imagePreviewURL, setImagePreviewURL] = useState<string>('');

    
    const imgs = [
        {link: "https://i.imgur.com/aAXuVo7.jpg"},
        {link: "https://i.imgur.com/zZa0SgO.jpg"},
        {link: "https://i.imgur.com/WmtOklB.jpg"},
        {link: "https://i.imgur.com/KXom16z.jpg"},
        {link: "https://i.imgur.com/aAXuVo7.jpg"},
        {link: "https://i.imgur.com/zZa0SgO.jpg"},
        {link: "https://i.imgur.com/WmtOklB.jpg"},
        {link: "https://i.imgur.com/KXom16z.jpg"},
    ]

    const t = "40, 41, 37.5 , 45";
    const size = [
        {tamanho: "37"},
        {tamanho: "37.5"},
        {tamanho: "38"},
        {tamanho: "39"},
        {tamanho: "39.5"},
        {tamanho: "40"},
        {tamanho: "40.5"},
        {tamanho: "41"},
        {tamanho: "42"},
        {tamanho: "42.5"},
        {tamanho: "43"},
        {tamanho: "43.5"},
        {tamanho: "44"},
        {tamanho: "45"},
        {tamanho: "46"},
        {tamanho: "47"},
        {tamanho: "48"},
    ]
    const tamanhosNaString = t.split(',').map(item => item.trim());
    const tamanhosCorrespondentes = size.filter(item => tamanhosNaString.includes(item.tamanho));
    console.log(tamanhosCorrespondentes);
    

    const imagem_select = imgs[index];

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        setSelectedImageFile(selectedFile);
        };

    function handdlSelectImg(numero : number){
        setIndex(numero)
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

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.grid_x6_left}>
                    <div className={styles.box_status_prom}>
                        <span> Status promocional </span>
                        <div>*Ativado<input type="checkbox"/></div>
                    </div>
                    <form>
                        <input placeholder="Nome ou modelo do produto"/>
                        <input placeholder="Codigo  do produto"/>
                        <input placeholder="R$ Valor unitario"/>
                        <input placeholder="R$ Valor de promoção"/>
                        <textarea className={styles.input_des_detalhada} placeholder="Descrição detalhada do produto"/>
                    </form>
                    <div className={styles.row_button_final}>
                        <Button
                            background_color="var(--corPrimaryButtons)"
                            color="aliceblue"
                            children="Salvar Produto"
                            width="35%"
                            height="50px"
                            border="none"
                            borderRadius="22px"
                            onClick={() => null}
                        />
                        <Button
                            background_color="var(--corSecundaryButtons)"
                            color="aliceblue"
                            children="Cancelar"
                            width="35%"
                            height="50px"
                            border="none"
                            borderRadius="22px"
                            onClick={() => null}
                        />
                    </div>            
                </div>
                <div className={styles.grid_x6_rigth}>
                    <div className={styles.box_add_image}>
                            
                            {imagePreviewURL ? (
                                <img className={styless.img} src={imagePreviewURL} alt="Imagem selecionada" />
                            ) : (
                                <span className={styless.icon}><AiFillFileAdd/></span>
                            )}
                    
                        <div className={styles.input}>
                            <div className={styles.arq}>
                                <span>*clique para abrir o diretório ou arraste e solte seus arquivos aqui!</span>
                                <input className={styless.input_img} type="file" accept="image/*"  onChange={handleImageChange}  />
                            </div>

                            <div className={styles.row_buttons}>
                                <Button
                                    background_color="var(--corPrimaryButtons)"
                                    color="aliceblue"
                                    children="Adicionar"
                                    width="35%"
                                    height="50px"
                                    border="none"
                                    borderRadius="22px"
                                    onClick={handleUpload}
                                />
                                <Button
                                    background_color="var(--corSecundaryButtons)"
                                    color="aliceblue"
                                    children="Salvar"
                                    width="35%"
                                    height="50px"
                                    border="none"
                                    borderRadius="22px"
                                    onClick={handleUpload}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.title_size}>
                        <h3>Tamanhos:</h3>
                    </div>
                    
                    <div className={styles.box_tamanhos}>
                        {size.map((item) => (
                            <div className={styles.card_tamanho}>{item.tamanho}</div>
                        ))}
                    </div>
                    <div className={styles.row_buttons_add_remo}>
                        <input placeholder="Digite o tamanmho" alt="Input para adicionar tamanho do item"/>
                        <div>
                            <Button
                                background_color="var(--corPrimaryButtons)"
                                color="aliceblue"
                                children="Remover"
                                width="40%"
                                height="50px"
                                border="none"
                                borderRadius="22px"
                                onClick={handleUpload}
                            />
                            <Button
                                background_color="var(--corSecundaryButtons)"
                                color="aliceblue"
                                children="Adicionar"
                                width="40%"
                                height="50px"
                                border="none"
                                borderRadius="22px"
                                onClick={handleUpload}
                            />
                        </div>
                    </div>
                    <div className={styles.row_images}>
                            {
                                imgs.map((item, i) => (
                                        <img src={item.link} alt="Imagem tenis jordans"/>
                                ))
                                }
                        </div>
                </div>
            </div>
        </Layout>
    
    )
}

                    {/*<div className={styles.box_img}>
                        <div className={styles.img_prod}>
                            <img  src={imagem_select.link} alt="Imagem tenis jordans"/>
                        </div>
                        <div className={styles.row}>
                            {
                                imgs.map((item, i) => (
                                    <button key={i} onClick={() => handdlSelectImg(i)} className={styles.box_img_preview}>
                                        <img src={item.link} alt="Imagem tenis jordans"/>
                                    </button>
                                ))
                                }
                        </div>
                    </div>
                    <div className={styles.d_prod}>
                        <div className={styles.content}>
                        <h3>ESTILO TRADICIONAL, CONFORTO PREMIUM DENTRO E FORA DA QUADRA</h3>
                            <p>
                            O Air Jordan 1 Mid oferece um estilo de quadra e um conforto
                            premium em um look icônico. As almofadas da unidade Air-Sole
                            atuam sobre a madeira, enquanto o cano acolchoado proporciona
                            uma sensação de suporte.    
                            </p>
                        </div>
                        
                            </div>*/}