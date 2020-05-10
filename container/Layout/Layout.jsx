import React from 'react';
import { withRouter } from 'next/router';

import LayoutWrapper from 'components/UI/Antd/Layout/Layout';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { SINGLE_POST_PAGE } from 'settings/constants';
import { LayoutProvider } from 'context/LayoutProvider';

const { Content } = LayoutWrapper;

const Layout = ({
  children, router, user, isLoggedIn,
}) => (
  <LayoutWrapper>
    <LayoutProvider>
      <Header user={user} isLoggedIn={isLoggedIn} />
      <Content>{children}</Content>
      <Footer path={router.pathname === SINGLE_POST_PAGE} />
    </LayoutProvider>
  </LayoutWrapper>
);

export default withRouter(Layout);
