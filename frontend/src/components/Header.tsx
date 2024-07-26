import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 20px;
  background-color: black;
  flex: 3 1 30%;
  border-right: 1px solid rgb(62, 65, 68);
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ALink = styled.a`
  display: flex;
  padding: 0.8rem 0.6rem;
  margin: 10px;
  color: #FFF;
  font-size: 1.6rem;
  gap: 4px;
  transition: 0.2s;

  &:hover {
  background: #181818;
  border-radius: 99px;
  transition: 0.2s;
  }
`;

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick  }) => {
  return (
    <HeaderContainer>
      <nav>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} fill="#FFF" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 17 4 C 14.162 4 11 6.6132812 11 10.363281 L 11 11 L 10 11 C 7.794 11 6 12.794 6 15 C 6 15.408 6.0645 15.811313 6.1875 16.195312 C 4.3455 16.758312 3 18.475 3 20.5 C 3 22.981 5.019 25 7.5 25 L 15 25 L 15 24.410156 L 10.769531 23 L 7.5 23 C 6.121 23 5 21.879 5 20.5 C 5 19.121 6.121 18 7.5 18 L 10.035156 18 L 8.5234375 16.328125 C 8.1864375 15.954125 8 15.483 8 15 C 8 13.897 8.897 13 10 13 L 13 13 L 13 10.363281 C 13 8.3622813 14.426125 6.7265 15.953125 6.1875 C 16.026125 8.0915 16.851937 8.879375 17.835938 9.609375 C 18.536938 10.130375 19 10.474 19 12 L 19 13 L 22 13 C 23.103 13 24 13.897 24 15 C 24 15.483 23.813562 15.954125 23.476562 16.328125 L 21.964844 18 L 24.5 18 C 25.879 18 27 19.121 27 20.5 C 27 21.879 25.879 23 24.5 23 L 21.923828 23 L 21 25 L 24.5 25 C 26.981 25 29 22.981 29 20.5 C 29 18.475 27.6555 16.758312 25.8125 16.195312 C 25.9365 15.811312 26 15.408 26 15 C 26 12.794 24.206 11 22 11 L 20.933594 11 C 20.676594 9.227 19.740344 8.5319062 19.027344 8.0039062 C 18.280344 7.4489063 17.785141 7.0814688 17.994141 5.1054688 L 18.111328 4 L 17 4 z M 17 15.5 L 14 21.96875 L 17 22.96875 L 17 28.5 L 20 22 L 17 21 L 17 15.5 z"></path></g></svg>
          Bostitter
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 10L12 3L19 10L19 20H5L5 10Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Home
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Explore
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#FFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>notification</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M43.4,29.4l-3.2-3.2A4.5,4.5,0,0,1,39,23.3V17C39,8.9,33.6,2,24,2S9,8.7,9,17v7a2.6,2.6,0,0,1-.7,1.7L4.6,29.4A2,2,0,0,0,4,30.8V38a2,2,0,0,0,2,2H17.1a7,7,0,0,0,13.8,0H42a2,2,0,0,0,2-2V30.8A2,2,0,0,0,43.4,29.4ZM40,36H8V31.7l3.1-3.2A6.4,6.4,0,0,0,13,24V17c0-5.3,2.9-11,11-11s11,5.9,11,11v6.3A8.6,8.6,0,0,0,37.3,29L40,31.7Z"></path> </g> </g> </g></svg>
          Notifications
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Messages
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Grok
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#FFF" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
          Bookmarks
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Communities
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} fill="#FFF" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 17 4 C 14.162 4 11 6.6132812 11 10.363281 L 11 11 L 10 11 C 7.794 11 6 12.794 6 15 C 6 15.408 6.0645 15.811313 6.1875 16.195312 C 4.3455 16.758312 3 18.475 3 20.5 C 3 22.981 5.019 25 7.5 25 L 15 25 L 15 24.410156 L 10.769531 23 L 7.5 23 C 6.121 23 5 21.879 5 20.5 C 5 19.121 6.121 18 7.5 18 L 10.035156 18 L 8.5234375 16.328125 C 8.1864375 15.954125 8 15.483 8 15 C 8 13.897 8.897 13 10 13 L 13 13 L 13 10.363281 C 13 8.3622813 14.426125 6.7265 15.953125 6.1875 C 16.026125 8.0915 16.851937 8.879375 17.835938 9.609375 C 18.536938 10.130375 19 10.474 19 12 L 19 13 L 22 13 C 23.103 13 24 13.897 24 15 C 24 15.483 23.813562 15.954125 23.476562 16.328125 L 21.964844 18 L 24.5 18 C 25.879 18 27 19.121 27 20.5 C 27 21.879 25.879 23 24.5 23 L 21.923828 23 L 21 25 L 24.5 25 C 26.981 25 29 22.981 29 20.5 C 29 18.475 27.6555 16.758312 25.8125 16.195312 C 25.9365 15.811312 26 15.408 26 15 C 26 12.794 24.206 11 22 11 L 20.933594 11 C 20.676594 9.227 19.740344 8.5319062 19.027344 8.0039062 C 18.280344 7.4489063 17.785141 7.0814688 17.994141 5.1054688 L 18.111328 4 L 17 4 z M 17 15.5 L 14 21.96875 L 17 22.96875 L 17 28.5 L 20 22 L 17 21 L 17 15.5 z"></path></g></svg>
          Premium
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#FFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <path d="M10,1L3,9h4.5L6,15l7-8H8.5L10,1z"></path> </g></svg>
          Verified Orgs
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#FFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#FFF"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"> </path> </g> </g> </g> </g></svg>
          Profile
        </ALink>
        <ALink href="#">
          <svg style={{height:"1.6rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12H8.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12H12.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 12H16.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFF" stroke-width="2"></path> </g></svg>
          More
        </ALink>
      </nav>
      <ButtonContainer>
        <Button onClick={onLoginClick}>Login</Button>
        <Button onClick={onRegisterClick}>Register</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
