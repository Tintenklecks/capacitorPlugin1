import { WebPlugin } from '@capacitor/core';

import type { hugoClassPlugin } from './definitions';

export class hugoClassWeb extends WebPlugin implements hugoClassPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
