import { createContext, Dispatch, SetStateAction } from "react";

type UserProps = {
  name: string | null;
  setName: Dispatch<SetStateAction<string | null>>;
  emoji: string | null;
  setEmoji: Dispatch<SetStateAction<string | null>>;
};

export const UserContext = createContext({} as UserProps);
