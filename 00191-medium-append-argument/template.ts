type AppendArgument<Fn, A> = Fn extends (...Rest: infer T) => infer X
  ? (...Rest: [...T, A]) => X
  : never;

type Result1 = (a: number, b: string, x: boolean) => number;

type R1 = Result1;
