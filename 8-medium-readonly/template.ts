type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

type A = MyReadonly2<Todo1>;

type B = keyof Todo1;

const x: B = "description";
