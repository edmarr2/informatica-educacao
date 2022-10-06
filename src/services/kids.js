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
      active: true,
      showButton: false,
      iframeUrl: [
        {url: 'https://scratch.mit.edu/projects/733168337/embed', title: 'Privacidade', isOpen: false},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/70261737ebd44866b82ad1c4538246cf?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'}
        
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
      active: false,
      showButton: false,
      iframeUrl: [
        {url: 'https://scratch.mit.edu/projects/736661969/embed', title: 'Segurança', isOpen: false},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/1d863d34cd5e4b1eb6f24afc04463e31?themeId=22&templateId=45&fontStackId=0', title: 'Jogo'},
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
      active: false,
      showButton: false,
      iframeUrl: [
        {url: 'https://scratch.mit.edu/projects/733028265/embed', title: 'Consumismo', isOpen: false},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/0b76cc2779d545cf95582a058fa31298?themeId=23&templateId=49&fontStackId=0', title: 'Jogo'},
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
      active: false,
      showButton: false,
      iframeUrl: [
        {url: 'https://wordwall.net/pt/embed/0b76cc2779d545cf95582a058fa31298?themeId=23&templateId=49&fontStackId=0', title: 'Configurações', isOpen: false},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/e7eb10b24ccc4035bd87bbf42282938a?themeId=46&templateId=48&fontStackId=0', title: 'Jogo'},
      ],
      colorButton: '#1982c4'
    },
  ]

export default kids