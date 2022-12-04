import { Typography, TypographyTypeMap } from "@mui/material";

interface Props {
  variant?: TypographyTypeMap["props"]["variant"];
  children: React.ReactNode;
}

const WaysText: React.FC<Props> = ({ children, ...rest }: Props) => {
  return <Typography {...rest}>{children}</Typography>;
};

export default WaysText;
