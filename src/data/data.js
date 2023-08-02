const data = [
  {
    id: 1,
    category: "ხელსაწყოები",
    name: {
      ka: "კუთხსახეხი",
      en: "Angle grinder",
      ru: "Углошлифовальные",
    },
    img: "https://media.veli.store/media/product/GWS_9-125_4.jpg",
    dailyprice: "20",
    dsc: {
      ka: "სიმძლავრე: 2200 W ძაბვა: 220-240 V სიხშირე: 50-60 Hz ბრუნვის სიხშირე: 3000-11500 ბრ/წთ დისკის დიამეტრი: 230 მმ",
      en: "Superior cutting performance at 900 W due to high power and rotation speed",
      ru: "Углошлифовальная машина",
    },
  },
  {
    id: 2,
    category: "ხელსაწყოები",
    name: {
      ka: "ბურღი",
      en: "Combi Drill",
      ru: "Дрель",
    },
    img: "https://media.veli.store/media/product/Bosch_GSB_185-LI_Professional_Combi_drill_blue1up.png",
    dailyprice: "15",
    dsc: {
      ka: "მძლავრი, კომპაქტური და უსადენო ბურღი სახრახნისის ფუნქციით",
      en: "Next-level compactness with strong performance and brushless motor",
      ru: "Разница между дрелью и перфоратором в первую",
    },
  },
  {
    id: 3,
    category: "ხელსაწყოები",
    name: {
      ka: "ელექტრო ხერხი",
      en: "Corded Chainsaw",
      ru: "Электрическая пила",
    },
    img: "https://media.veli.store/media/product/Bosch_Keo_Corded_Chainsaw_Green1.jpg",
    dailyprice: "25",
    dsc: {
      ka: "შექმნილია მაქსიმალური შედეგისთვის მინიმალური ძალისხმევით",
      en: "Effortlessly cut branches up to 80 mm with the Swiss precision blade",
      ru: "Электрическая пила проводная купить по выгодной цене на АлиЭкпресс",
    },
  },
  {
    id: 4,
    category: "ხელსაწყოები",
    name: {
      ka: "ელექტრო ხერხი",
      en: "Chainsaw",
      ru: "Электрическая пила",
    },
    img: "https://holst.ge/data/files/articles_blog/eleqtro-kherkhi/79541.png",
    dailyprice: "24",
    dsc: {
      ka: "იდეალურია ტოტების დასაჭრელად და შეშის ან მორების მოსაჭრელად",
      en: "Side-oriented oil tank with tethered cap for easy refilling",
      ru: "Скидки, купоны, промокоды. Отзывы реальных покупателей",
    },
  },
  {
    id: 5,
    category: "ხელსაწყოები",
    name: {
      ka: "აქსესუარების ნაკრები",
      en: "Screwdriver Set",
      ru: "Наборы отверток",
    },
    img: "https://media.veli.store/media/product/%E1%83%90%E1%83%A5%E1%83%A1%E1%83%94%E1%83%A1%E1%83%A3%E1%83%90%E1%83%A0%E1%83%94%E1%83%91%E1%83%98%E1%83%A1_%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98_Bosch_Screwdriver_Set_46_pcs_1.png",
    dailyprice: "17",
    dsc: {
      ka: "12 ბუდე-გასაღები ექვსკუთხა ხრახნებისთვის 3/16, 1/4, 5/16, 11/32, 3/8, 7/16, 6, 7, 8, 10, 11, 13 მმ",
      en: "Universal magnetic holder",
      ru: "Наборы прямых отверток в интернет магазине OZON ",
    },
  },
  {
    id: 6,
    category: "ხელსაწყოები",
    name: {
      ka: "კუთხსახეხი",
      en: "Angle grinder",
      ru: "Углошлифовальные",
    },
    img: "https://media.veli.store/media/product/Dewalt_DWE4157_Angle_Grinder_Yellow_1.jpg",
    dailyprice: "22",
    dsc: {
      ka: "900 W სიმძლავრის მქონე ძლიერი და სწრაფი კუთხსახეხი",
      en: "Superior cutting performance at 900 W due to high power and rotation speed",
      ru: "Углошлифовальная машина",
    },
  },
  {
    id: 7,
    category: "ხელსაწყოები",
    name: {
      ka: "ბურღი",
      en: "Combi Drill",
      ru: "Дрель",
    },
    img: "https://media.veli.store/media/product/Dewalt_DWD014S_Drill_Yellow.png",
    dailyprice: "9",
    dsc: {
      ka: "კომპაქტური დიზაინის მქონე ბურღი",
      en: "A drill with a compact design",
      ru: "Многофункциональный. Нескользящий. Ми.",
    },
  },
  {
    id: 8,
    category: "ხელსაწყოები",
    name: {
      ka: "მაღალი წნევის აპარატი",
      en: "Pressure Washer",
      ru: "Мойки высокого давления",
    },
    img: "https://media.veli.store/media/product/Karcher_K_4_Power_Control_Pressure_Washer_Yellow.png",
    dailyprice: "40",
    dsc: {
      ka: "მაღალი წნევით რეცხვის აპარატი წყლით გაგრილებადი ძრავით",
      en: "High pressure washer with water-cooled motor",
      ru: "Аппарат высокого давления K 7 Power",
    },
  },
  {
    id: 9,
    category: "ხელსაწყოები",
    name: {
      ka: "ჰაერის საქშენი",
      en: "Leaf Blower",
      ru: "Воздуходувки",
    },
    img: "https://media.veli.store/media/product/4054278459899.jpg",
    dailyprice: "20",
    dsc: {
      ka: "პრაქტიკული ხელსაწყო ეზოს დალაგებისთვის",
      en: "A practical tool for tidying up the yard",
      ru: "Выгодные цены на товары каталога Воздуходувки ",
    },
  },
];

export default data;
