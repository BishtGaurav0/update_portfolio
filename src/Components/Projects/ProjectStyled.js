import styled from "styled-components";

export const ProjectsContainerWrapper = styled.div`
  #projects {
    color: white;
    padding-top: 5%;
  }

  #projects h1 {
    text-align: center;
  }

  #projects_card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
    gap: 4px;
    align-items: center;
    justify-items: center;
    margin-top: 30px;
  }

  .card div{
    padding-bottom :10px;
  }

  .project_title {
    text-align:center;
    padding: 10px;
    font-weight : 600;
  }

  .project_button {
    display: flex;
    justify-content: space-around;
  }
  
  @media screen and (max-width: 768px) {
    #projects_card {
      display: inline;
    }

    .MuiPaper-root {
      margin: 0 auto 30px auto;
    }
  }
`;
