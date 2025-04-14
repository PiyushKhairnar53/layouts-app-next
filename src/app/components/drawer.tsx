"use client";
import { Box, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import DrawerComp from '@mui/material/Drawer';
import * as React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  showDrawer: boolean;
  onDrawerClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Drawer(props: Props) {
  const drawerWidth = 240
  console.log(props.showDrawer)
  const drawer = (
    <div>
      <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={(event) => props.onDrawerClose(event)}>
            <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <DrawerComp
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }} open={props.showDrawer}>
              {drawer}
            </DrawerComp>
        </Box>
      </React.Fragment>
    </div>
  );
}