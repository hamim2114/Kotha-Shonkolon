import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Rating,
  Divider,
  Stack,
  IconButton
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import { ArrowBackIos, KeyboardArrowLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <Box sx={{ bgcolor: 'bg', minHeight: '100vh' }}>

      <Box sx={{
        bgcolor: '#29B6F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        py: 2,

        textAlign: 'center',
      }}>
        <Link to="/dashboard" style={{ color: 'white', marginLeft: '20px' }}>
          <ArrowBackIos />
        </Link>
        <Typography variant="h5" fontWeight="bold">
          Profile
        </Typography>
        <Box />
      </Box>

      {/* Profile Card */}
      <Card sx={{
        borderRadius: '8px',
        bgcolor: '#f5f5f5',
        m: 4,
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgcolor="white"
            p={3}
            borderRadius={2}
            mb={2}
          >
            {/* Avatar with blue background */}
            <Avatar
              src="/avatar-placeholder.jpg"
              sx={{
                width: 80,
                height: 80,
                mb: 1.5,
                bgcolor: '#E3F2FD'
              }}
            />

            {/* Name with verified badge */}
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="h6" fontWeight="bold" mr={0.5}>
                Afrin jannat
              </Typography>
              <VerifiedIcon sx={{ color: '#2196F3', fontSize: 20 }} />
            </Box>

            {/* Rating */}
            <Box display="flex" alignItems="center" mb={1}>
              <Rating value={5} readOnly size="small" />
              <Typography variant="body2" color="text.secondary" ml={0.5}>
                5 Star (7) Review
              </Typography>
            </Box>

            {/* Level chip */}
            <Chip
              label="Level-1"
              variant="outlined"
              sx={{
                borderRadius: 1,
                px: 2,
                borderColor: '#9e9e9e',
                color: '#616161'
              }}
            />
          </Box>

          {/* User details */}
          <Stack spacing={2} divider={<Divider flexItem />}>
            <Box display="flex" alignItems="center">
              <WorkIcon sx={{ color: '#757575', mr: 1.5 }} />
              <Typography variant="body2">BD Pollice</Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ color: '#757575', mr: 1.5 }} />
              <Typography variant="body2">From: Belkuchi, Sirajganj</Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <StorefrontIcon sx={{ color: '#757575', mr: 1.5 }} />
              <Typography variant="body2">Sell (34) / Buy (67)</Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ color: '#757575', mr: 1.5 }} />
              <Typography variant="body2">+8801704-566904</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;