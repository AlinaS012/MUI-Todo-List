import Drawer from '@mui/material/Drawer';
import DrawerItems from './DrawerItems';
import { Theme, CSSObject } from '@mui/material/styles';


interface SidebarProps {
  expand: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawerWidth: number;
  miniDrawerWidth: number;
}

const Sidebar = ({
  expand,
  mobileOpen,
  setMobileOpen,
  drawerWidth,
  miniDrawerWidth,
}: SidebarProps) => {
  const openedMixin = (theme: Theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme) => ({
    width: miniDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
  });

  const closeMobileDrawer = (open: React.SetStateAction<boolean>) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <Drawer
        open={mobileOpen}
        onClose={closeMobileDrawer(false)}
        sx={(theme) => ({
          ...openedMixin(theme),
          '& .MuiDrawer-paper': { ...openedMixin(theme) },
          display: { xs: 'block', lg: 'none' },
        })}
      >
        <DrawerItems showLogo={true} expand={true} />{/*expand={true}*/} 
      </Drawer>

      <Drawer
        variant="permanent"
        sx={[
          expand
            ? (theme) => ({
                ...openedMixin(theme),
                '& .MuiDrawer-paper': { ...openedMixin(theme) },
              })
            : (theme) => ({
                ...closedMixin(theme),
                '& .MuiDrawer-paper': { ...closedMixin(theme) },
              }),
          { display: { xs: 'none', lg: 'block' } },
        ]}
      >
        <DrawerItems showLogo={expand} expand={expand} />
      </Drawer>
    </>
  );
};

export default Sidebar;
