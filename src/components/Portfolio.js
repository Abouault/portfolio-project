import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import "react-popupbox/dist/react-popupbox.css";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import CEE from './CEE.png';
import karuma from './karuma.png';
import portfolio from './portfolio.png';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Portfolio = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const [openModal2, setOpenModal2] = useState(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  const [openModal3, setOpenModal3] = useState(false);
  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);

  const [openModal4, setOpenModal4] = useState(false);
  const handleOpenModal4 = () => setOpenModal4(true);
  const handleCloseModal4 = () => setOpenModal4(false);

  return (
    <>
      <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">portfolio</h1>
          <div className="image-box-wrapper row justify-content-center">
            <div onClick={handleOpenModal1} className="portfolio-image-box">
              <img
                className="portfolio-image"
                src={CEE}
                alt=""
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div onClick={handleOpenModal2} className="portfolio-image-box">
              <img
                className="portfolio-image"
                src={karuma}
                alt=""
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            <div onClick={handleOpenModal3} className="portfolio-image-box">
              <img
                className="portfolio-image"
                src={portfolio}
                alt=""
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
        </div>
      </div>
      <BootstrapDialog
        onClose={handleCloseModal1}
        aria-labelledby="customized-dialog-title"
        open={openModal1}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseModal1}
        >
          CEE Santé & Management
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img
            className="portfolio-image-modal"
            src={CEE}
            alt=""
          />
        </DialogContent>
        <DialogActions>
          <div>
            <p>
              Demo:&nbsp;
              <a href="https://cee-sante-management.com/">https://cee-sante-management.com/</a>
            </p>
          </div>
        </DialogActions>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={handleCloseModal2}
        aria-labelledby="customized-dialog-title"
        open={openModal2}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseModal2}
        >
          karuma studio
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img
            className="portfolio-image-modal"
            src={karuma}
            alt=""
          />
        </DialogContent>
        <DialogActions>
          <div>
            <p>
              Demo:&nbsp;
              <a href="https://karuma.fr/">https://karuma.fr/</a>
            </p>
          </div>
        </DialogActions>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={handleCloseModal3}
        aria-labelledby="customized-dialog-title"
        open={openModal3}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseModal3}
        >
          portfolio
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img
            className="portfolio-image-modal"
            src={portfolio}
            alt=""
          />
        </DialogContent>
        <DialogActions>
          <div>
            <p>
              Demo:&nbsp;
              <a href="https://abouault.github.io/portfolio-project/">https://abouault.github.io/portfolio-project/</a>
            </p>
          </div>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default Portfolio;
