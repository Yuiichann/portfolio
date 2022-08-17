import HtmlLogo from '../assets/img/html_Logo.svg';
import JsLogo from '../assets/img/js_logo.svg';
import TsLogo from '../assets/img/ts_logo.svg';
import ReactLogo from '../assets/img/react_logo.svg';
import TailwindLogo from '../assets/img/tailwind_logo.svg';
import CssLogo from '../assets/img/css_logo.svg';

export interface Data {
  img: string;
  title: string;
}

const data: Data[] = [
  {
    title: 'HTML5',
    img: HtmlLogo,
  },
  {
    title: 'CSS3',
    img: CssLogo,
  },
  {
    title: 'JavaScript',
    img: JsLogo,
  },
  {
    title: 'TypeScript',
    img: TsLogo,
  },
  {
    title: 'ReactJS',
    img: ReactLogo,
  },
  {
    title: 'TailwindCSS',
    img: TailwindLogo,
  },
];

export default data;
