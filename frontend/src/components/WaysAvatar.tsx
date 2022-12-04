import { Avatar, AvatarProps } from "@mui/material";

interface Props extends AvatarProps {}

function WaysAvatar({ ...rest }: Props) {
  return (
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" {...rest} />
  );
}

export default WaysAvatar;
