import { Divider } from "@/app/styles";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardInfo,
  ProductCardName,
  ProductCardPrice,
} from "./styles";
import { formatPrice } from "@/utils/produtcs";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

export function ProductCard(props: ProductCardProps) {
  const { image, name, price } = props;

  const priceFormatted = formatPrice(price);

  return (
    <ProductCardContainer>
      <ProductCardImage src={image} alt={name} />
      <ProductCardInfo>
        <ProductCardName>{name}</ProductCardName>
        <Divider />
        <ProductCardPrice>{priceFormatted}</ProductCardPrice>
      </ProductCardInfo>
    </ProductCardContainer>
  );
}
