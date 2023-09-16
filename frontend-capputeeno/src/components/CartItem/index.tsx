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
  SelectQuantity,
} from "./styles";
import { DeleteIcon } from "../icons/delete";
import { formatPrice } from "@/utils/produtcs";
import { useProductSettings } from "@/hooks/useProductSettings";

interface CartItemProps {
  productInfo: ProductInCart;
  onRemoveProduct: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}
export function CartItem(props: CartItemProps) {
  const { productInfo, onRemoveProduct, onUpdateQuantity } = props;
  const { maxQuantityItems } = useProductSettings();

  const handleUpdateQuantity = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onUpdateQuantity(productInfo.id, Number(event.target.value));
  };

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
          <SelectQuantity
            value={productInfo.quantity}
            onChange={handleUpdateQuantity}
          >
            {Array.from({ length: maxQuantityItems }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </SelectQuantity>
          <ProductInfoPrice>
            {formatPrice(productInfo.price_in_cents)}
          </ProductInfoPrice>
        </ProductInfoFooter>
      </ProductInfoContainer>
    </CartItemContainer>
  );
}
