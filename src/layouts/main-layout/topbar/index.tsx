import React from 'react';
import IconifyIcon from '../../../components/base/IconifyIcon';
// import Image from '../../../components/base/Image';
import ProfileMenu from './ProfileMenu';
// import LanguageSelect from './LanguageSelect';
import {
  Stack, AppBar, Toolbar, TextField,
  ButtonBase, IconButton, InputAdornment, Badge, Link
} from '@mui/material';

interface TopbarProps {
  expand: boolean;
  mobileOpen: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawerWidth: number;
  miniDrawerWidth: number;
}

const Topbar = ({
  expand,
  mobileOpen,
  setExpand,
  setMobileOpen,
  drawerWidth,
  miniDrawerWidth,
}: TopbarProps) => {
  const handleDrawerExpand = () => {
    setExpand(!expand);
  };

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      color='info'
      sx={{
        right: 0,
        height: 100,
        margin: '0 auto',
        width: {
          xs: 1,
          lg: expand ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${miniDrawerWidth}px)`,
        },
      }}
    >
      <Stack px={3} py={1.2} display={"flex"} flexDirection={"row"} alignItems="center" justifyContent="space-between">
        <Stack spacing={{ xs: 2, sm: 3 }} flexDirection={"row"} alignItems="center">
          <ButtonBase
            component={Link}
            href="/"
            disableRipple
            sx={{ lineHeight: 0, display: { xs: 'none', sm: 'block', lg: 'none' } }}
          >
            {/* <Image sx={{}} src={'images/Logo.png'} alt="logo" height={40} width={40} /> */}
            <IconifyIcon icon="flat-color-icons:todo-list" height={48} width={48} />

          </ButtonBase>

          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="expand drawer"
              onClick={handleDrawerExpand}
              edge="start"
              sx={{ display: { xs: 'none', lg: 'flex' } }}
            >
              <IconifyIcon icon={expand ? 'line-md:menu-fold-left' : 'line-md:menu-fold-right'} />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="expand drawer"
              onClick={handleMobileOpen}
              edge="start"
              sx={{ display: { xs: 'flex', lg: 'none' } }}
            >
              <IconifyIcon icon="solar:hamburger-menu-outline" />
            </IconButton>
          </Toolbar>

          <Toolbar sx={{ ml: -1.5, display: { xm: 'block', md: 'none' } }}>
            <IconButton edge="start" color="inherit" aria-label="search">
              <IconifyIcon icon="prime:search" />
            </IconButton>
          </Toolbar>

          <TextField
            variant="filled"
            placeholder="Search"
            sx={{ width: 300, display: { xs: 'none', md: 'flex' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconifyIcon icon="prime:search" />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack spacing={{ xs: 1, sm: 2 }} flexDirection={"row"} justifyContent="space-between" gap={3} alignItems="center">
          {/* <LanguageSelect /> */}
          <IconButton>
            <Badge
              color="error"
              badgeContent={2}
              sx={{ '& .MuiBadge-badge': { top: 6, right: 2 } }}
            >
              <IconifyIcon icon="mdi:bell-outline" />
            </Badge>
          </IconButton>
          <ProfileMenu />
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Topbar;
