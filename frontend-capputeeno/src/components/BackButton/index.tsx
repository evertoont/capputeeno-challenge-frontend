import { useRouter } from "next/navigation";
import { ButtonText, ContainerButton } from "./styles";
import { BackIcon } from "../icons/back";

interface BackButtonProps {
  navigateTo: string;
}
export function BackButton(props: BackButtonProps) {
  const { navigateTo } = props;
  const router = useRouter();

  const handleBackButton = () => {
    router.push(navigateTo);
  };

  return (
    <ContainerButton onClick={handleBackButton}>
      <BackIcon />
      <ButtonText>Voltar</ButtonText>
    </ContainerButton>
  );
}
