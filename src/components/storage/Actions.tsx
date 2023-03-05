import * as React from "react";
import { StorageContext, STORAGE_PROBLEM_DATA_SCHEMA_V1 } from "./Context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ResetProgress: React.FunctionComponent<{}> = ({}) => {
  const { updateStorageProblemsData } = React.useContext(StorageContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color="error" variant="contained">
        {"Reset Progress"}
        <ClearIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reset Progress
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to reset all the progress?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={() => {
                updateStorageProblemsData({});
                handleClose();
              }}
              color="error"
              variant="contained"
            >
              <Typography>{"Yes"}</Typography>
            </Button>
            <Button onClick={handleClose} color="primary" variant="contained">
              <Typography>{"No"}</Typography>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export const BackupProgress: React.FunctionComponent<{}> = ({}) => {
  const { storageProblemsData } = React.useContext(StorageContext);
  const handleClick = () => {
    const backupData = {
      schema: STORAGE_PROBLEM_DATA_SCHEMA_V1,
      data: storageProblemsData,
    };

    // create file in browser
    const fileName = "um-backup-v1";
    const json = JSON.stringify(backupData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    // create "a" HTML element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <div>
      <Button onClick={handleClick} color="primary" variant="contained">
        {"Backup Progress"}
        <CloudUploadIcon />
      </Button>
    </div>
  );
};

export const ImportProgress: React.FunctionComponent<{}> = ({}) => {
  const { updateStorageProblemsData } = React.useContext(StorageContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = React.useState<File>();

  const onFileInputChange = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const onReaderLoadEnd = (event: ProgressEvent<FileReader>) => {
    if (event && event.target && typeof event.target.result === "string") {
      const { data } = JSON.parse(event.target.result);
      updateStorageProblemsData(data);
      handleClose();
    }
  };
  const onSubmit = () => {
    if (file) {
      var reader = new FileReader();
      reader.onloadend = onReaderLoadEnd;
      reader.readAsText(file, "utf8");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} color="secondary" variant="contained">
        {"Import Progress"}
        <CloudDownloadIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Import Progress
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please upload your progress backup.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <input
              type="file"
              onChange={onFileInputChange}
              accept="application/JSON"
            />
            <button onClick={onSubmit}>Upload</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export const Actions: React.FunctionComponent<{}> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <ResetProgress />
      <ImportProgress />
      <BackupProgress />
    </Box>
  );
};
