import * as FaIcons from 'react-icons/fa';
import './NavBar.scss'

export const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        className: 'navtext'
    },
    {
        title: 'Add Notes',
        path: '/addnotes',
        icon: <FaIcons.FaPlus />,
        className: 'navtext'
    },
    {
        title: 'My Notes',
        path: '/mynotes',
        icon: <FaIcons.FaFile />,
        className: 'navtext'
    },

]