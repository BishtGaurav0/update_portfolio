import styled from "styled-components";

export const ExperienceContainerWrapper = styled.div`
  #experience {
    color: white;
    padding-top: 3%;
  }

  .experience-heading {
    text-align: center;
  }

  .exp {
    background: #2d343e;
    padding: 20px 50px;
    margin: 50px 100px;
    border-radius: 8px;
  }

  .exp h2 {
    margin-bottom: 6px;
  }

  .exp-details {
    display: flex;
    justify-content: space-between;
  }

  .exp-about li {
    padding: 4px;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    .exp {
      background: #2d343e;
      padding: 10px 30px;
      margin: 20px 20px;
      border-radius: 8px;
    }
  }
`;
