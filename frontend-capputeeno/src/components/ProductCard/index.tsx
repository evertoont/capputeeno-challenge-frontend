import { Divider } from "@/app/styles";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardInfo,
  ProductCardName,
  ProductCardPrice,
} from "./styles";
import { formatPrice } from "@/utils/produtcs";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

export function ProductCard(props: ProductCardProps) {
  const { image, name, price, id } = props;
  const router = useRouter();

  const priceFormatted = formatPrice(price);

  const handleGoToProduct = () => {
    router.push(`/product?id=${id}`);
  };

  return (
    <ProductCardContainer onClick={handleGoToProduct}>
      <ProductCardImage src={image} alt={name} />
      <ProductCardInfo>
        <ProductCardName>{name}</ProductCardName>
        <Divider />
        <ProductCardPrice>{priceFormatted}</ProductCardPrice>
      </ProductCardInfo>
    </ProductCardContainer>
  );
}
