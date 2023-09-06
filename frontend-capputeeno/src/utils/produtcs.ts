export function formatPrice(value: number) {
  const formattedValue = value / 100;

  const price = formattedValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return price;
}
