import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import { AiFillCloseCircle, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const [hideFooter, setHideFooter] = useState(false);

  return (
    <Box className={` footer ${hideFooter ? "hidden" : ""}`}>
      <div className=" close-div">
        <Button
          variant="rounded"
          color="error"
          className="footer-close"
          size="large"
          onClick={() => {
            setHideFooter(true);
          }}
        >
          <CancelIcon />
        </Button>
      </div>
      <Box className=" footer-div ">
        <Typography className=" footer-p">
          Note: This is a free API, so it can only be fetched 500 times a month!
        </Typography>
        <p className=" mx-5 text-xs md:text-base">Made by Gopesh Goswami</p>
        <div className="git-div">
          <p>Source Code:</p>
          <a
            href="https://github.com/GopeshGoswami/api-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className=" github-icon text-3xl hover:text-black duration-300 ease-in-out" />
          </a>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
