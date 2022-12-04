import { Button } from "@mui/material";

interface Props {
  children: React.ReactNode;
  onClick: VoidFunction;
}

const WaysButton: React.FC<Props> = ({ children, onClick }: Props) => {
  return (
    <Button variant={"contained"} color={"success"} onClick={onClick}>
      {children}
    </Button>
  );
};

export default WaysButton;
