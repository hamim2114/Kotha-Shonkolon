import { AcUnitOutlined, DynamicFeedOutlined, Favorite, Home, LocationOn, Restore } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box, Container } from '@mui/material';
import React, { useState } from 'react'

const BottomBar = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{
        color: '#fff',
        boxShadow: 3,
        // width: '100%',
        maxWidth: '452px',
        mx: 'auto',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Offer" icon={<AcUnitOutlined />} />
      <BottomNavigationAction label="Posts" icon={<DynamicFeedOutlined />} />
    </BottomNavigation>
  )
}

export default BottomBar