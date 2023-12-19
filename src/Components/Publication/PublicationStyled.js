import styled from "styled-components";

export const PublicationContainerWrapper = styled.div`
  #publication {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5%;
  }

  .publication-heading {
    text-align: center;
  }

  #publication-info {
    background: #2d343e;
    padding: 40px 80px;
    width: fit-content;
    text-align: center;
    border-radius: 15px;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    #publication-info {
      padding: 10px;
      margin: 10px;
    }
  }
`;
