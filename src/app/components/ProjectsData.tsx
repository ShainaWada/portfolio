import { AiFillGithub } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import web1 from '../images/web1.png';
import web2 from '../images/web2.png';
import web3 from '../images/web3.png';
import web4 from '../images/web4.png';

export const ProjectsData = [
  {
    title: '相性診断',
    image: web1,
    github: <AiFillGithub />,
    more: <CgDetailsMore />,
    link: 'https://love-calculator-mauve.vercel.app/',
    source: 'https://github.com/cyberph0bia/love-calculator',
  },
  {
    title: 'O X ゲーム',
    image: web2,
    github: <AiFillGithub />,
    more: <CgDetailsMore />,
    link: 'https://tic-tac-toe-two-liart.vercel.app/',
    source: 'https://github.com/ShainaWada/tic-tac-toe',
  },
  {
    title: 'ToDOアプリ',
    image: web3,
    github: <AiFillGithub />,
    more: <CgDetailsMore />,
    link: 'https://todo-roan-pi.vercel.app/',
    source: 'https://github.com/ShainaWada/todo',
  },
  {
    title: 'ポケモン図鑑',
    image: web4,
    github: <AiFillGithub />,
    more: <CgDetailsMore />,
    link: 'https://pokemon-library-iota.vercel.app/',
    source: 'https://github.com/ShainaWada/pokemon-library',
  },
];
