import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  z-index: 1;
  border-radius: 16px;
  box-shadow: #FFF 0px 0px 16px;
`;

const MenuItem = styled.div`
  padding: 0.8rem 1rem;
  cursor: pointer;
  display: flex;
  width: 240px;
  gap: 4px;
`;

const FeedMoreOptions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Container ref={menuRef}>
      <svg onClick={toggleMenu} style={{height:"1rem"}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="rgb(113, 118, 123)" fill-rule="evenodd" d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"></path> </g></svg>
      <Menu isOpen={isOpen}>
        <MenuItem onClick={() => alert('Not interested in this post')}>
          <svg style={{height:"1rem"}} fill="#FFF" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" stroke="#FFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>sad-face-line</title> <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" ></path><circle cx="25.16" cy="14.28" r="1.8"></circle><circle cx="11.41" cy="14.28" r="1.8"></circle><path d="M18.16,20a9,9,0,0,0-7.33,3.78,1,1,0,1,0,1.63,1.16,7,7,0,0,1,11.31-.13,1,1,0,0,0,1.6-1.2A9,9,0,0,0,18.16,20Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
          <p>Not interested in this post</p>
        </MenuItem>
        <MenuItem onClick={() => alert('Unfollow @User')}>
          <svg style={{height:"1rem"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFF" stroke="#FFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7 6.586l2.121-2.122 1.415 1.415L20.414 19l2.122 2.121-1.415 1.415L19 20.414l-2.121 2.122-1.415-1.415L17.586 19l-2.122-2.121 1.415-1.415L19 17.586z"></path> </g> </g></svg>
          <p>Unfollow @User</p>
        </MenuItem>
        <MenuItem onClick={() => alert('Subscribe to @User')}>
        <svg style={{height:"1rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.691 8.507c0 2.847 1.582 5.29 3.806 5.29 2.223 0 3.803-2.443 3.803-5.29 0-2.846-1.348-4.51-3.803-4.51-2.456 0-3.806 1.664-3.806 4.51zM1.326 19.192c.82.537 2.879.805 6.174.805 3.295 0 5.353-.268 6.174-.804a.5.5 0 0 0 .225-.453c-.152-2.228-2.287-3.343-6.403-3.343-4.117 0-6.249 1.115-6.395 3.344a.5.5 0 0 0 .225.451zM18 17a1 1 0 0 1-1-1v-3h-3a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 0 1-1 1z" fill="#FFF"></path></g></svg>
          <p>Subscribe to @User</p>
        </MenuItem>
        <MenuItem onClick={() => alert('Add/remove @User from Lists')}>
          <svg style={{height:"1rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / List_Add"> <path id="Vector" d="M3 17H10M15 16H18M18 16H21M18 16V19M18 16V13M3 12H14M3 7H14" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          <p>Add/remove @User from Lists</p>
        </MenuItem>
        <MenuItem onClick={() => alert('Mute @User')}>
          <svg style={{height:"1rem"}} fill="#FFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.257 306.257" stroke="#FFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M19.747,121.968v70.068c0,21.499,17.43,38.924,38.924,38.924h40.703l112.088,73.612 c11.351,6.271,26.808-5.883,34.372-21.256L47.261,84.75C31.333,89.628,19.747,104.438,19.747,121.968z"></path> <path d="M250.386,41.816c0-21.5-19.464-51.253-38.924-38.924L108.71,76.499l141.676,141.677V41.816z"></path> <path d="M55.463,83.202l193.146,193.145l18.88,18.874c3.459,3.469,8.005,5.204,12.547,5.204c4.541,0,9.087-1.735,12.552-5.204 c6.934-6.929,6.934-18.17,0-25.104l-42.197-42.197L103.037,80.566L38.771,16.314c-3.461-3.469-8.005-5.204-12.549-5.204 c-4.544,0-9.085,1.735-12.552,5.204c-6.937,6.928-6.937,18.17,0,25.101L55.463,83.202z"></path> </g> </g></svg>
          <p>Mute @User</p>
        </MenuItem>
        <MenuItem onClick={() => alert('Block @User')}>
          <svg style={{height:"1rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.63605 5.63603L18.364 18.364M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p>Block @User</p>
        </MenuItem>
        <MenuItem onClick={() => alert('View post engagements')}>
          <svg style={{height:"1rem"}} fill="#FFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325.592 325.592" stroke="#FFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M81.762,248.649c9.66,0,17.52-7.859,17.52-17.52c0-2.326-0.466-4.545-1.292-6.578l36.888-37.708 c2.186,0.982,4.6,1.541,7.148,1.541c2.477,0,4.832-0.523,6.971-1.455L167,204.935c-0.694,1.883-1.092,3.908-1.092,6.029 c0,9.66,7.859,17.52,17.52,17.52c9.661,0,17.52-7.859,17.52-17.52c0-2.484-0.527-4.846-1.464-6.989l37.688-37.688l5.495,5.495 c1.334,1.334,3.123,2.05,4.95,2.05c0.757,0,1.521-0.123,2.262-0.376c2.526-0.862,4.342-3.087,4.681-5.735l2.953-23.081 c0.275-2.15-0.461-4.306-1.993-5.839c-1.532-1.531-3.682-2.269-5.839-1.993L226.6,139.76c-2.648,0.339-4.873,2.154-5.735,4.682 c-0.863,2.526-0.214,5.323,1.675,7.212l4.732,4.732l-38.059,38.06c-1.814-0.638-3.756-1.002-5.785-1.002 c-2.396,0-4.679,0.485-6.76,1.359l-18.132-18.134c0.642-1.82,1.009-3.768,1.009-5.805c0-9.66-7.859-17.52-17.52-17.52 c-9.661,0-17.521,7.859-17.521,17.52c0,1.962,0.338,3.843,0.936,5.605l-37.465,38.299c-1.935-0.737-4.023-1.159-6.214-1.159 c-9.661,0-17.521,7.859-17.521,17.52C64.241,240.79,72.101,248.649,81.762,248.649z M190.948,210.964c0,4.146-3.374,7.52-7.52,7.52 c-4.146,0-7.52-3.373-7.52-7.52s3.373-7.52,7.52-7.52C187.574,203.443,190.948,206.817,190.948,210.964z M142.025,163.345 c4.146,0,7.52,3.373,7.52,7.52c0,4.146-3.373,7.52-7.52,7.52s-7.521-3.374-7.521-7.52 C134.505,166.718,137.879,163.345,142.025,163.345z M81.762,223.609c4.146,0,7.52,3.374,7.52,7.52s-3.373,7.52-7.52,7.52 c-4.147,0-7.521-3.373-7.521-7.52S77.615,223.609,81.762,223.609z"></path> <path d="M308.092,8.463H17.5c-9.649,0-17.5,7.851-17.5,17.5v273.666c0,9.649,7.851,17.5,17.5,17.5h290.592 c9.649,0,17.5-7.851,17.5-17.5V25.963C325.592,16.313,317.741,8.463,308.092,8.463z M273.466,35.296c7.994,0,14.5,6.505,14.5,14.5 s-6.506,14.5-14.5,14.5c-7.996,0-14.5-6.505-14.5-14.5S265.47,35.296,273.466,35.296z M224.294,35.296 c7.995,0,14.5,6.505,14.5,14.5s-6.505,14.5-14.5,14.5c-7.995,0-14.5-6.505-14.5-14.5S216.299,35.296,224.294,35.296z M44.399,42.296h58.5c4.143,0,7.5,3.357,7.5,7.5s-3.357,7.5-7.5,7.5h-58.5c-4.143,0-7.5-3.357-7.5-7.5S40.257,42.296,44.399,42.296 z M297.796,286.806c0,1.258-1.024,2.283-2.283,2.283H30.079c-1.259,0-2.283-1.025-2.283-2.283V98.336h270V286.806z"></path> </g> </g></svg>
          <p>View post engagements</p>
        </MenuItem>
        <MenuItem onClick={() => alert('Embed post')}>
          <svg style={{height:"1rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9615 5.27473C15.1132 4.7437 14.8058 4.19021 14.2747 4.03849C13.7437 3.88677 13.1902 4.19426 13.0385 4.72529L9.03847 18.7253C8.88675 19.2563 9.19424 19.8098 9.72528 19.9615C10.2563 20.1133 10.8098 19.8058 10.9615 19.2747L14.9615 5.27473Z" fill="#FFF"></path> <path d="M5.7991 7.39879C6.13114 7.84012 6.04255 8.46705 5.60123 8.7991L2.40894 11.2009C1.87724 11.601 1.87723 12.399 2.40894 12.7991L5.60123 15.2009C6.04255 15.533 6.13114 16.1599 5.7991 16.6012C5.46705 17.0426 4.84012 17.1311 4.39879 16.7991L1.20651 14.3973C-0.388615 13.1971 -0.388621 10.8029 1.2065 9.60276L4.39879 7.20093C4.84012 6.86889 5.46705 6.95747 5.7991 7.39879Z" fill="#FFF"></path> <path d="M18.2009 16.6012C17.8689 16.1599 17.9575 15.533 18.3988 15.2009L21.5911 12.7991C22.1228 12.399 22.1228 11.601 21.5911 11.2009L18.3988 8.7991C17.9575 8.46705 17.8689 7.84012 18.2009 7.39879C18.533 6.95747 19.1599 6.86889 19.6012 7.20093L22.7935 9.60276C24.3886 10.8029 24.3886 13.1971 22.7935 14.3973L19.6012 16.7991C19.1599 17.1311 18.533 17.0426 18.2009 16.6012Z" fill="#FFF"></path> </g></svg>
          <p>Embed post</p>
        </MenuItem>
        <MenuItem onClick={() => alert('Report post')}>
          <svg style={{height:"1rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C3.44772 1 3 1.44772 3 2V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V13.5983C5.46602 13.3663 6.20273 13.0429 6.99251 12.8455C8.40911 12.4914 9.54598 12.6221 10.168 13.555C11.329 15.2964 13.5462 15.4498 15.2526 15.2798C17.0533 15.1004 18.8348 14.5107 19.7354 14.1776C20.5267 13.885 21 13.1336 21 12.3408V5.72337C21 4.17197 19.3578 3.26624 18.0489 3.85981C16.9875 4.34118 15.5774 4.87875 14.3031 5.0563C12.9699 5.24207 12.1956 4.9907 11.832 4.44544C10.5201 2.47763 8.27558 2.24466 6.66694 2.37871C6.0494 2.43018 5.47559 2.53816 5 2.65249V2C5 1.44772 4.55228 1 4 1ZM5 4.72107V11.4047C5.44083 11.2247 5.95616 11.043 6.50747 10.9052C8.09087 10.5094 10.454 10.3787 11.832 12.4455C12.3106 13.1634 13.4135 13.4531 15.0543 13.2897C16.5758 13.1381 18.1422 12.6321 19 12.3172V5.72337C19 5.67794 18.9081 5.66623 18.875 5.68126C17.7575 6.18804 16.1396 6.81972 14.5791 7.03716C13.0776 7.24639 11.2104 7.1185 10.168 5.55488C9.47989 4.52284 8.2244 4.25586 6.83304 4.3718C6.12405 4.43089 5.46427 4.58626 5 4.72107Z" fill="#FFF"></path> </g></svg>
          <p>Report post</p>
        </MenuItem>
        <MenuItem onClick={() => alert('Request Community Note')}>
        <svg style={{height:"1rem"}} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>megaphone [#FFFFF]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -4800.000000)" fill="#FFF"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M142,4653.6 L126.804,4650.561 C126.336,4650.467 126,4650.057 126,4649.58 L126,4648.42 C126,4647.943 126.336,4647.533 126.804,4647.439 L142,4644.4 L142,4653.6 Z M132,4654.362 C132,4654.995 131.419,4655.469 130.798,4655.341 L128.798,4654.93 C128.334,4654.834 128,4654.425 128,4653.95 L128,4652.8 L132,4653.6 L132,4654.362 Z M142,4641 L142,4642.4 L125.608,4645.678 C124.673,4645.865 124,4646.686 124,4647.64 L124,4650.36 C124,4651.314 124.673,4652.135 125.608,4652.322 L126,4652.4 L126,4654.724 C126,4655.673 126.667,4656.491 127.597,4656.683 L131.597,4657.506 C132.838,4657.761 134,4656.813 134,4655.547 L134,4654 L142,4655.6 L142,4657 C142,4657.552 142.448,4658 143,4658 C143.552,4658 144,4657.552 144,4657 L144,4641 C144,4640.448 143.552,4640 143,4640 C142.448,4640 142,4640.448 142,4641 L142,4641 Z" id="megaphone-[#FFFFF]"> </path> </g> </g> </g> </g></svg>
          <p>Request Community Note</p>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default FeedMoreOptions;
