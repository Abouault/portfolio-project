import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import "react-popupbox/dist/react-popupbox.css";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
                src="https://mobirise.com/assets52/images/poster.png"
                alt=""
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div onClick={handleOpenModal2} className="portfolio-image-box">
              <img
                className="portfolio-image"
                src="https://i.imgur.com/ConTf4t.png"
                alt=""
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            <div onClick={handleOpenModal3} className="portfolio-image-box">
              <img
                className="portfolio-image"
                src="https://static.tildacdn.com/tild6633-3833-4733-a136-323664656232/Screenshot_2021-01-1.png"
                alt=""
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            <div onClick={handleOpenModal4} className="portfolio-image-box">
              <img
                className="portfolio-image"
                src="http://www.designhill.com/design-blog/wp-content/uploads/2020/01/Inside-Blog-min.jpg"
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
          Create your first website
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img
            className="portfolio-image-modal"
            src="https://mobirise.com/assets52/images/poster.png"
            alt=""
          />
        </DialogContent>
        <DialogActions>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              accusantium.
            </p>
            <p>
              Demo:&nbsp;
              <a href="#">hhtps://demo.com</a>
            </p>
            <p>
              Github:&nbsp;
              <a href="#">hhtps://github.com</a>
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
          Find your perfect home
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img
            className="portfolio-image-modal"
            src="https://i.imgur.com/ConTf4t.png"
            alt=""
          />
        </DialogContent>
        <DialogActions>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              accusantium.
            </p>
            <p>
              Demo:&nbsp;
              <a href="#">hhtps://demo.com</a>
            </p>
            <p>
              Github:&nbsp;
              <a href="#">hhtps://github.com</a>
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
          Home renovation services
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img
            className="portfolio-image-modal"
            src="https://static.tildacdn.com/tild6633-3833-4733-a136-323664656232/Screenshot_2021-01-1.png"
            alt=""
          />
        </DialogContent>
        <DialogActions>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              accusantium.
            </p>
            <p>
              Demo:&nbsp;
              <a href="#">hhtps://demo.com</a>
            </p>
            <p>
              Github:&nbsp;
              <a href="#">hhtps://github.com</a>
            </p>
          </div>
        </DialogActions>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={handleCloseModal4}
        aria-labelledby="customized-dialog-title"
        open={openModal4}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseModal4}
        >
          Facebook cover photo
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img
            className="portfolio-image-modal"
            src="http://www.designhill.com/design-blog/wp-content/uploads/2020/01/Inside-Blog-min.jpg"
            alt=""
          />
        </DialogContent>
        <DialogActions>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              accusantium.
            </p>
            <p>
              Demo:&nbsp;
              <a href="#">hhtps://demo.com</a>
            </p>
            <p>
              Github:&nbsp;
              <a href="#">hhtps://github.com</a>
            </p>
          </div>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default Portfolio;
