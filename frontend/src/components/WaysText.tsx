import { Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const WaysText: React.FC<Props> = ({ children, ...rest }: Props) => {
  return <Typography {...rest}>{children}</Typography>;
};

export default WaysText;
