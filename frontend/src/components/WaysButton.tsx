import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const WaysButton: React.FC<Props> = ({ children, onClick, ...rest }: Props) => {
  return (
    <Button variant={"contained"} color={"success"} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default WaysButton;
