import styled from "styled-components";

export const NavbarContainerWrapper = styled.div`
  #navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 80px;
    margin-bottom: 30px;
    z-index: 10;
    background-color: #2ca46d;
  }

  #navbar a {
    color: whitesmoke;
    font-size: 26px;
    background-color: #2ca46d;
    font-family: "Poppins";
    font-weight: 900;
  }

  #left-nav a {
    font-weight: 800;
  }

  .hamburger_icon,
  .close_icon {
    color: whitesmoke;
    font-size: 30px;
    cursor: pointer;
  }

  .nav-menu {
    background-color: #1ca16a;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 2000ms;
  }

  .nav-menu.active {
    padding-top: 6%;
    right: 0;
    transition: 350ms;
    z-index: 1;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    height: 60px;
    padding-bottom: 8px;
  }

  .nav-text a {
    color: whitesmoke;
    font-size: 20px;
    font-family: "Poppins";
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 5px;
  }

  .nav-text a:hover {
    background-color: #003153;
    transform: scale(1.1);
  }

  .nav-menu-items {
    width: 100%;
  }

  span {
    margin-left: 16px;
  }

  @media screen and (max-width: 768px) {
    #navbar {
      padding: 12px 40px;
    }

    .nav-menu {
      width: 180px;
    }

    .nav-menu.active {
      padding-top: 20%;
    }
  }
`;
