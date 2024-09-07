    let dados = [
        {
            Título: "Spitz Alemão",
            Característica: "Pelagem espessa e dupla, com uma variedade de cores. Corpo robusto e olhos expressivos. O tamanho pode variar, desde o Spitz Anão até o Spitz Grande.  Spitz Alemão é um cão companheiro, leal e cheio de personalidade. Sua aparência distinta e seu temperamento alegre o tornam uma ótima escolha para quem busca um cão ativo e inteligente.",
            Saúde: "Geralmente são cães saudáveis, mas como qualquer raça, podem ter predisposição a algumas doenças como luxação de patela e problemas dentários.",
            Cuidados: "Requerem escovação regular da pelagem para evitar nós e manter a higiene. A socialização desde cedo é fundamental para que se tornem cães equilibrados.",
            ExpectativaDeVida: "Expectativa de vida: 12 a 14 anos",
            image: "https://img.freepik.com/fotos-gratis/um-retrato-adoravel-de-um-cao-pomeraniano_23-2151771712.jpg",
            tags: "spitz, pelagem espessa, cão ativo, inteligente, companheiro"
        },
        {
            Título: "Shih Tzu",
            Característica: "Pequeno, com pelagem longa e sedosa. Personalidade alegre, adaptável e companheira. Conhecido por sua expressão facial doce e olhos grandes.",
            Saúde: "Propensão a problemas oculares (como catarata e entropion), problemas dentários e respiratórios devido à estrutura facial achatada.",
            Cuidados: "Requer escovação diária da pelagem para evitar nós. Cuidados com os olhos e ouvidos são essenciais. A socialização precoce é importante para evitar problemas comportamentais.",
            ExpectativaDeVida: "Expectativa de vida: 10 a 16 anos",
            image: "https://img.freepik.com/fotos-premium/um-cao-com-uma-lingua-rosa-saindo-esta-sentado-em-um-fundo-azul_1011888-11474.jpg",
            tags: "shih tzu, pelagem longa, cão de apartamento, doce, adaptável"
        },
        {
            Título: "Pug",
            Característica: "Raça brachycefálica (focinho achatado) com corpo robusto e musculoso. Pelagem curta e lisa, em cores como preto, prata e fardado. Conhecidos por suas rugas faciais e personalidade charmosa e brincalhona.",
            Saúde: "Propensão a problemas respiratórios (dificuldade em respirar), obesidade, problemas oculares (como ceratoconjuntivite seca) e problemas de pele nas dobras faciais.",
            Cuidados: "Requerem cuidados especiais com a pele e as dobras faciais, além de atenção à alimentação para evitar a obesidade. Devido à estrutura facial, atividades físicas devem ser moderadas e em horários frescos.",
            ExpectativaDeVida: "Expectativa de vida: 12 a 15 anos",
            image: "https://img.freepik.com/fotos-gratis/cao-pug-isolado-em-um-fundo-branco_2829-11416.jpg",
            tags: "pug, brachycefálico, focinho achatado, brincalhão, charmoso"
        },
        {
            Título: "Yorkshire Terrier",
            Característica: "Pequeno porte, com pelagem longa e sedosa, geralmente azul-aço e castanho. Personalidade vivaz, inteligente e leal. Apesar do tamanho, possuem grande energia e são excelentes companheiros.",
            Saúde: "Propensão a problemas dentários, luxação de patela e problemas oculares. A pelagem longa pode acumular sujeira e requer cuidados específicos.",
            Cuidados: "Requer escovação diária da pelagem para evitar nós e manter a higiene. Unhas devem ser aparadas regularmente. Socialização precoce é fundamental.",
            ExpectativaDeVida: "Expectativa de vida: 13 a 16 anos",
            image: "https://img.freepik.com/fotos-gratis/retrato-em-close-up-do-cao-de-yorkshire_23-2151779211.jpg",
            tags: "yorkshire, terrier, pelagem longa, pequeno porte, vivaz"
        },
        {
            Título: "Cavalier King Charles Spaniel",
            Característica: "Pequeno porte, com pelagem longa e sedosa, em diversas cores. Personalidade doce, afetuosa e adaptável. Conhecidos por seus olhos grandes e expressivos.",
            Saúde: "Propensão a problemas cardíacos (síndrome da válvula mitral), problemas oculares (como catarata) e problemas nas articulações (como luxação de patela).",
            Cuidados: "Requer escovação regular da pelagem para evitar nós. Cuidados com os olhos e ouvidos são essenciais. Socialização precoce é importante.",
            ExpectativaDeVida: "Expectativa de vida: 12 a 14 anos",
            image: "https://img.freepik.com/fotos-gratis/belo-retrato-de-cachorro-spaniel-de-brinquedo-ingles_23-2149152050.jpg",
            tags: "cavalier, spaniel, cão de colo, afetuoso, olhos grandes"
        },
        {
            Título: "Chihuahua",
            Característica: "Pequeno porte, com corpo compacto e pelagem que pode ser curta ou longa. Personalidade forte, corajosa e alerta. Apesar do tamanho, podem ser bastante independentes.",
            Saúde: "Propensão a problemas dentários, luxação de patela e problemas cardíacos. A raça pode ser dividida em duas variedades: de pelo curto e de pelo longo.",
            Cuidados: "Requer escovação regular da pelagem (principalmente nas variedades de pelo longo). Unhas devem ser aparadas regularmente. Socialização precoce é fundamental para evitar problemas comportamentais.",
            ExpectativaDeVida: "Expectativa de vida: 14 a 18 anos",
            image: "https://img.freepik.com/fotos-gratis/vista-do-adoravel-cachorro-chihuahua-em-casa_23-2149880098.jpg",
            tags: "chihuahua, pequeno porte, independente, alerta, corajoso"
        },
        {
            Título: "Pinscher",
            Característica: "Pequeno porte, com corpo musculoso e elegante. Pelagem curta e lisa, em cores como preto e castanho. Personalidade alerta, corajosa e inteligente. São excelentes cães de guarda e companhia.",
            Saúde: "Propensão a problemas dentários, luxação de patela e problemas cardíacos. A raça pode ser dividida em duas variedades: Pinscher Miniatura e Pinscher Alemão.",
            Cuidados: "Requer escovação regular da pelagem para remover pelos soltos. Unhas devem ser aparadas regularmente. Socialização precoce é fundamental para evitar problemas comportamentais.",
            ExpectativaDeVida: "Expectativa de vida: 12 a 16 anos",
            image: "https://img.freepik.com/psd-gratuitas/retrato-de-cachorro-fofo-isolado_23-2150193852.jpg",
            tags: "pinscher, musculoso, elegante, cão de guarda, inteligente"
        }
    ];

