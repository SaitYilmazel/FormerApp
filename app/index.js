import registerScreens from 'screens';
import {navigation} from 'utils';

// disable warning
console.disableYellowBox = true;

registerScreens();

navigation.singleScreen('WelcomeScreen');
// navigation.singleScreen('CreateFormScreen', 'Dilediğin şekilde forumunu tasarla',);