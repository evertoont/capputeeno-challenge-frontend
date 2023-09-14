import { ProductInCart } from "@/types/products";
import {
  CartItemContainer,
  ProductDeleteButton,
  ProductImage,
  ProductInfoContainer,
  ProductInfoDescription,
  ProductInfoFooter,
  ProductInfoHeader,
  ProductInfoPrice,
  ProductInfoTitle,
} from "./styles";
import { DeleteIcon } from "../icons/delete";
import { formatPrice } from "@/utils/produtcs";

interface CartItemProps {
  productInfo: ProductInCart;
  onRemoveProduct: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}
export function CartItem(props: CartItemProps) {
  const { productInfo, onRemoveProduct, onUpdateQuantity } = props;

  return (
    <CartItemContainer>
      <ProductImage src={productInfo.image_url} />
      <ProductInfoContainer>
        <ProductInfoHeader>
          <ProductInfoTitle>{productInfo.name}</ProductInfoTitle>
          <ProductDeleteButton onClick={() => onRemoveProduct(productInfo.id)}>
            <DeleteIcon />
          </ProductDeleteButton>
        </ProductInfoHeader>

        <ProductInfoDescription>
          {productInfo.description}
        </ProductInfoDescription>

        <ProductInfoFooter>
          <p>Select</p>
          <ProductInfoPrice>
            {formatPrice(productInfo.price_in_cents)}
          </ProductInfoPrice>
        </ProductInfoFooter>
      </ProductInfoContainer>
    </CartItemContainer>
  );
}
