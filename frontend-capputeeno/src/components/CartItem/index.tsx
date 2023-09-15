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

interface CartItemProps {
  productInfo: ProductInCart;
  onRemoveProduct: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}
export function CartItem(props: CartItemProps) {
  const { productInfo, onRemoveProduct, onUpdateQuantity } = props;

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
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <ProductInfoPrice>
            {formatPrice(productInfo.price_in_cents)}
          </ProductInfoPrice>
        </ProductInfoFooter>
      </ProductInfoContainer>
    </CartItemContainer>
  );
}
