import {IsExact, assert} from "conditional-type-checks";

export type Includes<Src extends string, Search extends string> = Src extends `${Search}${infer _Rest}`
  ? true
  : Src extends `${infer _C0}${infer Rest}`
    ? Rest extends ""
      ? false
      : Includes<Rest, Search>
    : never;

assert<IsExact<Includes<"", "">, true>>(true);
assert<IsExact<Includes<"spikes brain chip", "">, true>>(true);
assert<IsExact<Includes<"hello world", "o w">, true>>(true);
assert<IsExact<Includes<"hello world", "goodbye">, false>>(true);
