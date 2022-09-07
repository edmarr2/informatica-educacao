import privacidadeImg from "@/assets/kids/using-phone-girl.webp"
import segurancaImg from "@/assets/kids/seguranca.png"
import consumismoImg from "@/assets/kids/buy.jpg"

const kids = [
    {
      id: 1,
      title: 'Privacidade',
      subtitle: 'Privacidade na Internet',
      description: 'Assista o vídeo e logo após jogue',
      url: privacidadeImg,
      alt: 'Menina branca com cabelo marrom, com lenço amarelo na cabeça, camisa vermelha, saia azul, tenis vermelho segurando um smartphone',
      done: false,
      iframeUrl: [
        {url: 'https://www.youtube.com/embed/IRYbq9EMyNM', title: 'Vídeo'},
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
      ]
    },
    {
      id: 2,
      title: 'Segurança',
      subtitle: 'Segurança na Internet',
      description: 'Assista o vídeo e logo após jogue',
      url: segurancaImg,
      alt: 'Menina branca com cabelo preto, com capacete de metal e dois chifres brancos na cabeça, camisa marrom escuro, calça preta, botas marrom escura, segurando uma espada e escudo',
      done: false,
      iframeUrl: [
        {url: 'https://www.youtube.com/embed/IRYbq9EMyNM', title: 'Vídeo'},
        {url: 'https://wordwall.net/pt/embed/c87e7039d8aa41e3bc504a5d45952a11?themeId=48&templateId=22&fontStackId=0', title: 'Jogo'},
      ]
    },
    {
      id: 3,
      title: 'Consumismo',
      subtitle: 'Consumismo na Internet',
      description: 'Assista o vídeo e logo após jogue',
      url: consumismoImg,
      alt: 'Menino branco com cabelo preto, camisa amarelo limão, short azul, tenis azul segurando dinheiro',
      done: false,
      iframeUrl: [
        {url: 'https://www.youtube.com/embed/IRYbq9EMyNM', title: 'Vídeo'},
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
      ]
    }
  ]

export default kids