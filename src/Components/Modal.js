import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add File
            </Typography>
            <Box
              sx={{
                maxWidth: "100%",
                margin: "25px 0",
              }}
            >
              <TextField fullWidth label="Name Person" id="NameFile" />
            </Box>

            <Button
              variant="text"
              component="label"
              sx={{
                width: "600px",
                height: "50px",
                maxWidth: "100%",
                backgroundColor: "#2D2D2D",
                color: "grey",
                "& > :not(style)": { m: 1 },
                "& > :hover ": { backgroundColor: "grey" },
                margin: "0 0 25px 0",
              }}
            >
              Upload File
              <input type="file" hidden />
            </Button>
            <Box
              sx={{
                display: {
                  sm: "flex",
                  lg: "flex",
                  md: "flex",
                },
              }}
            >
              <Button
                variant="text"
                sx={{
                  width: "600px",
                  height: "50px",
                  maxWidth: "100%",
                  backgroundColor: "#2D2D2D",
                  color: "grey",
                  "& > :not(style)": { m: 1 },
                  "& > :hover ": { backgroundColor: "grey" },
                }}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
