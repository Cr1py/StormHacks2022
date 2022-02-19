import * as FaIcons from 'react-icons/fa';

export const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        className: 'navtext'
    },
    {
        title: 'AddNotes',
        path: '/addnotes',
        icon: <FaIcons.FaPlus />,
        className: 'navtext'
    },
    {
        title: 'MyNotes',
        path: '/mynotes',
        icon: <FaIcons.FaFile />,
        className: 'navtext'
    },

]