import { AccountBalanceWalletOutlined, AddShoppingCartOutlined, Logout, Notifications, ShoppingCartCheckoutOutlined, SyncAltOutlined } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Divider, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(null);

  const handleClose = () => {
    setMenuOpen(null);
  };
  return (
    <AppBar sx={{ bgcolor: '#263B56' }} position="static">
      <Toolbar>
        <Avatar src='https://www.creativefabrica.com/wp-content/uploads/2021/09/15/OF-Logo-design-vector-Graphics-17317194-1-1-580x386.jpg' />
        <Typography sx={{ flexGrow: 1, ml: 1, fontWeight: 600, fontSize: '20px' }}>Kotha Shonkolon</Typography>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton onClick={e => setMenuOpen(e.currentTarget)} size="large" edge="end" color="inherit">
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={menuOpen}
          open={Boolean(menuOpen)}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem sx={{ mb: 2 }}>
            <Avatar />
            <Typography sx={{ flexGrow: 1, ml: 1 }}>User553</Typography>
          </MenuItem>
          <MenuItem >
            <ListItemIcon>
              <AccountBalanceWalletOutlined />
            </ListItemIcon>
            Balance Statement
          </MenuItem>
          <MenuItem >
            <ListItemIcon>
              <ShoppingCartCheckoutOutlined fontSize="small" />
            </ListItemIcon>
            Sell Statement
          </MenuItem>
          <MenuItem >
            <ListItemIcon>
              <AddShoppingCartOutlined fontSize="small" />
            </ListItemIcon>
            Buy Statement
          </MenuItem>
          <MenuItem >
            <ListItemIcon>
              <SyncAltOutlined fontSize="small" />
            </ListItemIcon>
            KSB Transfer
          </MenuItem>
          <Divider sx={{ pt: 2 }} />

          <ul style={{ fontSize: '14px', marginBottom: '20px', marginTop: '30px' }}>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Disclaimer</li>
          </ul>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  )
}

export default TopBar