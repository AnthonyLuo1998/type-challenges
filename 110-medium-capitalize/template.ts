type MyCapitalize<S extends string> = S extends `${infer X}${infer Tail}`
  ? `${Uppercase<X>}${Tail}`
  : S;

type A = MyCapitalize<"foo">;
