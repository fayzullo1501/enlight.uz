const professions = {
  ru: [
    {
      id: 1,
      title: { ru: "Бухгалтер", en: "Accountant", uz: "Buxgalter" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 2,
      title: { ru: "Дизайнер интерьера", en: "Interior Designer", uz: "Interyer dizayneri" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "699 000",
      monthly: "58 300"
    },
    {
      id: 3,
      title: { ru: "Frontend-разработчик", en: "Frontend Developer", uz: "Frontend dasturchi" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "599 000",
      monthly: "49 900"
    },
    {
      id: 4,
      title: { ru: "Интернет-маркетолог", en: "Internet Marketer", uz: "Internet marketolog" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 5,
      title: { ru: "HR-менеджер", en: "HR Manager", uz: "HR menejer" },
      lang: { ru: "Русский, Узбекский", en: "Russian, Uzbek", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "от 3 месяцев", en: "from 3 months", uz: "3 oydan boshlab" },
      format: { ru: "Онлайн", en: "Online", uz: "Online" },
      price: "799 000",
      monthly: "66 600"
    },
    {
      id: 6,
      title: { ru: "Project Manager", en: "Project Manager", uz: "Loyiha menejeri" },
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
      title: { ru: "", en: "Accountant", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 2,
      title: { ru: "", en: "Interior Designer", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "699 000",
      monthly: "58 300"
    },
    {
      id: 3,
      title: { ru: "", en: "Frontend Developer", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "599 000",
      monthly: "49 900"
    },
    {
      id: 4,
      title: { ru: "", en: "Internet Marketer", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 5,
      title: { ru: "", en: "HR Manager", uz: "" },
      lang: { ru: "", en: "Russian, Uzbek", uz: "" },
      duration: { ru: "", en: "from 3 months", uz: "" },
      format: { ru: "", en: "Online", uz: "" },
      price: "799 000",
      monthly: "66 600"
    },
    {
      id: 6,
      title: { ru: "", en: "Project Manager", uz: "" },
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
      title: { ru: "", en: "", uz: "Buxgalter" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 2,
      title: { ru: "", en: "", uz: "Interyer dizayneri" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "699 000",
      monthly: "58 300"
    },
    {
      id: 3,
      title: { ru: "", en: "", uz: "Frontend dasturchi" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "599 000",
      monthly: "49 900"
    },
    {
      id: 4,
      title: { ru: "", en: "", uz: "Internet marketolog" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "499 000",
      monthly: "41 600"
    },
    {
      id: 5,
      title: { ru: "", en: "", uz: "HR menejer" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "799 000",
      monthly: "66 600"
    },
    {
      id: 6,
      title: { ru: "", en: "", uz: "Loyiha menejeri" },
      lang: { ru: "", en: "", uz: "Ruscha, O‘zbekcha" },
      duration: { ru: "", en: "", uz: "3 oydan boshlab" },
      format: { ru: "", en: "", uz: "Online" },
      price: "599 000",
      monthly: "49 900"
    }
  ]
};

export default professions;
