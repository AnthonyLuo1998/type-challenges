type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
  Res extends string = ""
> = From extends ""
  ? S
  : S extends `${infer X}${From}${infer Y}`
  ? ReplaceAll<`${Y}`, From, To, `${Res}${X}${To}`>
  : `${Res}${S}`;

type RA = ReplaceAll<"foobarfoobar", "ob", "b">;
