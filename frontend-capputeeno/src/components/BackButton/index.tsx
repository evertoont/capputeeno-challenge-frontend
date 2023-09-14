import { useRouter } from "next/navigation";
import { ButtonText, ContainerButton } from "./styles";
import { BackIcon } from "../icons/back";

export function BackButton() {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  return (
    <ContainerButton onClick={handleBackButton}>
      <BackIcon />
      <ButtonText>Voltar</ButtonText>
    </ContainerButton>
  );
}
