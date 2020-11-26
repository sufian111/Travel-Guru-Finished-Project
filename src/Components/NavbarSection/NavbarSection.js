import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";

import MoreIcon from "@material-ui/icons/MoreVert";
import { Button, Container } from "@material-ui/core";
import "./NavbarSection.css";
import { Link } from "react-router-dom";
import logo from "../../Image/Logo.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const NavbarSection = (props) => {
  const navItemColor = props.color ? props.color : "inherit";
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const navItemStyle = {
    textTransform: "capitalize",
    padding: "0 30px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWidth: "medium",
    letterSpacing: "2px",
  };
  const btnStyle = {
    textTransform: "capitalize",
    color: "#000",
    background: "#F9A51A",
    padding: "7px 28px",
    marginLeft: "25px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWidth: "medium",
    letterSpacing: "2px",
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Button style={navItemStyle} color={navItemColor}>
        News
      </Button>
      <Button style={navItemStyle} color={navItemColor}>
        Description
      </Button>
      <Button style={navItemStyle} color={navItemColor}>
        Blog
      </Button>
      <Button style={navItemStyle} color={navItemColor}>
        Contact
      </Button>
      <Link to="/login">
        <Button style={btnStyle}>Login</Button>
      </Link>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <Container>
        <AppBar
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
          position="static"
        >
          <Toolbar style={{ margin: "25px 0" }}>
            <Link to="/">
              <img
                className="site-logo"
                src={props.logo ? props.logo : logo}
                alt="logo"
              />
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button style={navItemStyle} color={navItemColor}>
                News
              </Button>
              <Button style={navItemStyle} color={navItemColor}>
                Description
              </Button>
              <Button style={navItemStyle} color={navItemColor}>
                Blog
              </Button>
              <Button style={navItemStyle} color={navItemColor}>
                Contact
              </Button>

              <Link to="/login">
                <Button style={btnStyle}>Login</Button>
              </Link>
            </div>
            <div className={classes.sectionMobile}>
              <Button style={navItemStyle} color={navItemColor}>
                News
              </Button>
              <Button style={navItemStyle} color={navItemColor}>
                Description
              </Button>
              <Button style={navItemStyle} color={navItemColor}>
                Blog
              </Button>
              <Button style={navItemStyle} color={navItemColor}>
                Contact
              </Button>

              <Link to="/login">
                <Button style={btnStyle}>Login</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Container>
    </div>
  );
};

export default NavbarSection;
