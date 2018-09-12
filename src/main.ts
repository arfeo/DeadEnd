import { Game } from './components/Game';

import { globals } from './constants/globals';

window.onload = () => {
  globals.pageInstance = new Game();
};
