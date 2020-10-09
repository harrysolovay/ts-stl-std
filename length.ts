import {IsExact, assert} from "conditional-type-checks";

type Chars<Src extends string> = Src extends ""
  ? []
  : Src extends `${infer C0}${infer CRest}`
    ? [C0, ...(CRest extends "" ? [] : Chars<CRest>)]
    : never;

export type Length<Src extends string> = Chars<Src>["length"];

assert<IsExact<Length<"">, 0>>(true);
assert<IsExact<Length<"hello world">, 11>>(true);

const LIPSUM = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
// @ts-expect-error
assert<IsExact<Length<typeof LIPSUM>, number>>(true);
