import { Equal } from "@type-challenges/utils";

// 递归实现
// export type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Rest]
//   ? Equal<X, U> extends true
//     ? true
//     : Includes<Rest, U>
//   : false;

// 利用对象伪造数组
// export type Includes<T extends readonly any[], U> = {
//   [K in keyof T]: Equal<T[K], U>;
// } extends false[]
//   ? false
//   : true;

// 利用对象伪造数组和number循环
export type Includes<T extends readonly any[], U> = true extends {
  [P in keyof T]: Equal<T[P], U>;
}[number]
  ? true
  : false;

type A = ["Kars", "Esidisi", "Wamuu", "Santana"];

type B = "Kars";

type C = true extends {
  [K in keyof A]: Equal<A[K], "Kars">;
}[number]
  ? true
  : false;
