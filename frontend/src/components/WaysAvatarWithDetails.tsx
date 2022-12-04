import { Avatar, useTheme } from "@mui/material";
import WaysText from "./WaysText";

interface Props {
  name: string;
  details?: string;
}

function WaysAvatarWithDetails({ name, details }: Props) {
  const theme = useTheme();

  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: theme.spacing(1.5) }}
    >
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

      <div>
        {<WaysText>{name}</WaysText>}
        {details && <WaysText variant={"caption"}>{details}</WaysText>}
      </div>
    </div>
  );
}

export default WaysAvatarWithDetails;
