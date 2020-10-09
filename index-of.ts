import {IsExact, assert} from "conditional-type-checks";

namespace IndexOf {
  export type _0<Src extends string, Search extends string, Visited extends string[] = []> =
   Src extends `${Search}${infer _Rest}`
    ? Visited["length"]
    : Src extends `${infer C0}${infer CRest}`
      ? CRest extends ""
        ? -1
        : _0<CRest, Search, [...Visited, C0]>
      : -1;
}

export type IndexOf<Src extends string, Search extends string> = IndexOf._0<Src, Search>;

assert<IsExact<IndexOf<"", "">, 0>>(true);
assert<IsExact<IndexOf<"", "x">, -1>>(true);
assert<IsExact<IndexOf<"hello world", "world">, 6>>(true);
assert<IsExact<IndexOf<"hello world", "d">, 10>>(true);
assert<IsExact<IndexOf<"hello world", "x">, -1>>(true);
