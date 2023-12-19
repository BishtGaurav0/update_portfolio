import styled from "styled-components";

export const EducationContainerWrapper = styled.div`
  #education {
    color: white;
    padding-top: 5%;
  }

  #education-card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .education-heading {
    text-align: center;
  }

  .educ {
    background: #2d343e;
    border-radius: 15px;
    padding: 20px;
    font-size: 22px;
    text-align: center;
  }

  .educ h3 {
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    .educ {
      margin-bottom: 30px;
      width: 80%;
    }
  }
`;
