
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ticker
 * 
 */
export type Ticker = $Result.DefaultSelection<Prisma.$TickerPayload>
/**
 * Model TickerData
 * 
 */
export type TickerData = $Result.DefaultSelection<Prisma.$TickerDataPayload>
/**
 * Model TickerHandler
 * 
 */
export type TickerHandler = $Result.DefaultSelection<Prisma.$TickerHandlerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tickers
 * const tickers = await prisma.ticker.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tickers
   * const tickers = await prisma.ticker.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.ticker`: Exposes CRUD operations for the **Ticker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickers
    * const tickers = await prisma.ticker.findMany()
    * ```
    */
  get ticker(): Prisma.TickerDelegate<ExtArgs>;

  /**
   * `prisma.tickerData`: Exposes CRUD operations for the **TickerData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TickerData
    * const tickerData = await prisma.tickerData.findMany()
    * ```
    */
  get tickerData(): Prisma.TickerDataDelegate<ExtArgs>;

  /**
   * `prisma.tickerHandler`: Exposes CRUD operations for the **TickerHandler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TickerHandlers
    * const tickerHandlers = await prisma.tickerHandler.findMany()
    * ```
    */
  get tickerHandler(): Prisma.TickerHandlerDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ticker: 'Ticker',
    TickerData: 'TickerData',
    TickerHandler: 'TickerHandler'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'ticker' | 'tickerData' | 'tickerHandler'
      txIsolationLevel: never
    },
    model: {
      Ticker: {
        payload: Prisma.$TickerPayload<ExtArgs>
        fields: Prisma.TickerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TickerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TickerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          findFirst: {
            args: Prisma.TickerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TickerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          findMany: {
            args: Prisma.TickerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>[]
          }
          create: {
            args: Prisma.TickerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          createMany: {
            args: Prisma.TickerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TickerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          update: {
            args: Prisma.TickerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          deleteMany: {
            args: Prisma.TickerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TickerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TickerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          aggregate: {
            args: Prisma.TickerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicker>
          }
          groupBy: {
            args: Prisma.TickerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TickerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TickerFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TickerAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TickerCountArgs<ExtArgs>,
            result: $Utils.Optional<TickerCountAggregateOutputType> | number
          }
        }
      }
      TickerData: {
        payload: Prisma.$TickerDataPayload<ExtArgs>
        fields: Prisma.TickerDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TickerDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TickerDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload>
          }
          findFirst: {
            args: Prisma.TickerDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TickerDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload>
          }
          findMany: {
            args: Prisma.TickerDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload>[]
          }
          create: {
            args: Prisma.TickerDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload>
          }
          createMany: {
            args: Prisma.TickerDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TickerDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload>
          }
          update: {
            args: Prisma.TickerDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload>
          }
          deleteMany: {
            args: Prisma.TickerDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TickerDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TickerDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerDataPayload>
          }
          aggregate: {
            args: Prisma.TickerDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTickerData>
          }
          groupBy: {
            args: Prisma.TickerDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TickerDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TickerDataFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TickerDataAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TickerDataCountArgs<ExtArgs>,
            result: $Utils.Optional<TickerDataCountAggregateOutputType> | number
          }
        }
      }
      TickerHandler: {
        payload: Prisma.$TickerHandlerPayload<ExtArgs>
        fields: Prisma.TickerHandlerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TickerHandlerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TickerHandlerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload>
          }
          findFirst: {
            args: Prisma.TickerHandlerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TickerHandlerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload>
          }
          findMany: {
            args: Prisma.TickerHandlerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload>[]
          }
          create: {
            args: Prisma.TickerHandlerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload>
          }
          createMany: {
            args: Prisma.TickerHandlerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TickerHandlerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload>
          }
          update: {
            args: Prisma.TickerHandlerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload>
          }
          deleteMany: {
            args: Prisma.TickerHandlerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TickerHandlerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TickerHandlerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TickerHandlerPayload>
          }
          aggregate: {
            args: Prisma.TickerHandlerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTickerHandler>
          }
          groupBy: {
            args: Prisma.TickerHandlerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TickerHandlerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TickerHandlerFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TickerHandlerAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TickerHandlerCountArgs<ExtArgs>,
            result: $Utils.Optional<TickerHandlerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Ticker
   */

  export type AggregateTicker = {
    _count: TickerCountAggregateOutputType | null
    _min: TickerMinAggregateOutputType | null
    _max: TickerMaxAggregateOutputType | null
  }

  export type TickerMinAggregateOutputType = {
    id: string | null
    symbol: string | null
  }

  export type TickerMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
  }

  export type TickerCountAggregateOutputType = {
    id: number
    symbol: number
    _all: number
  }


  export type TickerMinAggregateInputType = {
    id?: true
    symbol?: true
  }

  export type TickerMaxAggregateInputType = {
    id?: true
    symbol?: true
  }

  export type TickerCountAggregateInputType = {
    id?: true
    symbol?: true
    _all?: true
  }

  export type TickerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticker to aggregate.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickers
    **/
    _count?: true | TickerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TickerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TickerMaxAggregateInputType
  }

  export type GetTickerAggregateType<T extends TickerAggregateArgs> = {
        [P in keyof T & keyof AggregateTicker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicker[P]>
      : GetScalarType<T[P], AggregateTicker[P]>
  }




  export type TickerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TickerWhereInput
    orderBy?: TickerOrderByWithAggregationInput | TickerOrderByWithAggregationInput[]
    by: TickerScalarFieldEnum[] | TickerScalarFieldEnum
    having?: TickerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TickerCountAggregateInputType | true
    _min?: TickerMinAggregateInputType
    _max?: TickerMaxAggregateInputType
  }

  export type TickerGroupByOutputType = {
    id: string
    symbol: string
    _count: TickerCountAggregateOutputType | null
    _min: TickerMinAggregateOutputType | null
    _max: TickerMaxAggregateOutputType | null
  }

  type GetTickerGroupByPayload<T extends TickerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TickerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TickerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TickerGroupByOutputType[P]>
            : GetScalarType<T[P], TickerGroupByOutputType[P]>
        }
      >
    >


  export type TickerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    tickerData?: boolean | Ticker$tickerDataArgs<ExtArgs>
    tickerHandlers?: boolean | Ticker$tickerHandlersArgs<ExtArgs>
  }, ExtArgs["result"]["ticker"]>

  export type TickerSelectScalar = {
    id?: boolean
    symbol?: boolean
  }

  export type TickerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tickerData?: boolean | Ticker$tickerDataArgs<ExtArgs>
    tickerHandlers?: boolean | Ticker$tickerHandlersArgs<ExtArgs>
  }


  export type $TickerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Ticker"
    objects: {
      tickerData: Prisma.$TickerDataPayload<ExtArgs> | null
      tickerHandlers: Prisma.$TickerHandlerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      symbol: string
    }, ExtArgs["result"]["ticker"]>
    composites: {}
  }


  type TickerGetPayload<S extends boolean | null | undefined | TickerDefaultArgs> = $Result.GetResult<Prisma.$TickerPayload, S>

  type TickerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TickerFindManyArgs, 'select' | 'include'> & {
      select?: TickerCountAggregateInputType | true
    }

  export interface TickerDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticker'], meta: { name: 'Ticker' } }
    /**
     * Find zero or one Ticker that matches the filter.
     * @param {TickerFindUniqueArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TickerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TickerFindUniqueArgs<ExtArgs>>
    ): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ticker that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TickerFindUniqueOrThrowArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TickerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ticker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindFirstArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TickerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerFindFirstArgs<ExtArgs>>
    ): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ticker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindFirstOrThrowArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TickerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tickers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickers
     * const tickers = await prisma.ticker.findMany()
     * 
     * // Get first 10 Tickers
     * const tickers = await prisma.ticker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tickerWithIdOnly = await prisma.ticker.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TickerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ticker.
     * @param {TickerCreateArgs} args - Arguments to create a Ticker.
     * @example
     * // Create one Ticker
     * const Ticker = await prisma.ticker.create({
     *   data: {
     *     // ... data to create a Ticker
     *   }
     * })
     * 
    **/
    create<T extends TickerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TickerCreateArgs<ExtArgs>>
    ): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tickers.
     *     @param {TickerCreateManyArgs} args - Arguments to create many Tickers.
     *     @example
     *     // Create many Tickers
     *     const ticker = await prisma.ticker.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TickerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticker.
     * @param {TickerDeleteArgs} args - Arguments to delete one Ticker.
     * @example
     * // Delete one Ticker
     * const Ticker = await prisma.ticker.delete({
     *   where: {
     *     // ... filter to delete one Ticker
     *   }
     * })
     * 
    **/
    delete<T extends TickerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TickerDeleteArgs<ExtArgs>>
    ): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ticker.
     * @param {TickerUpdateArgs} args - Arguments to update one Ticker.
     * @example
     * // Update one Ticker
     * const ticker = await prisma.ticker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TickerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TickerUpdateArgs<ExtArgs>>
    ): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tickers.
     * @param {TickerDeleteManyArgs} args - Arguments to filter Tickers to delete.
     * @example
     * // Delete a few Tickers
     * const { count } = await prisma.ticker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TickerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickers
     * const ticker = await prisma.ticker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TickerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TickerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticker.
     * @param {TickerUpsertArgs} args - Arguments to update or create a Ticker.
     * @example
     * // Update or create a Ticker
     * const ticker = await prisma.ticker.upsert({
     *   create: {
     *     // ... data to create a Ticker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticker we want to update
     *   }
     * })
    **/
    upsert<T extends TickerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TickerUpsertArgs<ExtArgs>>
    ): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Tickers that matches the filter.
     * @param {TickerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticker = await prisma.ticker.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TickerFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ticker.
     * @param {TickerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticker = await prisma.ticker.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TickerAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerCountArgs} args - Arguments to filter Tickers to count.
     * @example
     * // Count the number of Tickers
     * const count = await prisma.ticker.count({
     *   where: {
     *     // ... the filter for the Tickers we want to count
     *   }
     * })
    **/
    count<T extends TickerCountArgs>(
      args?: Subset<T, TickerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TickerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TickerAggregateArgs>(args: Subset<T, TickerAggregateArgs>): Prisma.PrismaPromise<GetTickerAggregateType<T>>

    /**
     * Group by Ticker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TickerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TickerGroupByArgs['orderBy'] }
        : { orderBy?: TickerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TickerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTickerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticker model
   */
  readonly fields: TickerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TickerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tickerData<T extends Ticker$tickerDataArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$tickerDataArgs<ExtArgs>>): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    tickerHandlers<T extends Ticker$tickerHandlersArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$tickerHandlersArgs<ExtArgs>>): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ticker model
   */ 
  interface TickerFieldRefs {
    readonly id: FieldRef<"Ticker", 'String'>
    readonly symbol: FieldRef<"Ticker", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Ticker findUnique
   */
  export type TickerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where: TickerWhereUniqueInput
  }


  /**
   * Ticker findUniqueOrThrow
   */
  export type TickerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where: TickerWhereUniqueInput
  }


  /**
   * Ticker findFirst
   */
  export type TickerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickers.
     */
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }


  /**
   * Ticker findFirstOrThrow
   */
  export type TickerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickers.
     */
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }


  /**
   * Ticker findMany
   */
  export type TickerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Tickers to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }


  /**
   * Ticker create
   */
  export type TickerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticker.
     */
    data: XOR<TickerCreateInput, TickerUncheckedCreateInput>
  }


  /**
   * Ticker createMany
   */
  export type TickerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickers.
     */
    data: TickerCreateManyInput | TickerCreateManyInput[]
  }


  /**
   * Ticker update
   */
  export type TickerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticker.
     */
    data: XOR<TickerUpdateInput, TickerUncheckedUpdateInput>
    /**
     * Choose, which Ticker to update.
     */
    where: TickerWhereUniqueInput
  }


  /**
   * Ticker updateMany
   */
  export type TickerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickers.
     */
    data: XOR<TickerUpdateManyMutationInput, TickerUncheckedUpdateManyInput>
    /**
     * Filter which Tickers to update
     */
    where?: TickerWhereInput
  }


  /**
   * Ticker upsert
   */
  export type TickerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticker to update in case it exists.
     */
    where: TickerWhereUniqueInput
    /**
     * In case the Ticker found by the `where` argument doesn't exist, create a new Ticker with this data.
     */
    create: XOR<TickerCreateInput, TickerUncheckedCreateInput>
    /**
     * In case the Ticker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TickerUpdateInput, TickerUncheckedUpdateInput>
  }


  /**
   * Ticker delete
   */
  export type TickerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter which Ticker to delete.
     */
    where: TickerWhereUniqueInput
  }


  /**
   * Ticker deleteMany
   */
  export type TickerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickers to delete
     */
    where?: TickerWhereInput
  }


  /**
   * Ticker findRaw
   */
  export type TickerFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Ticker aggregateRaw
   */
  export type TickerAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Ticker.tickerData
   */
  export type Ticker$tickerDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    where?: TickerDataWhereInput
  }


  /**
   * Ticker.tickerHandlers
   */
  export type Ticker$tickerHandlersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    where?: TickerHandlerWhereInput
  }


  /**
   * Ticker without action
   */
  export type TickerDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerInclude<ExtArgs> | null
  }



  /**
   * Model TickerData
   */

  export type AggregateTickerData = {
    _count: TickerDataCountAggregateOutputType | null
    _min: TickerDataMinAggregateOutputType | null
    _max: TickerDataMaxAggregateOutputType | null
  }

  export type TickerDataMinAggregateOutputType = {
    id: string | null
    price: string | null
    dividend: string | null
    dividendYield: string | null
    tickerId: string | null
  }

  export type TickerDataMaxAggregateOutputType = {
    id: string | null
    price: string | null
    dividend: string | null
    dividendYield: string | null
    tickerId: string | null
  }

  export type TickerDataCountAggregateOutputType = {
    id: number
    price: number
    dividend: number
    dividendYield: number
    tickerId: number
    _all: number
  }


  export type TickerDataMinAggregateInputType = {
    id?: true
    price?: true
    dividend?: true
    dividendYield?: true
    tickerId?: true
  }

  export type TickerDataMaxAggregateInputType = {
    id?: true
    price?: true
    dividend?: true
    dividendYield?: true
    tickerId?: true
  }

  export type TickerDataCountAggregateInputType = {
    id?: true
    price?: true
    dividend?: true
    dividendYield?: true
    tickerId?: true
    _all?: true
  }

  export type TickerDataAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TickerData to aggregate.
     */
    where?: TickerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TickerData to fetch.
     */
    orderBy?: TickerDataOrderByWithRelationInput | TickerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TickerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TickerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TickerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TickerData
    **/
    _count?: true | TickerDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TickerDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TickerDataMaxAggregateInputType
  }

  export type GetTickerDataAggregateType<T extends TickerDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTickerData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickerData[P]>
      : GetScalarType<T[P], AggregateTickerData[P]>
  }




  export type TickerDataGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TickerDataWhereInput
    orderBy?: TickerDataOrderByWithAggregationInput | TickerDataOrderByWithAggregationInput[]
    by: TickerDataScalarFieldEnum[] | TickerDataScalarFieldEnum
    having?: TickerDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TickerDataCountAggregateInputType | true
    _min?: TickerDataMinAggregateInputType
    _max?: TickerDataMaxAggregateInputType
  }

  export type TickerDataGroupByOutputType = {
    id: string
    price: string
    dividend: string | null
    dividendYield: string | null
    tickerId: string
    _count: TickerDataCountAggregateOutputType | null
    _min: TickerDataMinAggregateOutputType | null
    _max: TickerDataMaxAggregateOutputType | null
  }

  type GetTickerDataGroupByPayload<T extends TickerDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TickerDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TickerDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TickerDataGroupByOutputType[P]>
            : GetScalarType<T[P], TickerDataGroupByOutputType[P]>
        }
      >
    >


  export type TickerDataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    dividend?: boolean
    dividendYield?: boolean
    tickerId?: boolean
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickerData"]>

  export type TickerDataSelectScalar = {
    id?: boolean
    price?: boolean
    dividend?: boolean
    dividendYield?: boolean
    tickerId?: boolean
  }

  export type TickerDataInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }


  export type $TickerDataPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "TickerData"
    objects: {
      ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      price: string
      dividend: string | null
      dividendYield: string | null
      tickerId: string
    }, ExtArgs["result"]["tickerData"]>
    composites: {}
  }


  type TickerDataGetPayload<S extends boolean | null | undefined | TickerDataDefaultArgs> = $Result.GetResult<Prisma.$TickerDataPayload, S>

  type TickerDataCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TickerDataFindManyArgs, 'select' | 'include'> & {
      select?: TickerDataCountAggregateInputType | true
    }

  export interface TickerDataDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TickerData'], meta: { name: 'TickerData' } }
    /**
     * Find zero or one TickerData that matches the filter.
     * @param {TickerDataFindUniqueArgs} args - Arguments to find a TickerData
     * @example
     * // Get one TickerData
     * const tickerData = await prisma.tickerData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TickerDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TickerDataFindUniqueArgs<ExtArgs>>
    ): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TickerData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TickerDataFindUniqueOrThrowArgs} args - Arguments to find a TickerData
     * @example
     * // Get one TickerData
     * const tickerData = await prisma.tickerData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TickerDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TickerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerDataFindFirstArgs} args - Arguments to find a TickerData
     * @example
     * // Get one TickerData
     * const tickerData = await prisma.tickerData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TickerDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerDataFindFirstArgs<ExtArgs>>
    ): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TickerData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerDataFindFirstOrThrowArgs} args - Arguments to find a TickerData
     * @example
     * // Get one TickerData
     * const tickerData = await prisma.tickerData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TickerDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TickerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TickerData
     * const tickerData = await prisma.tickerData.findMany()
     * 
     * // Get first 10 TickerData
     * const tickerData = await prisma.tickerData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tickerDataWithIdOnly = await prisma.tickerData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TickerDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TickerData.
     * @param {TickerDataCreateArgs} args - Arguments to create a TickerData.
     * @example
     * // Create one TickerData
     * const TickerData = await prisma.tickerData.create({
     *   data: {
     *     // ... data to create a TickerData
     *   }
     * })
     * 
    **/
    create<T extends TickerDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TickerDataCreateArgs<ExtArgs>>
    ): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TickerData.
     *     @param {TickerDataCreateManyArgs} args - Arguments to create many TickerData.
     *     @example
     *     // Create many TickerData
     *     const tickerData = await prisma.tickerData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TickerDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TickerData.
     * @param {TickerDataDeleteArgs} args - Arguments to delete one TickerData.
     * @example
     * // Delete one TickerData
     * const TickerData = await prisma.tickerData.delete({
     *   where: {
     *     // ... filter to delete one TickerData
     *   }
     * })
     * 
    **/
    delete<T extends TickerDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TickerDataDeleteArgs<ExtArgs>>
    ): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TickerData.
     * @param {TickerDataUpdateArgs} args - Arguments to update one TickerData.
     * @example
     * // Update one TickerData
     * const tickerData = await prisma.tickerData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TickerDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TickerDataUpdateArgs<ExtArgs>>
    ): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TickerData.
     * @param {TickerDataDeleteManyArgs} args - Arguments to filter TickerData to delete.
     * @example
     * // Delete a few TickerData
     * const { count } = await prisma.tickerData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TickerDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TickerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TickerData
     * const tickerData = await prisma.tickerData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TickerDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TickerDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TickerData.
     * @param {TickerDataUpsertArgs} args - Arguments to update or create a TickerData.
     * @example
     * // Update or create a TickerData
     * const tickerData = await prisma.tickerData.upsert({
     *   create: {
     *     // ... data to create a TickerData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TickerData we want to update
     *   }
     * })
    **/
    upsert<T extends TickerDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TickerDataUpsertArgs<ExtArgs>>
    ): Prisma__TickerDataClient<$Result.GetResult<Prisma.$TickerDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TickerData that matches the filter.
     * @param {TickerDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tickerData = await prisma.tickerData.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TickerDataFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TickerData.
     * @param {TickerDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tickerData = await prisma.tickerData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TickerDataAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TickerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerDataCountArgs} args - Arguments to filter TickerData to count.
     * @example
     * // Count the number of TickerData
     * const count = await prisma.tickerData.count({
     *   where: {
     *     // ... the filter for the TickerData we want to count
     *   }
     * })
    **/
    count<T extends TickerDataCountArgs>(
      args?: Subset<T, TickerDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TickerDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TickerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TickerDataAggregateArgs>(args: Subset<T, TickerDataAggregateArgs>): Prisma.PrismaPromise<GetTickerDataAggregateType<T>>

    /**
     * Group by TickerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TickerDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TickerDataGroupByArgs['orderBy'] }
        : { orderBy?: TickerDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TickerDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTickerDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TickerData model
   */
  readonly fields: TickerDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TickerData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TickerDataClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TickerData model
   */ 
  interface TickerDataFieldRefs {
    readonly id: FieldRef<"TickerData", 'String'>
    readonly price: FieldRef<"TickerData", 'String'>
    readonly dividend: FieldRef<"TickerData", 'String'>
    readonly dividendYield: FieldRef<"TickerData", 'String'>
    readonly tickerId: FieldRef<"TickerData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TickerData findUnique
   */
  export type TickerDataFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * Filter, which TickerData to fetch.
     */
    where: TickerDataWhereUniqueInput
  }


  /**
   * TickerData findUniqueOrThrow
   */
  export type TickerDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * Filter, which TickerData to fetch.
     */
    where: TickerDataWhereUniqueInput
  }


  /**
   * TickerData findFirst
   */
  export type TickerDataFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * Filter, which TickerData to fetch.
     */
    where?: TickerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TickerData to fetch.
     */
    orderBy?: TickerDataOrderByWithRelationInput | TickerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TickerData.
     */
    cursor?: TickerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TickerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TickerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TickerData.
     */
    distinct?: TickerDataScalarFieldEnum | TickerDataScalarFieldEnum[]
  }


  /**
   * TickerData findFirstOrThrow
   */
  export type TickerDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * Filter, which TickerData to fetch.
     */
    where?: TickerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TickerData to fetch.
     */
    orderBy?: TickerDataOrderByWithRelationInput | TickerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TickerData.
     */
    cursor?: TickerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TickerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TickerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TickerData.
     */
    distinct?: TickerDataScalarFieldEnum | TickerDataScalarFieldEnum[]
  }


  /**
   * TickerData findMany
   */
  export type TickerDataFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * Filter, which TickerData to fetch.
     */
    where?: TickerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TickerData to fetch.
     */
    orderBy?: TickerDataOrderByWithRelationInput | TickerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TickerData.
     */
    cursor?: TickerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TickerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TickerData.
     */
    skip?: number
    distinct?: TickerDataScalarFieldEnum | TickerDataScalarFieldEnum[]
  }


  /**
   * TickerData create
   */
  export type TickerDataCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * The data needed to create a TickerData.
     */
    data: XOR<TickerDataCreateInput, TickerDataUncheckedCreateInput>
  }


  /**
   * TickerData createMany
   */
  export type TickerDataCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TickerData.
     */
    data: TickerDataCreateManyInput | TickerDataCreateManyInput[]
  }


  /**
   * TickerData update
   */
  export type TickerDataUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * The data needed to update a TickerData.
     */
    data: XOR<TickerDataUpdateInput, TickerDataUncheckedUpdateInput>
    /**
     * Choose, which TickerData to update.
     */
    where: TickerDataWhereUniqueInput
  }


  /**
   * TickerData updateMany
   */
  export type TickerDataUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TickerData.
     */
    data: XOR<TickerDataUpdateManyMutationInput, TickerDataUncheckedUpdateManyInput>
    /**
     * Filter which TickerData to update
     */
    where?: TickerDataWhereInput
  }


  /**
   * TickerData upsert
   */
  export type TickerDataUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * The filter to search for the TickerData to update in case it exists.
     */
    where: TickerDataWhereUniqueInput
    /**
     * In case the TickerData found by the `where` argument doesn't exist, create a new TickerData with this data.
     */
    create: XOR<TickerDataCreateInput, TickerDataUncheckedCreateInput>
    /**
     * In case the TickerData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TickerDataUpdateInput, TickerDataUncheckedUpdateInput>
  }


  /**
   * TickerData delete
   */
  export type TickerDataDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
    /**
     * Filter which TickerData to delete.
     */
    where: TickerDataWhereUniqueInput
  }


  /**
   * TickerData deleteMany
   */
  export type TickerDataDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TickerData to delete
     */
    where?: TickerDataWhereInput
  }


  /**
   * TickerData findRaw
   */
  export type TickerDataFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TickerData aggregateRaw
   */
  export type TickerDataAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TickerData without action
   */
  export type TickerDataDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerData
     */
    select?: TickerDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerDataInclude<ExtArgs> | null
  }



  /**
   * Model TickerHandler
   */

  export type AggregateTickerHandler = {
    _count: TickerHandlerCountAggregateOutputType | null
    _min: TickerHandlerMinAggregateOutputType | null
    _max: TickerHandlerMaxAggregateOutputType | null
  }

  export type TickerHandlerMinAggregateOutputType = {
    id: string | null
    tickerId: string | null
  }

  export type TickerHandlerMaxAggregateOutputType = {
    id: string | null
    tickerId: string | null
  }

  export type TickerHandlerCountAggregateOutputType = {
    id: number
    tickerId: number
    handlers: number
    _all: number
  }


  export type TickerHandlerMinAggregateInputType = {
    id?: true
    tickerId?: true
  }

  export type TickerHandlerMaxAggregateInputType = {
    id?: true
    tickerId?: true
  }

  export type TickerHandlerCountAggregateInputType = {
    id?: true
    tickerId?: true
    handlers?: true
    _all?: true
  }

  export type TickerHandlerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TickerHandler to aggregate.
     */
    where?: TickerHandlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TickerHandlers to fetch.
     */
    orderBy?: TickerHandlerOrderByWithRelationInput | TickerHandlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TickerHandlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TickerHandlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TickerHandlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TickerHandlers
    **/
    _count?: true | TickerHandlerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TickerHandlerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TickerHandlerMaxAggregateInputType
  }

  export type GetTickerHandlerAggregateType<T extends TickerHandlerAggregateArgs> = {
        [P in keyof T & keyof AggregateTickerHandler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickerHandler[P]>
      : GetScalarType<T[P], AggregateTickerHandler[P]>
  }




  export type TickerHandlerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TickerHandlerWhereInput
    orderBy?: TickerHandlerOrderByWithAggregationInput | TickerHandlerOrderByWithAggregationInput[]
    by: TickerHandlerScalarFieldEnum[] | TickerHandlerScalarFieldEnum
    having?: TickerHandlerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TickerHandlerCountAggregateInputType | true
    _min?: TickerHandlerMinAggregateInputType
    _max?: TickerHandlerMaxAggregateInputType
  }

  export type TickerHandlerGroupByOutputType = {
    id: string
    tickerId: string
    handlers: JsonValue[]
    _count: TickerHandlerCountAggregateOutputType | null
    _min: TickerHandlerMinAggregateOutputType | null
    _max: TickerHandlerMaxAggregateOutputType | null
  }

  type GetTickerHandlerGroupByPayload<T extends TickerHandlerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TickerHandlerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TickerHandlerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TickerHandlerGroupByOutputType[P]>
            : GetScalarType<T[P], TickerHandlerGroupByOutputType[P]>
        }
      >
    >


  export type TickerHandlerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tickerId?: boolean
    handlers?: boolean
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickerHandler"]>

  export type TickerHandlerSelectScalar = {
    id?: boolean
    tickerId?: boolean
    handlers?: boolean
  }

  export type TickerHandlerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }


  export type $TickerHandlerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "TickerHandler"
    objects: {
      ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      tickerId: string
      handlers: Prisma.JsonValue[]
    }, ExtArgs["result"]["tickerHandler"]>
    composites: {}
  }


  type TickerHandlerGetPayload<S extends boolean | null | undefined | TickerHandlerDefaultArgs> = $Result.GetResult<Prisma.$TickerHandlerPayload, S>

  type TickerHandlerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TickerHandlerFindManyArgs, 'select' | 'include'> & {
      select?: TickerHandlerCountAggregateInputType | true
    }

  export interface TickerHandlerDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TickerHandler'], meta: { name: 'TickerHandler' } }
    /**
     * Find zero or one TickerHandler that matches the filter.
     * @param {TickerHandlerFindUniqueArgs} args - Arguments to find a TickerHandler
     * @example
     * // Get one TickerHandler
     * const tickerHandler = await prisma.tickerHandler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TickerHandlerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TickerHandlerFindUniqueArgs<ExtArgs>>
    ): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TickerHandler that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TickerHandlerFindUniqueOrThrowArgs} args - Arguments to find a TickerHandler
     * @example
     * // Get one TickerHandler
     * const tickerHandler = await prisma.tickerHandler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TickerHandlerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerHandlerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TickerHandler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerHandlerFindFirstArgs} args - Arguments to find a TickerHandler
     * @example
     * // Get one TickerHandler
     * const tickerHandler = await prisma.tickerHandler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TickerHandlerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerHandlerFindFirstArgs<ExtArgs>>
    ): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TickerHandler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerHandlerFindFirstOrThrowArgs} args - Arguments to find a TickerHandler
     * @example
     * // Get one TickerHandler
     * const tickerHandler = await prisma.tickerHandler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TickerHandlerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerHandlerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TickerHandlers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerHandlerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TickerHandlers
     * const tickerHandlers = await prisma.tickerHandler.findMany()
     * 
     * // Get first 10 TickerHandlers
     * const tickerHandlers = await prisma.tickerHandler.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tickerHandlerWithIdOnly = await prisma.tickerHandler.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TickerHandlerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerHandlerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TickerHandler.
     * @param {TickerHandlerCreateArgs} args - Arguments to create a TickerHandler.
     * @example
     * // Create one TickerHandler
     * const TickerHandler = await prisma.tickerHandler.create({
     *   data: {
     *     // ... data to create a TickerHandler
     *   }
     * })
     * 
    **/
    create<T extends TickerHandlerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TickerHandlerCreateArgs<ExtArgs>>
    ): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TickerHandlers.
     *     @param {TickerHandlerCreateManyArgs} args - Arguments to create many TickerHandlers.
     *     @example
     *     // Create many TickerHandlers
     *     const tickerHandler = await prisma.tickerHandler.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TickerHandlerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerHandlerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TickerHandler.
     * @param {TickerHandlerDeleteArgs} args - Arguments to delete one TickerHandler.
     * @example
     * // Delete one TickerHandler
     * const TickerHandler = await prisma.tickerHandler.delete({
     *   where: {
     *     // ... filter to delete one TickerHandler
     *   }
     * })
     * 
    **/
    delete<T extends TickerHandlerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TickerHandlerDeleteArgs<ExtArgs>>
    ): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TickerHandler.
     * @param {TickerHandlerUpdateArgs} args - Arguments to update one TickerHandler.
     * @example
     * // Update one TickerHandler
     * const tickerHandler = await prisma.tickerHandler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TickerHandlerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TickerHandlerUpdateArgs<ExtArgs>>
    ): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TickerHandlers.
     * @param {TickerHandlerDeleteManyArgs} args - Arguments to filter TickerHandlers to delete.
     * @example
     * // Delete a few TickerHandlers
     * const { count } = await prisma.tickerHandler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TickerHandlerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TickerHandlerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TickerHandlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerHandlerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TickerHandlers
     * const tickerHandler = await prisma.tickerHandler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TickerHandlerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TickerHandlerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TickerHandler.
     * @param {TickerHandlerUpsertArgs} args - Arguments to update or create a TickerHandler.
     * @example
     * // Update or create a TickerHandler
     * const tickerHandler = await prisma.tickerHandler.upsert({
     *   create: {
     *     // ... data to create a TickerHandler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TickerHandler we want to update
     *   }
     * })
    **/
    upsert<T extends TickerHandlerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TickerHandlerUpsertArgs<ExtArgs>>
    ): Prisma__TickerHandlerClient<$Result.GetResult<Prisma.$TickerHandlerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TickerHandlers that matches the filter.
     * @param {TickerHandlerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tickerHandler = await prisma.tickerHandler.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TickerHandlerFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TickerHandler.
     * @param {TickerHandlerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tickerHandler = await prisma.tickerHandler.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TickerHandlerAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TickerHandlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerHandlerCountArgs} args - Arguments to filter TickerHandlers to count.
     * @example
     * // Count the number of TickerHandlers
     * const count = await prisma.tickerHandler.count({
     *   where: {
     *     // ... the filter for the TickerHandlers we want to count
     *   }
     * })
    **/
    count<T extends TickerHandlerCountArgs>(
      args?: Subset<T, TickerHandlerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TickerHandlerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TickerHandler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerHandlerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TickerHandlerAggregateArgs>(args: Subset<T, TickerHandlerAggregateArgs>): Prisma.PrismaPromise<GetTickerHandlerAggregateType<T>>

    /**
     * Group by TickerHandler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerHandlerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TickerHandlerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TickerHandlerGroupByArgs['orderBy'] }
        : { orderBy?: TickerHandlerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TickerHandlerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTickerHandlerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TickerHandler model
   */
  readonly fields: TickerHandlerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TickerHandler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TickerHandlerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TickerHandler model
   */ 
  interface TickerHandlerFieldRefs {
    readonly id: FieldRef<"TickerHandler", 'String'>
    readonly tickerId: FieldRef<"TickerHandler", 'String'>
    readonly handlers: FieldRef<"TickerHandler", 'Json[]'>
  }
    

  // Custom InputTypes

  /**
   * TickerHandler findUnique
   */
  export type TickerHandlerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * Filter, which TickerHandler to fetch.
     */
    where: TickerHandlerWhereUniqueInput
  }


  /**
   * TickerHandler findUniqueOrThrow
   */
  export type TickerHandlerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * Filter, which TickerHandler to fetch.
     */
    where: TickerHandlerWhereUniqueInput
  }


  /**
   * TickerHandler findFirst
   */
  export type TickerHandlerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * Filter, which TickerHandler to fetch.
     */
    where?: TickerHandlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TickerHandlers to fetch.
     */
    orderBy?: TickerHandlerOrderByWithRelationInput | TickerHandlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TickerHandlers.
     */
    cursor?: TickerHandlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TickerHandlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TickerHandlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TickerHandlers.
     */
    distinct?: TickerHandlerScalarFieldEnum | TickerHandlerScalarFieldEnum[]
  }


  /**
   * TickerHandler findFirstOrThrow
   */
  export type TickerHandlerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * Filter, which TickerHandler to fetch.
     */
    where?: TickerHandlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TickerHandlers to fetch.
     */
    orderBy?: TickerHandlerOrderByWithRelationInput | TickerHandlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TickerHandlers.
     */
    cursor?: TickerHandlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TickerHandlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TickerHandlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TickerHandlers.
     */
    distinct?: TickerHandlerScalarFieldEnum | TickerHandlerScalarFieldEnum[]
  }


  /**
   * TickerHandler findMany
   */
  export type TickerHandlerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * Filter, which TickerHandlers to fetch.
     */
    where?: TickerHandlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TickerHandlers to fetch.
     */
    orderBy?: TickerHandlerOrderByWithRelationInput | TickerHandlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TickerHandlers.
     */
    cursor?: TickerHandlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TickerHandlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TickerHandlers.
     */
    skip?: number
    distinct?: TickerHandlerScalarFieldEnum | TickerHandlerScalarFieldEnum[]
  }


  /**
   * TickerHandler create
   */
  export type TickerHandlerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * The data needed to create a TickerHandler.
     */
    data: XOR<TickerHandlerCreateInput, TickerHandlerUncheckedCreateInput>
  }


  /**
   * TickerHandler createMany
   */
  export type TickerHandlerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TickerHandlers.
     */
    data: TickerHandlerCreateManyInput | TickerHandlerCreateManyInput[]
  }


  /**
   * TickerHandler update
   */
  export type TickerHandlerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * The data needed to update a TickerHandler.
     */
    data: XOR<TickerHandlerUpdateInput, TickerHandlerUncheckedUpdateInput>
    /**
     * Choose, which TickerHandler to update.
     */
    where: TickerHandlerWhereUniqueInput
  }


  /**
   * TickerHandler updateMany
   */
  export type TickerHandlerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TickerHandlers.
     */
    data: XOR<TickerHandlerUpdateManyMutationInput, TickerHandlerUncheckedUpdateManyInput>
    /**
     * Filter which TickerHandlers to update
     */
    where?: TickerHandlerWhereInput
  }


  /**
   * TickerHandler upsert
   */
  export type TickerHandlerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * The filter to search for the TickerHandler to update in case it exists.
     */
    where: TickerHandlerWhereUniqueInput
    /**
     * In case the TickerHandler found by the `where` argument doesn't exist, create a new TickerHandler with this data.
     */
    create: XOR<TickerHandlerCreateInput, TickerHandlerUncheckedCreateInput>
    /**
     * In case the TickerHandler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TickerHandlerUpdateInput, TickerHandlerUncheckedUpdateInput>
  }


  /**
   * TickerHandler delete
   */
  export type TickerHandlerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
    /**
     * Filter which TickerHandler to delete.
     */
    where: TickerHandlerWhereUniqueInput
  }


  /**
   * TickerHandler deleteMany
   */
  export type TickerHandlerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TickerHandlers to delete
     */
    where?: TickerHandlerWhereInput
  }


  /**
   * TickerHandler findRaw
   */
  export type TickerHandlerFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TickerHandler aggregateRaw
   */
  export type TickerHandlerAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TickerHandler without action
   */
  export type TickerHandlerDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerHandler
     */
    select?: TickerHandlerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TickerHandlerInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TickerScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol'
  };

  export type TickerScalarFieldEnum = (typeof TickerScalarFieldEnum)[keyof typeof TickerScalarFieldEnum]


  export const TickerDataScalarFieldEnum: {
    id: 'id',
    price: 'price',
    dividend: 'dividend',
    dividendYield: 'dividendYield',
    tickerId: 'tickerId'
  };

  export type TickerDataScalarFieldEnum = (typeof TickerDataScalarFieldEnum)[keyof typeof TickerDataScalarFieldEnum]


  export const TickerHandlerScalarFieldEnum: {
    id: 'id',
    tickerId: 'tickerId',
    handlers: 'handlers'
  };

  export type TickerHandlerScalarFieldEnum = (typeof TickerHandlerScalarFieldEnum)[keyof typeof TickerHandlerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TickerWhereInput = {
    AND?: TickerWhereInput | TickerWhereInput[]
    OR?: TickerWhereInput[]
    NOT?: TickerWhereInput | TickerWhereInput[]
    id?: StringFilter<"Ticker"> | string
    symbol?: StringFilter<"Ticker"> | string
    tickerData?: XOR<TickerDataNullableRelationFilter, TickerDataWhereInput> | null
    tickerHandlers?: XOR<TickerHandlerNullableRelationFilter, TickerHandlerWhereInput> | null
  }

  export type TickerOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    tickerData?: TickerDataOrderByWithRelationInput
    tickerHandlers?: TickerHandlerOrderByWithRelationInput
  }

  export type TickerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol?: string
    AND?: TickerWhereInput | TickerWhereInput[]
    OR?: TickerWhereInput[]
    NOT?: TickerWhereInput | TickerWhereInput[]
    tickerData?: XOR<TickerDataNullableRelationFilter, TickerDataWhereInput> | null
    tickerHandlers?: XOR<TickerHandlerNullableRelationFilter, TickerHandlerWhereInput> | null
  }, "id" | "symbol">

  export type TickerOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    _count?: TickerCountOrderByAggregateInput
    _max?: TickerMaxOrderByAggregateInput
    _min?: TickerMinOrderByAggregateInput
  }

  export type TickerScalarWhereWithAggregatesInput = {
    AND?: TickerScalarWhereWithAggregatesInput | TickerScalarWhereWithAggregatesInput[]
    OR?: TickerScalarWhereWithAggregatesInput[]
    NOT?: TickerScalarWhereWithAggregatesInput | TickerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticker"> | string
    symbol?: StringWithAggregatesFilter<"Ticker"> | string
  }

  export type TickerDataWhereInput = {
    AND?: TickerDataWhereInput | TickerDataWhereInput[]
    OR?: TickerDataWhereInput[]
    NOT?: TickerDataWhereInput | TickerDataWhereInput[]
    id?: StringFilter<"TickerData"> | string
    price?: StringFilter<"TickerData"> | string
    dividend?: StringNullableFilter<"TickerData"> | string | null
    dividendYield?: StringNullableFilter<"TickerData"> | string | null
    tickerId?: StringFilter<"TickerData"> | string
    ticker?: XOR<TickerRelationFilter, TickerWhereInput>
  }

  export type TickerDataOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    dividend?: SortOrder
    dividendYield?: SortOrder
    tickerId?: SortOrder
    ticker?: TickerOrderByWithRelationInput
  }

  export type TickerDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tickerId?: string
    AND?: TickerDataWhereInput | TickerDataWhereInput[]
    OR?: TickerDataWhereInput[]
    NOT?: TickerDataWhereInput | TickerDataWhereInput[]
    price?: StringFilter<"TickerData"> | string
    dividend?: StringNullableFilter<"TickerData"> | string | null
    dividendYield?: StringNullableFilter<"TickerData"> | string | null
    ticker?: XOR<TickerRelationFilter, TickerWhereInput>
  }, "id" | "tickerId">

  export type TickerDataOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    dividend?: SortOrder
    dividendYield?: SortOrder
    tickerId?: SortOrder
    _count?: TickerDataCountOrderByAggregateInput
    _max?: TickerDataMaxOrderByAggregateInput
    _min?: TickerDataMinOrderByAggregateInput
  }

  export type TickerDataScalarWhereWithAggregatesInput = {
    AND?: TickerDataScalarWhereWithAggregatesInput | TickerDataScalarWhereWithAggregatesInput[]
    OR?: TickerDataScalarWhereWithAggregatesInput[]
    NOT?: TickerDataScalarWhereWithAggregatesInput | TickerDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TickerData"> | string
    price?: StringWithAggregatesFilter<"TickerData"> | string
    dividend?: StringNullableWithAggregatesFilter<"TickerData"> | string | null
    dividendYield?: StringNullableWithAggregatesFilter<"TickerData"> | string | null
    tickerId?: StringWithAggregatesFilter<"TickerData"> | string
  }

  export type TickerHandlerWhereInput = {
    AND?: TickerHandlerWhereInput | TickerHandlerWhereInput[]
    OR?: TickerHandlerWhereInput[]
    NOT?: TickerHandlerWhereInput | TickerHandlerWhereInput[]
    id?: StringFilter<"TickerHandler"> | string
    tickerId?: StringFilter<"TickerHandler"> | string
    handlers?: JsonNullableListFilter<"TickerHandler">
    ticker?: XOR<TickerRelationFilter, TickerWhereInput>
  }

  export type TickerHandlerOrderByWithRelationInput = {
    id?: SortOrder
    tickerId?: SortOrder
    handlers?: SortOrder
    ticker?: TickerOrderByWithRelationInput
  }

  export type TickerHandlerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tickerId?: string
    AND?: TickerHandlerWhereInput | TickerHandlerWhereInput[]
    OR?: TickerHandlerWhereInput[]
    NOT?: TickerHandlerWhereInput | TickerHandlerWhereInput[]
    handlers?: JsonNullableListFilter<"TickerHandler">
    ticker?: XOR<TickerRelationFilter, TickerWhereInput>
  }, "id" | "tickerId">

  export type TickerHandlerOrderByWithAggregationInput = {
    id?: SortOrder
    tickerId?: SortOrder
    handlers?: SortOrder
    _count?: TickerHandlerCountOrderByAggregateInput
    _max?: TickerHandlerMaxOrderByAggregateInput
    _min?: TickerHandlerMinOrderByAggregateInput
  }

  export type TickerHandlerScalarWhereWithAggregatesInput = {
    AND?: TickerHandlerScalarWhereWithAggregatesInput | TickerHandlerScalarWhereWithAggregatesInput[]
    OR?: TickerHandlerScalarWhereWithAggregatesInput[]
    NOT?: TickerHandlerScalarWhereWithAggregatesInput | TickerHandlerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TickerHandler"> | string
    tickerId?: StringWithAggregatesFilter<"TickerHandler"> | string
    handlers?: JsonNullableListFilter<"TickerHandler">
  }

  export type TickerCreateInput = {
    id?: string
    symbol: string
    tickerData?: TickerDataCreateNestedOneWithoutTickerInput
    tickerHandlers?: TickerHandlerCreateNestedOneWithoutTickerInput
  }

  export type TickerUncheckedCreateInput = {
    id?: string
    symbol: string
    tickerData?: TickerDataUncheckedCreateNestedOneWithoutTickerInput
    tickerHandlers?: TickerHandlerUncheckedCreateNestedOneWithoutTickerInput
  }

  export type TickerUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    tickerData?: TickerDataUpdateOneWithoutTickerNestedInput
    tickerHandlers?: TickerHandlerUpdateOneWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    tickerData?: TickerDataUncheckedUpdateOneWithoutTickerNestedInput
    tickerHandlers?: TickerHandlerUncheckedUpdateOneWithoutTickerNestedInput
  }

  export type TickerCreateManyInput = {
    id?: string
    symbol: string
  }

  export type TickerUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type TickerUncheckedUpdateManyInput = {
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type TickerDataCreateInput = {
    id?: string
    price: string
    dividend?: string | null
    dividendYield?: string | null
    ticker: TickerCreateNestedOneWithoutTickerDataInput
  }

  export type TickerDataUncheckedCreateInput = {
    id?: string
    price: string
    dividend?: string | null
    dividendYield?: string | null
    tickerId: string
  }

  export type TickerDataUpdateInput = {
    price?: StringFieldUpdateOperationsInput | string
    dividend?: NullableStringFieldUpdateOperationsInput | string | null
    dividendYield?: NullableStringFieldUpdateOperationsInput | string | null
    ticker?: TickerUpdateOneRequiredWithoutTickerDataNestedInput
  }

  export type TickerDataUncheckedUpdateInput = {
    price?: StringFieldUpdateOperationsInput | string
    dividend?: NullableStringFieldUpdateOperationsInput | string | null
    dividendYield?: NullableStringFieldUpdateOperationsInput | string | null
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type TickerDataCreateManyInput = {
    id?: string
    price: string
    dividend?: string | null
    dividendYield?: string | null
    tickerId: string
  }

  export type TickerDataUpdateManyMutationInput = {
    price?: StringFieldUpdateOperationsInput | string
    dividend?: NullableStringFieldUpdateOperationsInput | string | null
    dividendYield?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TickerDataUncheckedUpdateManyInput = {
    price?: StringFieldUpdateOperationsInput | string
    dividend?: NullableStringFieldUpdateOperationsInput | string | null
    dividendYield?: NullableStringFieldUpdateOperationsInput | string | null
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type TickerHandlerCreateInput = {
    id?: string
    handlers?: TickerHandlerCreatehandlersInput | InputJsonValue[]
    ticker: TickerCreateNestedOneWithoutTickerHandlersInput
  }

  export type TickerHandlerUncheckedCreateInput = {
    id?: string
    tickerId: string
    handlers?: TickerHandlerCreatehandlersInput | InputJsonValue[]
  }

  export type TickerHandlerUpdateInput = {
    handlers?: TickerHandlerUpdatehandlersInput | InputJsonValue[]
    ticker?: TickerUpdateOneRequiredWithoutTickerHandlersNestedInput
  }

  export type TickerHandlerUncheckedUpdateInput = {
    tickerId?: StringFieldUpdateOperationsInput | string
    handlers?: TickerHandlerUpdatehandlersInput | InputJsonValue[]
  }

  export type TickerHandlerCreateManyInput = {
    id?: string
    tickerId: string
    handlers?: TickerHandlerCreatehandlersInput | InputJsonValue[]
  }

  export type TickerHandlerUpdateManyMutationInput = {
    handlers?: TickerHandlerUpdatehandlersInput | InputJsonValue[]
  }

  export type TickerHandlerUncheckedUpdateManyInput = {
    tickerId?: StringFieldUpdateOperationsInput | string
    handlers?: TickerHandlerUpdatehandlersInput | InputJsonValue[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TickerDataNullableRelationFilter = {
    is?: TickerDataWhereInput | null
    isNot?: TickerDataWhereInput | null
  }

  export type TickerHandlerNullableRelationFilter = {
    is?: TickerHandlerWhereInput | null
    isNot?: TickerHandlerWhereInput | null
  }

  export type TickerCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
  }

  export type TickerMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
  }

  export type TickerMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type TickerRelationFilter = {
    is?: TickerWhereInput
    isNot?: TickerWhereInput
  }

  export type TickerDataCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    dividend?: SortOrder
    dividendYield?: SortOrder
    tickerId?: SortOrder
  }

  export type TickerDataMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    dividend?: SortOrder
    dividendYield?: SortOrder
    tickerId?: SortOrder
  }

  export type TickerDataMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    dividend?: SortOrder
    dividendYield?: SortOrder
    tickerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TickerHandlerCountOrderByAggregateInput = {
    id?: SortOrder
    tickerId?: SortOrder
    handlers?: SortOrder
  }

  export type TickerHandlerMaxOrderByAggregateInput = {
    id?: SortOrder
    tickerId?: SortOrder
  }

  export type TickerHandlerMinOrderByAggregateInput = {
    id?: SortOrder
    tickerId?: SortOrder
  }

  export type TickerDataCreateNestedOneWithoutTickerInput = {
    create?: XOR<TickerDataCreateWithoutTickerInput, TickerDataUncheckedCreateWithoutTickerInput>
    connectOrCreate?: TickerDataCreateOrConnectWithoutTickerInput
    connect?: TickerDataWhereUniqueInput
  }

  export type TickerHandlerCreateNestedOneWithoutTickerInput = {
    create?: XOR<TickerHandlerCreateWithoutTickerInput, TickerHandlerUncheckedCreateWithoutTickerInput>
    connectOrCreate?: TickerHandlerCreateOrConnectWithoutTickerInput
    connect?: TickerHandlerWhereUniqueInput
  }

  export type TickerDataUncheckedCreateNestedOneWithoutTickerInput = {
    create?: XOR<TickerDataCreateWithoutTickerInput, TickerDataUncheckedCreateWithoutTickerInput>
    connectOrCreate?: TickerDataCreateOrConnectWithoutTickerInput
    connect?: TickerDataWhereUniqueInput
  }

  export type TickerHandlerUncheckedCreateNestedOneWithoutTickerInput = {
    create?: XOR<TickerHandlerCreateWithoutTickerInput, TickerHandlerUncheckedCreateWithoutTickerInput>
    connectOrCreate?: TickerHandlerCreateOrConnectWithoutTickerInput
    connect?: TickerHandlerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TickerDataUpdateOneWithoutTickerNestedInput = {
    create?: XOR<TickerDataCreateWithoutTickerInput, TickerDataUncheckedCreateWithoutTickerInput>
    connectOrCreate?: TickerDataCreateOrConnectWithoutTickerInput
    upsert?: TickerDataUpsertWithoutTickerInput
    disconnect?: TickerDataWhereInput | boolean
    delete?: TickerDataWhereInput | boolean
    connect?: TickerDataWhereUniqueInput
    update?: XOR<XOR<TickerDataUpdateToOneWithWhereWithoutTickerInput, TickerDataUpdateWithoutTickerInput>, TickerDataUncheckedUpdateWithoutTickerInput>
  }

  export type TickerHandlerUpdateOneWithoutTickerNestedInput = {
    create?: XOR<TickerHandlerCreateWithoutTickerInput, TickerHandlerUncheckedCreateWithoutTickerInput>
    connectOrCreate?: TickerHandlerCreateOrConnectWithoutTickerInput
    upsert?: TickerHandlerUpsertWithoutTickerInput
    disconnect?: TickerHandlerWhereInput | boolean
    delete?: TickerHandlerWhereInput | boolean
    connect?: TickerHandlerWhereUniqueInput
    update?: XOR<XOR<TickerHandlerUpdateToOneWithWhereWithoutTickerInput, TickerHandlerUpdateWithoutTickerInput>, TickerHandlerUncheckedUpdateWithoutTickerInput>
  }

  export type TickerDataUncheckedUpdateOneWithoutTickerNestedInput = {
    create?: XOR<TickerDataCreateWithoutTickerInput, TickerDataUncheckedCreateWithoutTickerInput>
    connectOrCreate?: TickerDataCreateOrConnectWithoutTickerInput
    upsert?: TickerDataUpsertWithoutTickerInput
    disconnect?: TickerDataWhereInput | boolean
    delete?: TickerDataWhereInput | boolean
    connect?: TickerDataWhereUniqueInput
    update?: XOR<XOR<TickerDataUpdateToOneWithWhereWithoutTickerInput, TickerDataUpdateWithoutTickerInput>, TickerDataUncheckedUpdateWithoutTickerInput>
  }

  export type TickerHandlerUncheckedUpdateOneWithoutTickerNestedInput = {
    create?: XOR<TickerHandlerCreateWithoutTickerInput, TickerHandlerUncheckedCreateWithoutTickerInput>
    connectOrCreate?: TickerHandlerCreateOrConnectWithoutTickerInput
    upsert?: TickerHandlerUpsertWithoutTickerInput
    disconnect?: TickerHandlerWhereInput | boolean
    delete?: TickerHandlerWhereInput | boolean
    connect?: TickerHandlerWhereUniqueInput
    update?: XOR<XOR<TickerHandlerUpdateToOneWithWhereWithoutTickerInput, TickerHandlerUpdateWithoutTickerInput>, TickerHandlerUncheckedUpdateWithoutTickerInput>
  }

  export type TickerCreateNestedOneWithoutTickerDataInput = {
    create?: XOR<TickerCreateWithoutTickerDataInput, TickerUncheckedCreateWithoutTickerDataInput>
    connectOrCreate?: TickerCreateOrConnectWithoutTickerDataInput
    connect?: TickerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type TickerUpdateOneRequiredWithoutTickerDataNestedInput = {
    create?: XOR<TickerCreateWithoutTickerDataInput, TickerUncheckedCreateWithoutTickerDataInput>
    connectOrCreate?: TickerCreateOrConnectWithoutTickerDataInput
    upsert?: TickerUpsertWithoutTickerDataInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutTickerDataInput, TickerUpdateWithoutTickerDataInput>, TickerUncheckedUpdateWithoutTickerDataInput>
  }

  export type TickerHandlerCreatehandlersInput = {
    set: InputJsonValue[]
  }

  export type TickerCreateNestedOneWithoutTickerHandlersInput = {
    create?: XOR<TickerCreateWithoutTickerHandlersInput, TickerUncheckedCreateWithoutTickerHandlersInput>
    connectOrCreate?: TickerCreateOrConnectWithoutTickerHandlersInput
    connect?: TickerWhereUniqueInput
  }

  export type TickerHandlerUpdatehandlersInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type TickerUpdateOneRequiredWithoutTickerHandlersNestedInput = {
    create?: XOR<TickerCreateWithoutTickerHandlersInput, TickerUncheckedCreateWithoutTickerHandlersInput>
    connectOrCreate?: TickerCreateOrConnectWithoutTickerHandlersInput
    upsert?: TickerUpsertWithoutTickerHandlersInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutTickerHandlersInput, TickerUpdateWithoutTickerHandlersInput>, TickerUncheckedUpdateWithoutTickerHandlersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type TickerDataCreateWithoutTickerInput = {
    id?: string
    price: string
    dividend?: string | null
    dividendYield?: string | null
  }

  export type TickerDataUncheckedCreateWithoutTickerInput = {
    id?: string
    price: string
    dividend?: string | null
    dividendYield?: string | null
  }

  export type TickerDataCreateOrConnectWithoutTickerInput = {
    where: TickerDataWhereUniqueInput
    create: XOR<TickerDataCreateWithoutTickerInput, TickerDataUncheckedCreateWithoutTickerInput>
  }

  export type TickerHandlerCreateWithoutTickerInput = {
    id?: string
    handlers?: TickerHandlerCreatehandlersInput | InputJsonValue[]
  }

  export type TickerHandlerUncheckedCreateWithoutTickerInput = {
    id?: string
    handlers?: TickerHandlerCreatehandlersInput | InputJsonValue[]
  }

  export type TickerHandlerCreateOrConnectWithoutTickerInput = {
    where: TickerHandlerWhereUniqueInput
    create: XOR<TickerHandlerCreateWithoutTickerInput, TickerHandlerUncheckedCreateWithoutTickerInput>
  }

  export type TickerDataUpsertWithoutTickerInput = {
    update: XOR<TickerDataUpdateWithoutTickerInput, TickerDataUncheckedUpdateWithoutTickerInput>
    create: XOR<TickerDataCreateWithoutTickerInput, TickerDataUncheckedCreateWithoutTickerInput>
    where?: TickerDataWhereInput
  }

  export type TickerDataUpdateToOneWithWhereWithoutTickerInput = {
    where?: TickerDataWhereInput
    data: XOR<TickerDataUpdateWithoutTickerInput, TickerDataUncheckedUpdateWithoutTickerInput>
  }

  export type TickerDataUpdateWithoutTickerInput = {
    price?: StringFieldUpdateOperationsInput | string
    dividend?: NullableStringFieldUpdateOperationsInput | string | null
    dividendYield?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TickerDataUncheckedUpdateWithoutTickerInput = {
    price?: StringFieldUpdateOperationsInput | string
    dividend?: NullableStringFieldUpdateOperationsInput | string | null
    dividendYield?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TickerHandlerUpsertWithoutTickerInput = {
    update: XOR<TickerHandlerUpdateWithoutTickerInput, TickerHandlerUncheckedUpdateWithoutTickerInput>
    create: XOR<TickerHandlerCreateWithoutTickerInput, TickerHandlerUncheckedCreateWithoutTickerInput>
    where?: TickerHandlerWhereInput
  }

  export type TickerHandlerUpdateToOneWithWhereWithoutTickerInput = {
    where?: TickerHandlerWhereInput
    data: XOR<TickerHandlerUpdateWithoutTickerInput, TickerHandlerUncheckedUpdateWithoutTickerInput>
  }

  export type TickerHandlerUpdateWithoutTickerInput = {
    handlers?: TickerHandlerUpdatehandlersInput | InputJsonValue[]
  }

  export type TickerHandlerUncheckedUpdateWithoutTickerInput = {
    handlers?: TickerHandlerUpdatehandlersInput | InputJsonValue[]
  }

  export type TickerCreateWithoutTickerDataInput = {
    id?: string
    symbol: string
    tickerHandlers?: TickerHandlerCreateNestedOneWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutTickerDataInput = {
    id?: string
    symbol: string
    tickerHandlers?: TickerHandlerUncheckedCreateNestedOneWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutTickerDataInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutTickerDataInput, TickerUncheckedCreateWithoutTickerDataInput>
  }

  export type TickerUpsertWithoutTickerDataInput = {
    update: XOR<TickerUpdateWithoutTickerDataInput, TickerUncheckedUpdateWithoutTickerDataInput>
    create: XOR<TickerCreateWithoutTickerDataInput, TickerUncheckedCreateWithoutTickerDataInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutTickerDataInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutTickerDataInput, TickerUncheckedUpdateWithoutTickerDataInput>
  }

  export type TickerUpdateWithoutTickerDataInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    tickerHandlers?: TickerHandlerUpdateOneWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutTickerDataInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    tickerHandlers?: TickerHandlerUncheckedUpdateOneWithoutTickerNestedInput
  }

  export type TickerCreateWithoutTickerHandlersInput = {
    id?: string
    symbol: string
    tickerData?: TickerDataCreateNestedOneWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutTickerHandlersInput = {
    id?: string
    symbol: string
    tickerData?: TickerDataUncheckedCreateNestedOneWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutTickerHandlersInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutTickerHandlersInput, TickerUncheckedCreateWithoutTickerHandlersInput>
  }

  export type TickerUpsertWithoutTickerHandlersInput = {
    update: XOR<TickerUpdateWithoutTickerHandlersInput, TickerUncheckedUpdateWithoutTickerHandlersInput>
    create: XOR<TickerCreateWithoutTickerHandlersInput, TickerUncheckedCreateWithoutTickerHandlersInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutTickerHandlersInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutTickerHandlersInput, TickerUncheckedUpdateWithoutTickerHandlersInput>
  }

  export type TickerUpdateWithoutTickerHandlersInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    tickerData?: TickerDataUpdateOneWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutTickerHandlersInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    tickerData?: TickerDataUncheckedUpdateOneWithoutTickerNestedInput
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TickerDefaultArgs instead
     */
    export type TickerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TickerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TickerDataDefaultArgs instead
     */
    export type TickerDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TickerDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TickerHandlerDefaultArgs instead
     */
    export type TickerHandlerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TickerHandlerDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}