import { Avatar, AvatarProps, useTheme } from "@mui/material";
import WaysText from "./WaysText";

interface Props extends AvatarProps {
  name: string;
  details?: string;
}

function WaysAvatarWithDetails({ name, details, ...rest }: Props) {
  const theme = useTheme();

  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: theme.spacing(1.5) }}
    >
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" {...rest} />

      <div>
        {<WaysText>{name}</WaysText>}
        {details && <WaysText variant={"caption"}>{details}</WaysText>}
      </div>
    </div>
  );
}

export default WaysAvatarWithDetails;
