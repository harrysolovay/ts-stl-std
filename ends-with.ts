import {IsExact, assert} from "conditional-type-checks";

export type EndsWith<Src extends string, Search extends string> = Src extends `${infer _T}${Search}` ? true : false;

assert<IsExact<EndsWith<"", "">, true>>(true);
assert<IsExact<EndsWith<"hello world", "">, true>>(true);
assert<IsExact<EndsWith<"hello world", "world">, true>>(true);
assert<IsExact<EndsWith<"hello world", "worl">, false>>(true);
