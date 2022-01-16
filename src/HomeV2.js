import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import Crest1 from './img/crests/crest_4.png';
import Crest2 from './img/crests/crest_5.png';

import DecisionsDiagram from './img/diagrams/decisions.jpg';
import TreeDiagram from './img/diagrams/tree.jpg';
import InheritanceDiagram from './img/diagrams/inheritance.jpg';

import LucasPortrait from './img/portraits/lucas.png';
import SaqifPortrait from './img/portraits/saqif.png';
import MichaelPortrait from './img/portraits/michael.png';

import QuestionMark from './img/placeholders/question_mark.jpeg';
import PlaceholderBanner from './img/placeholders/placeholder-banner.png';
import PlaceholderSquare from './img/placeholders/placeholder-square.jpeg';

import FrogFamily from './img/scenes/frog_family.png';
import ArtificerForest from './img/scenes/artificer_forest.png';
import DemonChanging from './img/scenes/demon_changing-2.png';
import MoonMonkeyCathedral from './img/scenes/moon_monkey_cathedral.png';

import Artificer from './img/races/artificer.jpg';
import Frog from './img/races/frog.jpg';
import Owl from './img/races/owl.jpg';

import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { HashLink as Link } from 'react-router-hash-link';

const Home = () => {
  // const inheritanceVideo = useRef();
  const sectionCommunity = useRef();
  const [scrollOffset, setScrollOffset] = useState(0);
  const [sectionCommunityOffset, setSectionCommunityOffset] = useState()

  useEffect(() => {
    // if (inheritanceVideo.current) inheritanceVideo.current.play();
    const setOffset = () => {
      setScrollOffset(window.pageYOffset);
      setSectionCommunityOffset(sectionCommunity?.current?.offsetTop);
    }
    window.addEventListener('scroll', setOffset);
    return function cleanupListener() {
      window.removeEventListener('scroll', setOffset);
    }
  }, []);
  
  const heroBgX = scrollOffset/25 + 50;
  const heroBgY = scrollOffset/25 + 50;
  const heroFgX = scrollOffset/50 + 50;
  const heroFgY = scrollOffset/50 + 50;
  // const percentCommunity = window.innerHeight/(sectionCommunityOffset-scrollOffset);
  const communityBgX = (sectionCommunityOffset-scrollOffset)/25 + 50;
  const communityBgY = (sectionCommunityOffset-scrollOffset)/25 + 30;
  const bgPosition = (x, y) => {
    return { 'backgroundPosition': `${x}% ${y}%` };
  }

  return (
    <>
    </>
  );
}

export default Home;
