import styled from "styled-components";

export const SkillsContainerWrapper = styled.div`
  #skills {
    padding-top: 5%;
  }

  #skill_content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    row-gap: 3rem;
    color: white;
    margin-top: 30px;
  }

  #skill_content div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skill-heading {
    text-align: center;
    color: whitesmoke;
  }

  .skill_icon {
    font-size: 50px;
    padding: 15px;
    border-radius: 50%;
  }

  .html_icon {
    background-color: #e34c26;
  }

  .css_icon {
    background-color: #264de4;
  }

  .bootstrap_icon {
    background-color: #563d7c;
    color: #ffffff;
  }

  .js_icon {
    background-color: #f0db4f;
    color: #323330;
  }

  .react_icon {
    background-color: black;
    color: #61dbfb;
  }

  .mui_icon {
    color: #2196f3;
    background-color: white;
  }

  .antd_icon {
    background-color: #ffffff;
    color: #2196f3;
  }

  .redux_icon {
    background-color: white;
    color: #764abc;
  }

  .node_icon {
    background-color: #3c873a;
  }

  .express_icon {
    background-color: #f0db4f;
    color: black;
  }

  .firebase_icon {
    background-color: #ffffff;
    color: #f5820d;
  }

  .github_icon {
    background-color: #171515;
    color: #ffffff;
  }

  .bit_icon {
    background-color: #1a74ed;
    color: #ffffff;
  }

  .jira_icon {
    background-color: #1a74ed;
  }

  @media screen and (max-width: 768px) {
    #skill_content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
