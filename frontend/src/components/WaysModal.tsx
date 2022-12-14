import { Box, Modal, ModalProps } from "@mui/material";

interface Props extends Omit<ModalProps, "children"> {
  children: React.ReactNode;
  open: boolean;
  onClose: VoidFunction;
}

const WaysModal: React.FC<Props> = ({
  children,
  open = false,
  onClose,
}: Props) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <>{children}</>
      </Box>
    </Modal>
  );
};

export default WaysModal;
