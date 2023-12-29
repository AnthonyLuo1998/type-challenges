type Last<T extends any[]> = T extends [...infer args, infer P] ? P : never;
