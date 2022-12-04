import { useContext, useState } from "react";
import WaysButton from "../../components/WaysButton";
import WaysInput from "../../components/WaysInput";
import WaysModal from "../../components/WaysModal";
import WaysText from "../../components/WaysText";
import { UserContext } from "../../contexts/UserContext";

interface Props {
  open: boolean;
  onClose: VoidFunction;
}

function SignInModal({ open, onClose }: Props) {
  const { name, setName, emoji, setEmoji } = useContext(UserContext);
  const [inputName, setInputName] = useState(name);
  const [inputEmoji, setInputEmoji] = useState(emoji);

  return (
    <WaysModal open={open} onClose={onClose}>
      {/* Header */}
      <WaysText variant={"h2"}>{"Who are you"}</WaysText>

      {/* Name */}
      <WaysInput onChange={handleInputName} />

      {/* Emoji Picker */}
      {/* <EmojiPicker onEmojiClick={handleSelectEmoji} /> */}

      <WaysButton onClick={handleSignIn}>{"Submit"}</WaysButton>
    </WaysModal>
  );

  function handleInputName(v: any) {
    setInputName(v.target.value);
  }

  function handleSelectEmoji(emojiData: any, event: MouseEvent) {
    const { emoji } = emojiData;
    setInputEmoji(emoji);
  }

  function handleSignIn() {
    setName(inputName);
    setEmoji(inputEmoji);
  }
}

export default SignInModal;
