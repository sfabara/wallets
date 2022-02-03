import * as React from 'react';
import { useEffect, useState } from 'react';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from '../components/listItems';
// import Deposits from './Deposits';
// import logo from '../img/logo/logomarscoinwallet.png';
import { Button } from '@mui/material';
import { IoIosWallet } from 'react-icons/io'
import { RiSafe2Line } from 'react-icons/ri'


// Import sections
import CreateModal from '../components/create-modal'
import MainDrawer from './main-drawer'
import AppBar from './app-bar'
import Wallet from './wallet'

// svg download
import Blur from './blur.svg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.marscoin.org/">
        Marscoin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const MyBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.colors.primary.background,
  color: theme.colors.primary.text,
  padding: 10,
  display: 'flex',
  flexDirection: 'column',



}))

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors.primary.background,
  color: theme.colors.primary.text,
  padding: 10,

  borderRadius: "10px",
  height: "100px",
  margin: "10px",
  fontWeight: 800,
  width: "300px",


  '&:hover':
  {
    backgroundColor: theme.colors.secondary.background,
    boxShadow: "1px 1px 20px #00000090",

  },
  '@media (max-width: 800px)': {
    width: '90%'
  }



}))

const Heading = styled('h1')(({ theme }) => ({
  // color: "#333333",
  color:"#ede1ce",
  padding: theme.spacing(0),
  fontWeight: 900,
  fontSize: '35px'

}));

const SubHeading = styled('h3')(({ theme }) => ({
  color: "#ede1ce",
  padding: theme.spacing(1),
  fontSize: '18px',
  fontWeight: 500
}));


// const MarsCoinTheme = createTheme({
//   colors: {
//     primary: {
//       background: 'rgb(40, 57, 71)',
//       text: "#fff"
//     },
//     secondary: {
//       background: '#9F2C2C',
//       text: "#fff"
//     }

//   },
// });

const MarsCoinTheme = createTheme({
  colors: {
    primary:
    {
      background: "#241a1b",
      text: "#fff"
    },
    secondary: {
      background: "#9F2c2c",
      text: "#fff"
    }
  }
})




function DashboardContent() {
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [open, setOpen] = useState(false);

  // Title state
  const [heading, setHeading] = useState('Wallet')
  const [subHeading, setSubHeading] = useState('Create new local wallet OR login to an existing wallet')


  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  useEffect(() => {

    if (loginSuccess) {
      setModalVisible(false)
      setHeading("")
      setSubHeading("")
    }





  }, [loginSuccess])

  const Blur = () => {
    return (
      <section style={{position: "absolute", zIndex:"-1", width: "100%"}}>
        <svg id="visual" viewBox="0 0 900 600" width="100%" height="90%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="900" height="600" fill="#221e1b"></rect><g filter="url(#blur1)"><circle cx="69" cy="448" fill="#131316" r="357"></circle><circle cx="734" cy="469" fill="#221e1b" r="357"></circle><circle cx="644" cy="253" fill="#131316" r="357"></circle><circle cx="229" cy="70" fill="#131316" r="357"></circle><circle cx="282" cy="354" fill="#221e1b" r="357"></circle><circle cx="453" cy="112" fill="#131316" r="357"></circle></g></svg>

      </section>
    )
  }


  return (
    <ThemeProvider theme={MarsCoinTheme}>
      <Box sx={{ display: 'flex' }}>

        <CssBaseline />

        <AppBar open={open} setOpen={setOpen} />


        <MainDrawer open={open} setOpen={setOpen} />



        <Box
          className="main-section"
          component="main"
          sx={{
            backgroundColor: "#69595f00",
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            flexWrap: 'wrap'
          }}


        >
          <Blur />
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} >
            <Heading> {heading} </Heading>
            <SubHeading> {subHeading} </SubHeading>
            <Grid container spacing={2} >
              {/* Chart */}
              {!loginSuccess ? <Grid item xl={6} >

                <Paper
                  elevation={6}

                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',

                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >

                  <div>
                  </div>


                  <div>
                    <PrimaryButton
                      onClick={toggleModal}
                      startIcon={<IoIosWallet size={40} color={"#fff"} />}>

                      <h3>
                        Create New Wallet
                      </h3>
                    </PrimaryButton>
                    <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} animation={"slideUp"} loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} />



                    <PrimaryButton startIcon={<RiSafe2Line size={40} color={"#fff"} />}>

                      <h3>
                        Login To Wallet
                      </h3>
                    </PrimaryButton>
                  </div>




                </Paper>


              </Grid> : <Wallet />}









            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}