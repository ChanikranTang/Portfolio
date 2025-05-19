import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

// icons
import LocalPhone from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

//card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

//Photos
import ProfilePic from "../Photo/MyProfilePic.jpg";
import cutep from "../Photo/CuTep.png";
import Js from "../Photo/Js.png";
import react from "../Photo/react.png";
import ht from "../Photo/html.png";
import css from "../Photo/css.png";
import java from "../Photo/java.png";
import git from "../Photo/git.png";
import postman from "../Photo/postman.png";
import sp from "../Photo/spring boot.png";
import sq from "../Photo/sql.png";
import php from "../Photo/php.png";
import py from "../Photo/py.png";

//List
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import { Link,useNavigate } from "react-router-dom";

const ProgSkills = [react, ht, css, Js, java, sp, sq, php, py];
const tools = [git, postman];
const txtworkexp = [
  {
    header: "Intranet with Microsoft sharepoint",
    desc: "Low-code intranet web application using Microsoft Sharepoint",
  },
  {
    header: "BAAC Phoenix - Loan web application",
    desc: "Responsible for editing and creating new components and pages with React, creating and editing Java Backed",
  },
  {
    header: "KU project - Registration system web application",
    desc: "Responsible for editing and creating new components and pages with React",
  },
];

function Homepage() {
  const [showEdu, setShowEducation] = useState(true);
  const [showWork, setShowWorkExp] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const showEducation = () => {
    setShowEducation((prev) => !prev);
    setShowWorkExp(false);
    setShowProjects(false);
  };
  const showWorkExp = () => {
    setShowWorkExp((prev) => !prev);
    setShowEducation(false);
    setShowProjects(false);
  };
  const showProj = () => {
    setShowProjects((prev) => !prev);
    setShowEducation(false);
    setShowWorkExp(false);
  };
  const navigate = useNavigate();

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        <Avatar
          alt="Profile pic"
          src={ProfilePic}
          sx={{ height: 200, width: 200 }}
        ></Avatar>
        <Typography sx={{ mt: 1 }}>Chanikran Tangpatorn</Typography>
        <Box sx={{ display: "flex", mt: 1 }}>
          {/* Phone */}
          <LocalPhone sx={{ mr: 1 }} />
          <Typography variant="body1">084-668-3521</Typography>
          {/* Social Media */}
          <EmailIcon sx={{ mr: 1, ml: 1 }} />
          <Typography variant="body1">Gift209-11@hotmail.com</Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 1 }}>
          <Typography variant="body1">LINE ID : ct.patorn</Typography>
        </Box>
      </Container>

      {/* skill */}
      <Typography variant="body1" sx={{ ml: 2 }}>
        Skills
      </Typography>
      <Box sx={{ display: "flex", p: 1 }}>
        <Card sx={{ display: "flex", maxWidth: 400 }}>
          <CardMedia
            component="img"
            alt="eng skill test-cutep"
            image={cutep}
            sx={{ width: 200 }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              59/120
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Listening : 16
              <br />
              Writing : 11
              <br />
              Reading : 32
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* prog skill */}
      <Typography variant="body1" sx={{ ml: 2 }}>
        Programming Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          gap: 1,
          p: 1,
        }}
      >
        {ProgSkills.map((content, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 150,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CardMedia
              component="img"
              alt="eng skill test-cutep"
              image={content}
              sx={{ maxHeight: 100 }}
            />
          </Card>
        ))}
      </Box>

      <Typography variant="body1" sx={{ ml: 2 }}>
        Tools
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          gap: 1,
          p: 1,
        }}
      >
        {tools.map((content, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 150,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CardMedia
              component="img"
              alt="eng skill test-cutep"
              image={content}
              sx={{ maxHeight: 100 }}
            />
          </Card>
        ))}
      </Box>

      <Box sx={{ display: "flex", width: "100%" }}>
        {/* Left Sidebar */}
        <Box sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    bgcolor: showEdu ? "primary.dark" : "white",
                    color: showEdu ? "white" : "black",
                    "&:hover": {
                      bgcolor: showEdu ? "black" : "action.hover",
                    },
                  }}
                  onClick={showEducation}
                >
                  <ListItemText primary="Education History" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  // href="#simple-list"
                  sx={{
                    bgcolor: showWork ? "primary.dark" : "white",
                    color: showWork ? "white" : "black",
                    "&:hover": {
                      bgcolor: showWork ? "black" : "action.hover",
                    },
                  }}
                  onClick={showWorkExp}
                >
                  <ListItemText primary="Work Experience" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  // href="#simple-list"
                  sx={{
                    bgcolor: showProjects ? "primary.dark" : "white",
                    color: showProjects ? "white" : "black",
                    "&:hover": {
                      bgcolor: showProjects ? "black" : "action.hover",
                    },
                  }}
                  onClick={showProj}
                >
                  <ListItemText primary="Projects" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>

        {/* Right Content */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          {showEdu && (
            <>
              <Box
                sx={{
                  p: 1,
                }}
              >
                <ListItem
                  sx={{ display: "block", mb: 1, border: "1px solid black" }}
                >
                  <Typography variant="h6">
                    Bachelor's degree : Computer Science Chulalongkorn
                    University (2562-2566)
                  </Typography>
                  <Typography variant="body2">GPAX : 2.84</Typography>
                </ListItem>
                <ListItem
                  sx={{ display: "block", mb: 1, border: "1px solid black" }}
                >
                  <Typography variant="h6">
                    TechScoop Academy รุ่นที่ 3 at G-Able (Nov 2566- Feb 2567)
                  </Typography>
                </ListItem>
              </Box>
            </>
          )}

          {showWork && (
            <>
              <Typography
                variant="body2"
                sx={{ ml: 2, color: "text.secondary" }}
              >
                Full-stack Web developer at G-Able (Apr 2567 - Sep 2567)
              </Typography>
              <Box
                sx={{
                  p: 1,
                }}
              >
                {txtworkexp.map((proj, index) => {
                  // console.log(proj);
                  return (
                    <ListItem
                      key={index}
                      sx={{
                        display: "block",
                        mb: 1,
                        border: "1px solid black",
                      }}
                    >
                      <Typography variant="h6">{proj.header}</Typography>
                      <Typography variant="body2">{proj.desc}</Typography>
                    </ListItem>
                  );
                })}
              </Box>
            </>
          )}

          {showProjects && (
            <>
              <Box
                sx={{
                  p: 1,
                }}
              >
                <ListItem
                  sx={{ display: "block", mb: 1, border: "1px solid black" }}
                >
                  <Typography variant="h6">
                    Senior Project - Web Application for Project Proposal
                    Management in Higher Education for Industry Consortium (Data
                    Management)
                  </Typography>
                  <Typography variant="body2">
                    Web application for Project Proposal , creating form to use
                    in consideration process
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ display: "block", mb: 1, border: "1px solid black" }}
                >
                  <Typography variant="h6">
                    Certificate Tracking System Project Web Application for
                    tracking certificate in IT skills in the company
                  </Typography>
                  <Typography variant="body2">
                    using React as fronted and Java, Spring Boot, as Backed and
                    mySql as Database
                  </Typography>
                </ListItem>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <button onClick={() => navigate('/testpage')}>
      ToPage
    </button>
    </>
  );
}

export default Homepage;
