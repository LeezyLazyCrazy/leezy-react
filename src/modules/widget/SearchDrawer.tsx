/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

// interface SearchDrawerProps {
//   open: boolean;
//   setOpen: (set: boolean) => void;
// }

/**
 * @param {SearchDrawerProps} SearchDrawerProps
 * @returns {JSX.Element} React Component(Drawer)
 */

function SearchDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton size="large" edge="start" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{ opacity: 0.98 }}
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 480, padding: '10% 5%' }} role="combobox" />
      </Drawer>
    </>
  );
}

export default SearchDrawer;

// const Root = styled("div")(() => ({
// 	marginTop: "5%",
// }));

// const FlexBox = styled("div")(() => ({
// 	display: "flex",
// 	justifyContent: "space-between",
// }));
