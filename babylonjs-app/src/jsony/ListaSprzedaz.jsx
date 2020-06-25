

const ListaSprzedaz = [
    {
      id: "p1",
      autor: "jan jan",
      img: "https://i.pinimg.com/originals/71/a4/e5/71a4e53bbc71c863e1ae47d896012e02.jpg",
      plname: "Plakat1",
      enname: "Poster1",
      pldescription: "w, zestaw ręczników, mydło, humidifier, centralne ogrzewanie, pralkę, płytę grzewczą, zmywarkę, czajnik, ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: " a hair dryer, a set of towels, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "123 ",
      status: "Kup"
    },
    {
      id: "p2",
      autor: "flip sad ",
      img: "data:image/png;base64,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",
      plname: "Plakat2",
      enname: "Poster1",
      pldescription: "Kompletnie wes do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "A fully equiilter coffee maker, microwave, tableware",
      cena: "1233 ",
      status: "Sprzedano"
    },
    {
      id: "p3",
      autor: "sadas pioewqewqtr",
      img: "https://dydopostergallery.com/modules/jmsblog/views/img/thumb_58f3492d9d6bc203b3a2465f389383b7.jpg",
      plname: "sdf sdfs",
      enname: "Poster1",
      pldescription: "Kompldo włosów, ze ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "A fulll find: a hatle, filter coffee maker, microwave, tableware",
      cena: "1123 ",
      status: "Kup"
    },
    {
      id: "p4",autor: "jan jan",
      img: "https://nascenie.info/wp-content/uploads/2020/01/IMG-6166.jpg",
      plname: "Plakat3",
      enname: "Poster1",
      pldescription: "Kompliówkę, zastawę",
      endescription: "A fulttableware",
      cena: "5123 ",
      status: "Kup"
    },
    {
      id: "p5",autor: "jan jan",
      img: "https://i.pinimg.com/originals/71/a4/e5/71a4e53bbc71c863e1ae47d896012e02.jpg",
      plname: "Plakat4",
      enname: "Poster1",
      pldescription: "Komplemienicy, okna w mieszkaniu są skierowane na Rynek Główny. W miszkaniu znajdziecie Państwo: suszarke do włosów, zestaw ręczników, mydło, humidifier, centralne ogrzewanie, pralkę, płytę grzewczą, zmywarkę, czajnik, ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "A fullthe tenement house, the windows in the apartment are facing the Main Square. In the apartment you will find: a hair dryer, a set of towels, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "1263 ",
      status: "Kup"
    },
    {
      id: "p6",autor: "jan jan",
      img: "https://dydopostergallery.com/modules/jmsblog/views/img/thumb_58f3492d9d6bc203b3a2465f389383b7.jpg",
      plname: "Plakat1",
      enname: "Poster1",
      pldescription: "Kompletnie wyposażony apartament z kuchnią i łazienką o pwierzchni 80m2. Apartament zlokalizowany jest na trzecim piętrze kamienicy, okna w mieszkaniu są skierowane na Rynek Główny. W miszkaniu znajdziecie Państwo: suszarke do włosów, zestaw ręczników, mydło, humidifier, centralne ogrzewanie, pralkę, płytę grzewczą, zmywarkę, czajnik, ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "A fully equipped apartment with kitchen and bathroom with an area of ​​80m2. The apartment is located on the third floor of the tenement house, the windows in the apartment are facing the Main Square. In the apartment you will find: a hair dryer, a set of towels, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "1273 ",
      status: "Kup"
    },
    {
      id: "p7",autor: "jan jan",
      img: "https://dydopostergallery.com/modules/jmsblog/views/img/thumb_58f3492d9d6bc203b3a2465f389383b7.jpg",
      plname: "Plakat1",
      enname: "Poster1",
      pldescription: "m umidifier, centralne ogrzewanie, pralkę, płytę grzewczą, zmywarkę, czajnik, ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "rds, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "1238 ",
      status: "Kup"
    },
    {
      id: "p8",autor: "jan jan",
      img: "https://dydopostergallery.com/modules/jmsblog/views/img/thumb_58f3492d9d6bc203b3a2465f389383b7.jpg",
      plname: "Plakat1",
      enname: "Poster1",
      pldescription: "Kecie Pańskspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "Acated on a hair dryer, a set of towels, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "1723 ",
      status: "Kup"
    },
    {
      id: "p9",autor: "jan jan",
      img: "https://dydopostergallery.com/modules/jmsblog/views/img/thumb_58f3492d9d6bc203b3a2465f389383b7.jpg",
      plname: "Plakat1",
      enname: "Poster1",
      pldescription: "Kompletnie wyposażony apartament z kuchnią i łazienką o pwierzchni 80m2. Apartament zlokalizowany jest na trzecim piętrze kamienicy, okna w mieszkaniu są skierowane na Rynek Główny. W miszkaniu znajdziecie Państwo: suszarke do włosów, zestaw ręczników, mydło, humidifier, centralne ogrzewanie, pralkę, płytę grzewczą, zmywarkę, czajnik, ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "A fully equipped apartment with kitchen and bathroom with an area of ​​80m2. The apartment is located on the third floor of the tenement house, the windows in the apartment are facing the Main Square. In the apartment you will find: a hair dryer, a set of towels, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "123 ",
      status: "Kup"
    },
    {
      id: "p10",autor: "jan jan",
      img: "https://dydopostergallery.com/modules/jmsblog/views/img/thumb_58f3492d9d6bc203b3a2465f389383b7.jpg",
      plname: "Plakat1",
      enname: "Poster1",
      pldescription: "Kompletnie wyposażony apartament z kuchnią i łazienką o pwierzchni 80m2. Apartament zlokalizowany jest na trzecim piętrze kamienicy, okna w mieszkaniu są skierowane na Rynek Główny. W miszkaniu znajdziecie Państwo: suszarke do włosów, zestaw ręczników, mydło, humidifier, centralne ogrzewanie, pralkę, płytę grzewczą, zmywarkę, czajnik, ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "A fully equipped apartment with kitchen and bathroom with an area of ​​80m2. The apartment is located on the third floor of the tenement house, the windows in the apartment are facing the Main Square. In the apartment you will find: a hair dryer, a set of towels, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "123 ",
      status: "Kup"
    },
    {
      id: "p11",autor: "jan jan",
      img: "https://dydopostergallery.com/modules/jmsblog/views/img/thumb_58f3492d9d6bc203b3a2465f389383b7.jpg",
      plname: "Plakat1",
      enname: "Poster1",
      pldescription: "Kompletnie wyposażony apartament z kuchnią i łazienką o pwierzchni 80m2. Apartament zlokalizowany jest na trzecim piętrze kamienicy, okna w mieszkaniu są skierowane na Rynek Główny. W miszkaniu znajdziecie Państwo: suszarke do włosów, zestaw ręczników, mydło, humidifier, centralne ogrzewanie, pralkę, płytę grzewczą, zmywarkę, czajnik, ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "A fully equipped apartment with kitchen and bathroom with an area of ​​80m2. The apartment is located on the third floor of the tenement house, the windows in the apartment are facing the Main Square. In the apartment you will find: a hair dryer, a set of towels, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "123 ",
      status: "Kup"
    },
    {
      id: "p12",autor: "jan jan",
      img: "https://dydopostergallery.com/modules/jmsblog/views/img/thumb_58f3492d9d6bc203b3a2465f389383b7.jpg",
      plname: "Plakat1",
      enname: "Poster1",
      pldescription: "Kompletnie wyposażony apartament z kuchnią i łazienką o pwierzchni 80m2. Apartament zlokalizowany jest na trzecim piętrze kamienicy, okna w mieszkaniu są skierowane na Rynek Główny. W miszkaniu znajdziecie Państwo: suszarke do włosów, zestaw ręczników, mydło, humidifier, centralne ogrzewanie, pralkę, płytę grzewczą, zmywarkę, czajnik, ekspres do kawy przelewowy, mikrofalówkę, zastawę",
      endescription: "A fully equipped apartment with kitchen and bathroom with an area of ​​80m2. The apartment is located on the third floor of the tenement house, the windows in the apartment are facing the Main Square. In the apartment you will find: a hair dryer, a set of towels, soap, humidifier, central heating, washing machine, hob, dishwasher, kettle, filter coffee maker, microwave, tableware",
      cena: "123 ",
      status: "Sprzedano"
    },
  
    
  ]
  export default ListaSprzedaz