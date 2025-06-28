const courses = {
  ru: [
    {
      id: 1,
      title: { ru: "General English", en: "General English", uz: "General English" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 2,
      title: { ru: "IT English", en: "IT English", uz: "IT English" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "699 000",
      monthly: "58 300"
    },
    {
      id: 3,
      title: { ru: "Подготовка к IELTS", en: "IELTS Preparation", uz: "IELTS tayyorlov" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 4 месяцев", en: "from 4 months", uz: "4 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "599 000",
      monthly: "49 900"
    },
    {
      id: 4,
      title: { ru: "Японский (базовый)", en: "Japanese (basic)", uz: "Yapon tili (boshlang‘ich)" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 5,
      title: { ru: "General English (Индивидуальный)", en: "General English (Individual)", uz: "General English (Individual)" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "799 000",
      monthly: "66 600"
    },
    {
      id: 6,
      title: { ru: "Китайский для начинающих", en: "Chinese for beginners", uz: "Yangi boshlovchilar uchun xitoy tili" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "599 000",
      monthly: "49 900"
    }
  ],
  en: [
    {
      id: 1,
      title: { ru: "General English", en: "General English", uz: "General English" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 2,
      title: { ru: "", en: "IT English", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "699 000",
      monthly: "58 300"
    },
    {
      id: 3,
      title: { ru: "", en: "IELTS Preparation", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 4 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "599 000",
      monthly: "49 900"
    },
    {
      id: 4,
      title: { ru: "", en: "Japanese (basic)", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 5,
      title: { ru: "", en: "General English (Individual)", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "799 000",
      monthly: "66 600"
    },
    {
      id: 6,
      title: { ru: "", en: "Chinese for beginners", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "599 000",
      monthly: "49 900"
    }
  ],
  uz: [
    {
      id: 1,
      title: { ru: "", en: "", uz: "General English" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 2,
      title: { ru: "", en: "", uz: "IT English" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "699 000",
      monthly: "58 300"
    },
    {
      id: 3,
      title: { ru: "", en: "", uz: "IELTS tayyorlov" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "4 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "599 000",
      monthly: "49 900"
    },
    {
      id: 4,
      title: { ru: "", en: "", uz: "Yapon tili (boshlang‘ich)" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 5,
      title: { ru: "", en: "", uz: "General English (Individual)" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "799 000",
      monthly: "66 600"
    },
    {
      id: 6,
      title: { ru: "", en: "", uz: "Yangi boshlovchilar uchun xitoy tili" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "599 000",
      monthly: "49 900"
    },
    {
      id: 7,
      title: { ru: "", en: "", uz: "Yangi boshlovchilar uchun xitoy tili" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "599 000",
      monthly: "49 900"
    }
  ]
};

export default courses;
