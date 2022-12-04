import { TextField } from "@mui/material";

interface Props {
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const WaysInput: React.FC<Props> = ({ onChange }: Props) => {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onChange={onChange}
    />
  );
};

export default WaysInput;
