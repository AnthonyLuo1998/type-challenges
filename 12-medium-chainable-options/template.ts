type Chainable<R = object> = {
  option<K extends string, V>(
    key: K extends keyof R ? never : K,
    value: V
  ): Chainable<Omit<R, K> & Record<K, V>>;
  get(): R;
};

// 为什么用Omit？去重
