import React from 'react';
import styled, { css } from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;

  background-color: rgba(0, 0, 0, 0.4);
`;

const LayoutWrapper = styled.div`
  max-width: 1200px;

  padding: 0 20px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.header`
  width: calc(1200px - 20 * 2px);
  height: 100px;

  display: flex;
  align-items: center;
`;

const NavListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex: 1;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

interface NavItemProps {
  isNotice?: boolean;
}

const NavItem = styled.a<NavItemProps>`
  padding: 5px 10px;
  margin: 10px;

  color: #fff;

  ${p =>
    p.isNotice &&
    css`
      border-radius: 5px;
      border: 1px solid #fff;
    `}
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 10px;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  margin-bottom: 3px;
  margin-right: 10px;

  svg {
    margin-right: 3px;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0px;
    width: 100%;
    height: 1px;
    background: #fff;
  }
`;

const SearchInput = styled.input`
  height: 30px;
  font-size: 16px;
  background: none;
  border: none;
  caret-color: #fff;
  padding-left: 5px;

  ::placeholder {
    transition: color 1s ease;
    color: white;
  }

  :focus {
    outline: none;

    ::placeholder {
      color: gray;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <BackgroundWrapper>
      <LayoutWrapper>
        <HeaderWrapper>
          <Logo src="./anju-logo@2x.png" />
          <NavListWrapper>
            <NavWrapper>
              <NavItem>소개</NavItem>
              <NavItem>알아보기</NavItem>
            </NavWrapper>
            <NavWrapper>
              <SearchWrapper>
                <BsSearch />
                <SearchInput placeholder="검색" />
              </SearchWrapper>
              <NavItem isNotice>로그인</NavItem>
            </NavWrapper>
          </NavListWrapper>
        </HeaderWrapper>
      </LayoutWrapper>
    </BackgroundWrapper>
  );
};

export default Header;
