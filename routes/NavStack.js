import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Hello from '../screens/intro';
import Main from '../screens/Sec';
import Asheet from '../screens/actionsheet';
import Alert from '../screens/alertdialog';
import AlertInfo from '../screens/alert';
import Avatar from '../screens/avatar';
import Badge from '../screens/badge';
import Box from '../screens/box';
import Form from '../screens/forms';
import Divider from '../screens/divider';
import Fab from '../screens/fabb';
import Prog from '../screens/progress';
import Mod from '../screens/modal';
import Rad from '../screens/radio';
import Sel from '../screens/select';
import Slide from '../screens/slider';
import Spin from '../screens/spinner';
import Swit from '../screens/switch';
import Txt from '../screens/textarea';
import Toast from '../screens/toast';
import Tip from '../screens/tooltip';

const screens = {
    Hello: {
        screen: Hello,
        navigationOptions: {
            title: 'HELLO!',
            headerShown: false,
            headerStyle: {
                backgroundColor: '#EA1179',
            },
            headerTintColor: '#ffff'
        },
    },
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'REACT NATIVE COMPONENTS',
            headerShown: false,
            headerStyle: {
                backgroundColor: '#0079FF',
            },
        }
    },
    Asheet: {
        screen: Asheet,
        navigationOptions: {
            title: 'Actionsheet',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Alert: {
        screen: Alert,
        navigationOptions: {
            title: 'Alert Dialog',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    AlertInfo: {
        screen : AlertInfo,
        navigationOptions: {
            title: 'Alert',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Avatar: {
        screen: Avatar,
        navigationOptions: {
            title: 'Avatar',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Badge: {
        screen: Badge,
        navigationOptions: {
            title: 'Badge',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Box: {
        screen: Box,
        navigationOptions: {
            title: 'Box',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Form: {
        screen: Form,
        navigationOptions: {
            title: 'Forms',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Divider: {
        screen: Divider,
        navigationOptions: {
            title: 'Divider',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Fab: {
        screen: Fab,
        navigationOptions: {
            title: 'Fab',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Prog: {
        screen: Prog,
        navigationOptions: {
            title: 'Progress',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Mod: {
        screen: Mod,
        navigationOptions: {
            title: 'Modal',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Rad: {
        screen: Rad,
        navigationOptions: {
            title: 'Radio Button',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Sel: {
        screen: Sel,
        navigationOptions: {
            title: 'Select',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Slide: {
        screen: Slide,
        navigationOptions: {
            title: 'Slide',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Spin: {
        screen: Spin,
        navigationOptions: {
            title: 'Spinner',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Swit: {
        screen: Swit,
        navigationOptions: {
            title: 'Switch',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Txt: {
        screen: Txt,
        navigationOptions: {
            title: 'Textarea',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Toast: {
        screen: Toast,
        navigationOptions: {
            title: 'Toast',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
    Tip: {
        screen: Tip,
        navigationOptions: {
            title: 'Tooltip',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        
        }
    },
}

const stackNav = createStackNavigator(screens);

export default createAppContainer(stackNav);