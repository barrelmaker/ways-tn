import { PaletteMode } from "@mui/material";
import { blue, pink, purple } from "@mui/material/colors";
import {
  CommonColors,
  createTheme,
  PaletteColorOptions,
  TypeAction,
  TypeBackground,
  TypeText,
} from "@mui/material/styles";
import {
  ColorPartial,
  PaletteTonalOffset,
} from "@mui/material/styles/createPalette";

interface PaletteOptions {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  mode?: PaletteMode;
  tonalOffset?: PaletteTonalOffset;
  contrastThreshold?: number;
  common?: Partial<CommonColors>;
  grey?: ColorPartial;
  text?: Partial<TypeText>;
  divider?: string;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
  getContrastText?: (background: string) => string;
}

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export const appTheme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: purple[500],
      dark: blue[700],
    },
    secondary: {
      light: pink[300],
      main: "#11cb5f",
      dark: pink[700],
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 5,
  },
});
