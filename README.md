# Experimental implementations of core string utils in TypeScript ^4.1's type system.

## [`Includes`](./length.ts)

### Definition

```ts
type Includes<Src extends string, Search extends string> = Src extends `${Search}${infer _Rest}`
  ? true
  : Src extends `${infer _C0}${infer Rest}`
    ? Rest extends ""
      ? false
      : Includes<Rest, Search>
    : never;
```

### Usage

```ts
type _0 = Includes<"", "">; // true
type _1 = Includes<"spikes brain chip", "">; // true
type _2 = Includes<"hello world", "o w">; // true
type _3 = Includes<"hello world", "goodbye">; // false

```

## [`IndexOf`](./index-of.ts)

### Definition

```ts
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

type IndexOf<Src extends string, Search extends string> = IndexOf._0<Src, Search>;
```

### Usage

```ts
type _0 = IndexOf<"", "">; // 0
type _1 = IndexOf<"", "x">; // -1
type _2 = IndexOf<"hello world", "world">; // 6
type _3 = IndexOf<"hello world", "d">; // 10
type _4 = IndexOf<"hello world", "x">; // -1
```

## [`Length`](./length.ts)

### Type Definition

```ts
type Chars<Src extends string> = Src extends ""
  ? []
  : Src extends `${infer C0}${infer CRest}`
    ? [C0, ...(CRest extends "" ? [] : Chars<CRest>)]
    : never;

type Length<Src extends string> = Chars<Src>["length"];
```

### Type Usage

```ts
type _0 = Length<"">; // 0
type _1 = Length<"hello world">; // 11
type _2 = Length<"lorem ipsum, length surpasses 16 chars">; // ts-error
```

## [`StartsWith`](./starts-with.ts)

### Type Definition

```ts
type StartsWith<Src extends string, Search extends string> =
  Src extends `${Search}${infer _R}`
    ? true
    : false;
```

### Type Usage

```ts
type _0 = StartsWith<"", "">; // true
type _1 = StartsWith<"hello world", "">; // true
type _2 = StartsWith<"hello world", "hello">; // true
type _3 = StartsWith<"hello world", "ello">; // false
```


## [`EndsWith`](./ends-with.ts)

### Type Definition

```ts
type EndsWith<Src extends string, Search extends string> =
  Src extends `${infer _T}${Search}`
    ? true
    : false;
```

### Type Usage

```ts
type _0 = EndsWith<"", "">; // true
type _1 = EndsWith<"hello world", "">; // true
type _2 = EndsWith<"hello world", "world">; // true
type _3 = EndsWith<"hello world", "worl">; // false
```

## License

This library is licensed under [the Apache 2.0 License](LICENSE).