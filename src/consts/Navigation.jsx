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
        segment: '/Dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon style={{fontSize: 18}}/>
    },

    {
        kind: 'header',
        title: 'PAGES'
    },
    {
        title: 'Authentication',
        icon: <PersonIcon style={{fontSize: 18}}/>,
        children: [
            {
                segment: '/sign-in',
                title: 'Sign in'
            },
            {
                segment: '/sign-up',
                title: 'Sign up'
            },
            {
                segment: '/password-reset',
                title: 'Passward Reset'
            },
            {
                segment: '/password-create',
                title: 'Password Create'
            },
            {
                segment: '/lock-screen',
                title: 'Lock Screen'
            },
            {
                segment: '/logout',
                title: 'Logout'
            },
        ]
    },
    {
        title: 'Pages',
        icon: <PagesIcon style={{fontSize: 18}}/>,
        children: [
            {
                segment: '/starter',
                title: 'Starter'
            },
            {
                segment: '/profile',
                title: 'Profile'
            },
            {
                segment: '/sign-up',
                title: 'Team'
            },
        ]
    },
    {
        segment: '/widgets',
        title: 'Widgets',
        icon: <WidgetsIcon style={{fontSize: 18}}/>
    },

    {
        kind: 'header',
        title: 'APPS'
    },
    {
        segment: '/calendar',
        title: 'Calendar',
        icon: <EventIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/api-keys',
        title: 'API keys', icon: <VpnKeyIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/contact',
        title: 'Contact', icon: <ContactsIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/leaderboard',
        title: 'LeaderBoard', icon: <LeaderboardIcon style={{fontSize: 18}}/>
    },

    {
        kind: 'header',
        title: 'COMPONENTS'
    },
    {
        segment: '/overview',
        title: 'Overview',
        icon: <DashboardIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/components',
        title: 'Components',
        icon: <CategoryIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/inputs',
        title: 'Inputs',
        icon: <InputIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/data-display',
        title: 'Data Display',
        icon: <TableChartIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/feedback',
        title: 'Feedback',
        icon: <FeedbackIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/surfaces',
        title: 'Surfaces',
        icon: <WebAssetIcon style={{fontSize: 18}}/>
    },
];

export default Navigation;