import { registerPlugin } from '@capacitor/core';

import type { hugoClassPlugin } from './definitions';

const hugoClass = registerPlugin<hugoClassPlugin>('hugoClass', {
  web: () => import('./web').then(m => new m.hugoClassWeb()),
});

export * from './definitions';
export { hugoClass };
