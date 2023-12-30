type Space = " " | "\n" | "\t";

type Trim<S extends string> = S extends `${Space}${infer X}`
  ? Trim<X>
  : S extends `${infer Y}${Space}`
  ? Trim<Y>
  : S;
