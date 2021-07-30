export interface hugoClassPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
