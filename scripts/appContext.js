import { createContext, useState, useEffect } from "react"

export const AppContext = createContext()
export const AppProvider = ({children}) => {
    const [pedido, setPedido] = useState(0)
    const [carrinho, setCarrinho] = useState(0)
    const [cardapio, setCardapio] = useState([
        {
            id: '1',
            nome: 'Camarão a Milanesa',
            provedor: 'Bokas',
            valor: 100,
            quantidade: 0,
            imagem: 'https://www.receitasagora.com.br/wp-content/uploads/2020/07/receita-de-camarao-a-milanesa.jpg',
            descricao: '500 gr de Camarão Arroz, batata frita, salada e maionese. Serve de 1 a 2 pessoas.'
        },
        {
            id: '2',
            nome: 'Bolinho de Siri',
            provedor: 'Ilha da Magia',
            valor: 14.90,
            quantidade: 0,
            imagem: 'https://anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-4459-a4fd30fe279526ce8543b1dd271bc968.png',
            descricao: 'Bolinho de Siri'
        },
        {
            id: '3',
            nome: 'Hermano Burger',
            provedor: 'Fet Meat Burger',
            valor: 43.90,
            quantidade: 0,
            imagem: 'https://www.goomer.app/webmenu/fat-meat-burger/product/5519875/picture/medium/240916161436',
            descricao: 'Inspirado nos tão famosos choripans argentinos! Pão brioche macio e tostado, 2 smashs de 90g (blend  carne bovina 100% angus e linguiça Blumenau), american cheese feito na casa, mayonese de chimichurri, bacon crispy, rúcula e tomate tostado. Aproveite essa explosão de sabores!'
        },
        {
            id: '4',
            nome: 'Sushi',
            provedor: 'Hamei Sushi',
            valor: 99.99,
            quantidade: 0,
            imagem: 'https://sacasadosushi.com.br/wp-content/uploads/2022/02/affbe9cb-sushi-em-goiania-capa.jpeg',
            descricao: 'Rodízio de Sushi'
        },
        {
            id: '5',
            nome: 'Pastel de Calabresa',
            provedor: 'Divino Recheio',
            valor: 25.90,
            quantidade: 0,
            imagem: 'https://storage.googleapis.com/domain-images/838d0c70-69bd-4ebc-bfd7-57ba2a4ddf9d/products/gallery_5de42df7-6c20-42ed-b249-36adcec1ae68.jpg',
            descricao: 'Pastel de Calabresa, mussarela e cebola.'
        },
    ]);

    const alterarQuantidade = (id, tipo) => {
        setCardapio(prevCardapio => {
            const updatedCardapio = prevCardapio.map(item => {
                if (item.id === id) {
                    const novaQuantidade = tipo === 'incrementar' ? item.quantidade + 1 : item.quantidade > 0 ? item.quantidade - 1 : 0;
                    return { ...item, quantidade: novaQuantidade };
                }
                return item;
            });
            const totalItens = updatedCardapio.reduce((total, item) => total + item.quantidade, 0);
            setCarrinho(totalItens);
            return updatedCardapio;
        });
    }
    const cardapioFiltrado = () =>{
        const cardapioF = cardapio.filter(item => item.quantidade > 0)
        return cardapioF
    }
    useEffect(() => {

        const totalValor = cardapio.reduce((totalV, item) => totalV + (item.valor * item.quantidade), 0);
        setPedido(totalValor);
    }, [cardapio]);

       

    return (
        <AppContext.Provider value={{cardapio, setCardapio, carrinho, setCarrinho, alterarQuantidade, cardapioFiltrado, pedido, setPedido}}>
            {children}
        </AppContext.Provider>
    )
}