import styled from "styled-components";

export const AboutContainerWrapper = styled.div`
  #about {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 5%;
  }

  #about-me h1 {
    font-weight: 700;
  }

  #about-me {
    color: whitesmoke;
    padding: 30px;
    width: 50%;
  }

  #about-me p {
    text-align: justify;
    font-size: 20px;
    line-height: 160%;
  }

  #about-img img {
    height: 50vh;
  }

  #download-resume button {
    color: whitesmoke;
    font-weight: 600;
    background-color: #2ca46d;
    margin-top: 20px;
    padding: 15px;
    border-radius: 30px;
  }

  .download_icon {
    margin-left:20px;
    font-size : 20px
  }

  @media screen and (max-width: 768px) {
    #about-me {
      padding: 10px;
      width: 80%;
    }

    #about-img {
      display: none;
    }
  }
`;
