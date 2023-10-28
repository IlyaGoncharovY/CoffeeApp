import React from 'react';

import {Navigation} from './Navigation';
import {SwitchComponent} from './features/auth/components/switch/SwitchComponent';

export const AppContainer = () => {
  return (
    <>
      <SwitchComponent />
      <Navigation />
    </>
  );
};
