import macacoImg from "@/assets/kids/macaco.png"
import baiacuImg from "@/assets/kids/baiacu.png"
import morcegoImg from "@/assets/kids/morcego.png"
import pinguimImg from "@/assets/kids/pinguim.png"

const kids = [
    {
      id: 1,
      title: 'Consumismo',
      subtitle: 'Privacidade na Internet',
      description: 'Assista o vídeo e logo após jogue',
      url: baiacuImg,
      alt: 'Menina branca com cabelo marrom, com lenço amarelo na cabeça, camisa vermelha, saia azul, tenis vermelho segurando um smartphone',
      done: false,
      iframeUrl: [
        {url: 'https://www.youtube.com/embed/IRYbq9EMyNM', title: 'Vídeo'},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
      ],
      colorButton: '#6a4c93'
    },
    {
      id: 2,
      title: 'Malware',
      subtitle: 'Segurança na Internet',
      description: 'Assista o vídeo e logo após jogue',
      url: morcegoImg,
      alt: 'Menina branca com cabelo preto, com capacete de metal e dois chifres brancos na cabeça, camisa marrom escuro, calça preta, botas marrom escura, segurando uma espada e escudo',
      done: false,
      iframeUrl: [
        {url: 'https://www.youtube.com/embed/SoIpR-kbRcA', title: 'Vídeo'},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/c87e7039d8aa41e3bc504a5d45952a11?themeId=48&templateId=22&fontStackId=0', title: 'Jogo'},
      ],
      colorButton: '#ffca3a'
    },
    {
      id: 3,
      title: 'Informações',
      subtitle: 'Consumismo na Internet',
      description: 'Assista o vídeo e logo após jogue',
      url: pinguimImg,
      alt: 'Menino branco com cabelo preto, camisa amarelo limão, short azul, tenis azul segurando dinheiro',
      done: false,
      iframeUrl: [
        {url: 'https://www.youtube.com/embed/IRYbq9EMyNM', title: 'Vídeo'},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
      ],
      colorButton: '#8ac926'
    },    
    {
      id: 4,
      title: 'Configurações',
      subtitle: 'Consumismo na Internet',
      description: 'Assista o vídeo e logo após jogue',
      url: macacoImg,
      alt: 'Menino branco com cabelo preto, camisa amarelo limão, short azul, tenis azul segurando dinheiro',
      done: false,
      iframeUrl: [
        {url: 'https://www.youtube.com/embed/IRYbq9EMyNM', title: 'Vídeo'},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
      ],
      colorButton: '#1982c4'
    },
  ]

export default kids