import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 6.5rem 0 8rem;
`;

const Layout = ({ style, children }) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

export default Layout;
