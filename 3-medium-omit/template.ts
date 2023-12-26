type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type A = MyOmit<Todo, "title" | "description">;
