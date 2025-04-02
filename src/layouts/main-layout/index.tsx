import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from './sidebar';
import Topbar from './topbar';

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const [expand, setExpand] = React.useState(true); //false
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 240;
  const miniDrawerWidth = 90;

  return (
    <Stack>
      <Sidebar
        expand={expand}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        drawerWidth={drawerWidth}
        miniDrawerWidth={miniDrawerWidth}
      />
      <Box component="main" flexGrow={1} sx={{ overflowX: 'hidden' }}>
        <Topbar
          expand={expand}
          mobileOpen={mobileOpen}
          setExpand={setExpand}
          setMobileOpen={setMobileOpen}
          drawerWidth={drawerWidth}
          miniDrawerWidth={miniDrawerWidth}
        />
        <Box mt={13}//20 
          flexGrow={1}
          sx={{
            // ml: { xs: '20px', md: '20px', lg: expand ? '260px' : '110px' }
            ml: { xs: '5px', md: '5px', lg: expand ? '240px' : '90px' }
          }}

        >{children}</Box>
      </Box>
    </Stack>
  );
};

export default MainLayout;
