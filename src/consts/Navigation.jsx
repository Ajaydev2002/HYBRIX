import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from "@mui/icons-material/Person";
import PagesIcon from "@mui/icons-material/Pages";
import WidgetsIcon from "@mui/icons-material/Widgets";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EventIcon from "@mui/icons-material/Event";
import ContactsIcon from "@mui/icons-material/Contacts";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CategoryIcon from "@mui/icons-material/Category";
import InputIcon from "@mui/icons-material/Input";
import TableChartIcon from "@mui/icons-material/TableChart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import WebAssetIcon from "@mui/icons-material/WebAsset";


const Navigation = [
    {
        kind: 'header',
        title: 'MENU'
    },
    {
        segment: '/',
        title: 'Dashboard',
        icon: <DashboardIcon />
    },

    {
        kind: 'header',
        title: 'PAGES'
    },
    {
        segment: '/authentication',
        title: 'Authentication',
        icon: <PersonIcon />,
        children: [
            {
                segment: '/sign-in',
                title: 'Sign in'
            },
            {
                segment: '/sign-up',
                title: 'Sign up'
            },
        ]
    },
    {
        segment: '/pages',
        title: 'Pages',
        icon: <PagesIcon />
    },
    {
        segment: '/widgets',
        title: 'Widgets',
        icon: <WidgetsIcon />
    },

    {
        kind: 'header',
        title: 'APPS'
    },
    {
        segment: '/calendar',
        title: 'Calendar',
        icon: <EventIcon />
    },
    {
        segment: '/api-keys',
        title: 'API keys', icon: <VpnKeyIcon />
    },
    {
        segment: '/contact',
        title: 'Contact', icon: <ContactsIcon />
    },
    {
        segment: '/leaderboard',
        title: 'LeaderBoard', icon: <LeaderboardIcon />
    },

    {
        kind: 'header',
        title: 'COMPONENTS'
    },
    {
        segment: '/overview',
        title: 'Overview',
        icon: <DashboardIcon />
    },
    {
        segment: '/components',
        title: 'Components',
        icon: <CategoryIcon />
    },
    {
        segment: '/inputs',
        title: 'Inputs',
        icon: <InputIcon />
    },
    {
        segment: '/data-display',
        title: 'Data Display',
        icon: <TableChartIcon />
    },
    {
        segment: '/feedback',
        title: 'Feedback',
        icon: <FeedbackIcon />
    },
    {
        segment: '/surfaces',
        title: 'Surfaces',
        icon: <WebAssetIcon />
    },
];

export default Navigation;