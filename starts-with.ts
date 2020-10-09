import {IsExact, assert} from "conditional-type-checks";

export type StartsWith<Src extends string, Search extends string> = Src extends `${Search}${infer _R}` ? true : false;

assert<IsExact<StartsWith<"", "">, true>>(true);
assert<IsExact<StartsWith<"hello world", "">, true>>(true);
assert<IsExact<StartsWith<"hello world", "hello">, true>>(true);
assert<IsExact<StartsWith<"hello world", "ello">, false>>(true);
