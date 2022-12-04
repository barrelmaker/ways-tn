import { AvatarGroup } from "@mui/material";
import { User } from "../pages/Plan/Plan";
import WaysAvatar from "./WaysAvatar";

interface Props {
  users: User[];
}

function WaysAvatarGroup({ users }: Props) {
  return (
    <AvatarGroup max={4}>
      {users.map((u) => (
        <WaysAvatar key={u.name} />
      ))}
    </AvatarGroup>
  );
}

export default WaysAvatarGroup;
