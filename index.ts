export function actionTypesFactory<T extends string[]>(prefix: string, ...actionType: T): {
  [K in T[number]]: {
    default: K,
    begin: string,
    succeeded: string,
    failed: string,
    cancelled: string
  }
};

export function actionTypesFactory(prefix: string, ...actionType: string[]): { [k: string]: {
  default: string,
  begin: string,
  succeeded: string,
  failed: string,
  cancelled: string
} } {
  const prefixString = prefix.length ? `${prefix}/` : '';
  return actionType.reduce((acc, type) => ({
    ...acc,
    [type]: {
      default: `${prefixString}${type}`,
      begin: `${prefixString}${type}_BEGIN`,
      succeeded: `${prefixString}${type}_SUCCEEDED`,
      failed: `${prefixString}${type}_FAILED`,
      cancelled: `${prefixString}${type}_CANCELLED`,
    }
  }), {});
}
