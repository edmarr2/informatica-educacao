import macacoImg from "@/assets/kids/macaco.png"
import baiacuImg from "@/assets/kids/baiacu.png"
import morcegoImg from "@/assets/kids/morcego.png"
import pinguimImg from "@/assets/kids/pinguim.png"

const kids = [
    {
      id: 1,
      title: 'Consumismo',
      description: 'Assista o vídeo e logo após jogue',
      url: morcegoImg,
      alt: 'Morcego',
      active: true,
      showButton: false,
      timeVideo: 150000,
      iframeUrl: [
        {url: 'https://scratch.mit.edu/projects/746922921/embed', title: 'Consumismo', isOpen: false},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/f32ddd7970914da3b7d875654cc27316?themeId=21&templateId=69&fontStackId=0', title: 'Jogo'}
        
      ],
      colorButton: '#6a4c93'
    },
    {
      id: 2,
      title: 'Malware',
      description: 'Assista o vídeo e logo após jogue',
      url: baiacuImg,
      alt: 'Baiacu - Peixe que simboliza Malware',
      active: false,
      showButton: false,
      timeVideo: 133000,
      iframeUrl: [
        {url: 'https://scratch.mit.edu/projects/737029095/embed', title: 'Malware', isOpen: false},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/d3565ff647c24eb387f9ef48777c0324?themeId=21&templateId=30&fontStackId=0', title: 'Jogo'},
      ],
      colorButton: '#ffca3a'
    },  
    {
      id: 3,
      title: 'Informações',
      description: 'Assista o vídeo e logo após jogue',
      url: pinguimImg,
      alt: 'Pinguim',
      active: false,
      showButton: false,
      timeVideo: 90000,
      iframeUrl: [
        {url: 'https://scratch.mit.edu/projects/733028265/embed', title: 'Informações', isOpen: false},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/742f89c788a946cc97ec46d36006702f?themeId=23&templateId=49&fontStackId=0', title: 'Quiz de TV'},
      ],
      colorButton: '#1982c4'
    },
    {
      id: 4,
      title: 'Configurações',
      description: 'Assista o vídeo e logo após jogue',
      url: macacoImg,
      alt: 'Macaco',
      active: false,
      showButton: false,
      timeVideo: 83000,
      iframeUrl: [
        {url: 'https://scratch.mit.edu/projects/750566691/embed', title: 'Configurações', isOpen: false},
      ],
      games: [
        {url: 'https://wordwall.net/pt/embed/9baa742eb9954e67942c16572e3d3a14?themeId=22&templateId=71&fontStackId=0', title: 'Quiz de TV'},
      ],
      colorButton: '#1982c4'
    },
  ]

export default kids