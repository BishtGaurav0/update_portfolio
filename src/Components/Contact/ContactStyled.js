import styled from "styled-components";

export const ContactContainerWrapper = styled.div`
  #contact h1 {
    color: whitesmoke;
    text-align: center;
    padding-top: 5%;
  }

  #contact_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 5%;
  }

  #google-map iframe {
    padding: 20px;
    height: 50vh;
    width: 30vw;
  }

  #contact-me input,
  textarea {
    text-decoration: none;
    outline: none;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    color: whitesmoke;
    background-color: #2d343e;
  }

  .textarea textarea {
    width: 40vw;
    height: 20vh;
    font-family: sans-serif;
  }

  #send-message {
    text-align: center;
  }

  #contact-me button {
    color: whitesmoke;
    font-weight: 600;
    background-color: #2ca46d;
    margin-top: 20px;
    padding: 12px;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    #contact_section {
      display: flex;
      flex-direction: column;
    }

    #google-map iframe {
      height: 40vh;
      width: 85vw;
    }

    #contact-me {
      text-align: center;
    }

    #contact-me input,
    .textarea textarea {
      width: 80%;
    }
  }
`;
