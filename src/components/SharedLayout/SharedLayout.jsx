import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, StyledHeader, StyledApp } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <StyledApp>
      <StyledHeader>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </StyledApp>
  );
};
