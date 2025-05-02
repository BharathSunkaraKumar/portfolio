import rcr from '../images/rcr.png'
import dark from '../images/dark.png'
import portfolio from '../images/portfolio.png'
import todo from '../images/todo.png'

const projects = [
    {
        id: 1,
        title: 'portfolio',
        tech: ['html', 'css', 'javascript', 'react'],
        image: portfolio,
        navLinks: ['Live', 'github'],
        links: ['https://bharathsunkara.netlify.app/','https://github.com/BharathSunkaraKumar/portfolio']
    },
    {
        id: 2,
        title: 'rcr',
        tech: ['html', 'css', 'javascript'],
        image: rcr,
        navLinks: ['Live', 'github'],
        links: ['https://bharath-sunkara-rcr.netlify.app/','https://github.com/BharathSunkaraKumar/RCR-college']
    },
    {
        id: 3,
        title: "todos",
        tech: ['html', 'css', 'javascript', 'react'],
        image: todo,
        navLinks: ['Live', 'github'],
        links: ['https://reacttodos-app.netlify.app/','https://github.com/BharathSunkaraKumar/react-todos-app']
    },
    {
        id: 4,
        title: 'dark mode',
        tech: ['html', 'css', 'javascript', 'react'],
        image: dark,
        navLinks: ['Live','github'],
        links: ['https://react-theme-dark.netlify.app/','https://github.com/BharathSunkaraKumar/dark-mode']
    },
]

export default projects;