"use client";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface Props{
  onDrawerClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Header(props: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={(event) => props.onDrawerClick(event)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Layout 1
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}