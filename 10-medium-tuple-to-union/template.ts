// type TupleToUnion<T extends any[]> = T[number];

type TupleToUnion<T extends any[]> = T extends Array<infer X> ? X : never;
12 - medium - chainable - options;
