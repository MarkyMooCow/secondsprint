import React from "react";
import { Drawer as SBDrawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  drawer: {
    width: "178px",
    height: "100%",
  },
});

const Drawer = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => navigate("/home"),
    },
    {
      text: "Messages",
      icon: <InboxIcon />,
      onClick: () => navigate("/message"),
    },
    {
      text: "Notifications",
      icon: <AnnouncementIcon />,
      onClick: () => navigate("/notifs"),
    },
  ];
  return (
    <SBDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </SBDrawer>
  );
};

export default Drawer;
