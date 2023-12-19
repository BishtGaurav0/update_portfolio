import React from 'react'
import { AiFillHome,AiOutlineProject} from "react-icons/ai";
import { FcAbout} from "react-icons/fc";
import { GiSkills} from "react-icons/gi";
import { MdCastForEducation} from "react-icons/md";
import { FaLeanpub} from "react-icons/fa";
import { IoMdContact} from "react-icons/io";
import { GiClassicalKnowledge} from "react-icons/gi";



const HamburgerMenuData = [
    {
      title: 'Home',
      path: '#',
      icon: <AiFillHome />,
      className: 'nav-text home'
    },
    {
      title: 'About',
      path: '#about',
      icon: <FcAbout/>,
      className: 'nav-text about'
    },
    {
      title: 'Skills',
      path: '#skills',
      icon: <GiSkills/>,
      className: 'nav-text skills'
    },
    {
      title: 'Education',
      path: '#education',
      icon: <MdCastForEducation/>,
      className: 'nav-text education'
    },
    {
      title: 'Experience',
      path: '#experience',
      icon: < GiClassicalKnowledge/>,
      className: 'nav-text experience'
    },
    {
      title: 'Projects',
      path: '#projects',
      icon: <AiOutlineProject/>,
      className: 'nav-text projects'
    },
    {
        title: 'Publication',
        path: '#publication',
        icon: <FaLeanpub />,
        className: 'nav-text publication'
      },
      {
        title: 'Contact',
        path: '#contact',
        icon: <IoMdContact/>,
        className: 'nav-text contact'
      }
  ];

export default HamburgerMenuData