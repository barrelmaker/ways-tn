import { Card, CardProps, useTheme } from "@mui/material";

interface Props extends CardProps {
  children: React.ReactNode;
}

const WaysCard: React.FC<Props> = ({ children, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        padding: theme.spacing(2),
        margin: theme.spacing(3, 0),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(4),
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default WaysCard;
