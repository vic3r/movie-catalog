import React, { useState } from 'react';
import clsx from 'clsx';
import { Drawer } from '@material-ui/core';
import { Dehaze as DehazeIcon } from '@material-ui/icons';
import useStyles from './styles';
import DrawerList from './DrawerList.component';

const CustomDrawer = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const renderItems = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      data-testid="defaultpresentation"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <DrawerList />
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <DehazeIcon data-testid="test-icon-drawer" onClick={toggleDrawer(true)} />
        <Drawer
          data-testid="defaultdrawer"
          anchor="left"
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          {renderItems()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default CustomDrawer;
