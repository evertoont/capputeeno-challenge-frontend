export const formatPrice = (value: number) => {
  const formattedValue = value / 100;

  const price = formattedValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return price;
};

export const translateCategory = (category: string) => {
  const categoryMap: Record<string, string> = {
    mugs: "Caneca",
    "t-shirts": "Camiseta",
  };

  return categoryMap[category];
};

export const AlternativeLinks = [
  {
    label: "Ajuda",
    link: "#",
  },
  {
    label: "Reembolsos",
    link: "#",
  },
  {
    label: "Entregas e frete",
    link: "#",
  },
  {
    label: "Trocas e devoluções",
    link: "#",
  },
];
