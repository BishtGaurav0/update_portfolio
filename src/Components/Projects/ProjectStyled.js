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
    
    align-items: center;
    justify-items: center;
    justify-content: center;
   display: flex;
  flex-wrap: wrap; /* Enable wrapping */
  gap: 20px; /* Adjust as needed to create space between cards */
}


  }

  .card div{
      flex: 1 0 300px; /* Flex properties for each card */
  }

  .project_title {
    text-align:center;
    padding: 10px;
    font-weight : 600;
  }



  .project_image {
  object-fit: cover; /* Ensure the image covers the entire area */
}

.project_button {
  justify-content: flex-end; /* Align button to the right */
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
