import img1  from '../components/projects/assets/Futuristic Virtual Reality Experience.jpeg';
import img2  from '../components/projects/assets/Futuristic VR Scene.jpeg';
import img3  from '../components/projects/assets/Virtual Reality Encounter.jpeg';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import rcr from '../images/rcr.png'
import dark from '../images/dark.png'
import todo from '../images/todo.png'
import TaskIcon from '@mui/icons-material/Task';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const FeaturedData = [
    {
      title: 'rcr',
      tag: 'RCR Institute',
      id: '1',
      logo: <AccountBalanceIcon/>,
      img: rcr,
      link: 'https://bharath-sunkara-rcr.netlify.app/',
      tech: ['react', 'redux', 'react-routing'],
      discription: 'This was implemented using HTML, CSS, and JavaScript.'
    },
    {
      title: 'darkmode',
      tag: 'dark-theme',
      id: '2',
      logo: <DarkModeIcon/>,
      img: dark,
      link: 'https://react-theme-dark.netlify.app/',
      tech: ['react', 'redux', 'react-routing'],
      discription: 'This was implemented using HTML, CSS, JavaScript and react'
    },
    {
      title: 'todo app',
      tag: 'add todos',
      id: '3',
      logo: <TaskIcon/>,
      img: todo,
      link: 'https://reacttodos-app.netlify.app/',
      tech: ['react', 'redux', 'react-routing'],
      discription: 'This was implemented using HTML, CSS, JavaScript and react'
    }
  ]

  export default FeaturedData