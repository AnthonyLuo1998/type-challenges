type Pop<T extends any[]> = T extends [...infer K, infer args] ? K : [];
