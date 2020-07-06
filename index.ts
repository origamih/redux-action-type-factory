export function actionTypesFactory<T extends string[]>(prefix: string, ...actionType: T): {
  [K in T[number]]: {
    begin: string,
    succeeded: string,
    failed: string
  }
};

export function actionTypesFactory(prefix: string, ...actionType: string[]): { [k: string]: {
  begin: string,
  succeeded: string,
  failed: string
} } {
  const prefixString = prefix.length ? `${prefix}/` : '';
  return actionType.reduce((acc, type) => ({
    ...acc,
    [type]: {
      begin: `${prefixString}${type}_BEGIN`,
      succeeded: `${prefixString}${type}_SUCCEEDED`,
      failed: `${prefixString}${type}_FAILED`,
    }
  }), {});
}