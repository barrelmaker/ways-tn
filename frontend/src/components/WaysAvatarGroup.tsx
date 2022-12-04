import { AvatarGroup, AvatarGroupProps } from "@mui/material";
import { User } from "../pages/Plan/Plan";
import WaysAvatar from "./WaysAvatar";

interface Props extends AvatarGroupProps {
  users: User[];
}

function WaysAvatarGroup({ users, ...rest }: Props) {
  return (
    <AvatarGroup max={4} {...rest}>
      {users.map((u) => (
        <WaysAvatar key={u.name} />
      ))}
    </AvatarGroup>
  );
}

export default WaysAvatarGroup;
