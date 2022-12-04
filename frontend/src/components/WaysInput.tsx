import { TextField, TextFieldProps } from "@mui/material";

type Props = TextFieldProps;

const WaysInput: React.FC<Props> = ({ onChange, ...rest }: Props) => {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onChange={onChange}
      {...rest}
    />
  );
};

export default WaysInput;
