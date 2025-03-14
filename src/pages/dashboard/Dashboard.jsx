import React from 'react';
import TopBar from '../../components/TopBar';
import { Avatar, Box, CardContent, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Add, AdminPanelSettings, FeedOutlined, MenuBookOutlined, Person2, RecordVoiceOver, Shop, UnarchiveOutlined, VolunteerActivismOutlined } from '@mui/icons-material';
import BottomBar from '../../components/BottomBar';
import Slider from './Slider';
import { Link } from 'react-router-dom';

const Dashboard = () => {


  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'bg' }}>
      <TopBar />

      <Grid mt={2} mx={2} container spacing={2}>

        <Grid container justifyContent='center' alignItems='center' sx={{ bgcolor: '#815AF3', py: 2, boxShadow: 2, borderRadius: 2 }} size={8}>
          {/* <Person2 sx={{ border: '1px solid #fff', color: '#fff', borderRadius: '50px', fontSize: '40px' }} />
          <Typography sx={{ fontSize: '22px' }} color='white'>Login / Sign-up</Typography> */}
          <Link to='/profile' className='link'>
            <Grid container justifyContent='center' spacing={2} alignItems="center">
              <Stack gap={1} alignItems='center'>
                <Avatar sx={{ width: 70, height: 70 }} />
                <Typography color='white' variant="body2">ID Level-1</Typography>
              </Stack>
              <Grid >
                <Typography color='white' variant="h6">John Smith</Typography>
                <Typography color='white' variant="body2">KSB: 1000.00</Typography>
                <Typography color='white' variant="body2">⭐ 5.0 (01) (01)</Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
        <Grid container direction='column' size={4} spacing={2}>
          <Stack alignItems='center' sx={{ bgcolor: '#0FB473', py: .5, boxShadow: 2, borderRadius: 2 }}>
            <Add sx={{ color: '#fff', fontSize: '35px' }} />
            <Typography sx={{ fontSize: '14px' }} color='white'>Add Balance</Typography>
          </Stack>
          <Stack alignItems='center' sx={{ bgcolor: '#F762E4', py: .5, boxShadow: 2, borderRadius: 2 }}>
            <UnarchiveOutlined sx={{ color: '#fff', fontSize: '30px' }} />
            <Typography sx={{ fontSize: '14px' }} color='white'>Withdraw</Typography>
          </Stack>
        </Grid>

        <Grid size={5} sx={{ backgroundImage: 'url(/gradient.png)', backgroundSize: 'cover', p: 2, boxShadow: 2, borderRadius: 2 }}>
          <Typography color='white' sx={{ fontWeight: 600 }} >News Feed</Typography>
          <Typography color='white' sx={{ fontSize: '30px', fontWeight: 600 }}>10% <span style={{ fontSize: '12px' }}>Up To</span></Typography>
          <Typography color='white' sx={{ fontSize: '14px', mt: .5 }}>Today's Update!</Typography>
        </Grid>
        <Grid sx={{ boxShadow: 2, borderRadius: 2 }} size={7}>
          <Slider />
        </Grid>

        {
          [
            { icon: FeedOutlined, title: 'List', color: '#048096' },
            { icon: MenuBookOutlined, title: 'User Manual', color: '#00507E ' },
            { icon: Shop, title: 'App', color: '#4586EB' },
            { icon: AdminPanelSettings, title: 'Admin Deal', color: '#8B3493' },
            { icon: RecordVoiceOver, title: 'Support', color: '#006934' },
          ].map((item, index) => (
            <Grid key={index} container spacing={.5} direction='column' alignItems='center' sx={{ bgcolor: item.color, py: 2, borderRadius: 2, boxShadow: 2 }} size={4}>
              {<item.icon sx={{ color: '#fff', fontSize: '60px', }} />}
              <Typography color='white'>{item.title}</Typography>
            </Grid>
          ))
        }

      </Grid>

      <BottomBar />
    </Box>
  )
}

export default Dashboard