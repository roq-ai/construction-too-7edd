/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model outlet
 *
 */
export type outlet = $Result.DefaultSelection<Prisma.$outletPayload>;
/**
 * Model rental
 *
 */
export type rental = $Result.DefaultSelection<Prisma.$rentalPayload>;
/**
 * Model sales_associate
 *
 */
export type sales_associate = $Result.DefaultSelection<Prisma.$sales_associatePayload>;
/**
 * Model tool
 *
 */
export type tool = $Result.DefaultSelection<Prisma.$toolPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.outlet`: Exposes CRUD operations for the **outlet** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Outlets
   * const outlets = await prisma.outlet.findMany()
   * ```
   */
  get outlet(): Prisma.outletDelegate<ExtArgs>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **rental** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Rentals
   * const rentals = await prisma.rental.findMany()
   * ```
   */
  get rental(): Prisma.rentalDelegate<ExtArgs>;

  /**
   * `prisma.sales_associate`: Exposes CRUD operations for the **sales_associate** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sales_associates
   * const sales_associates = await prisma.sales_associate.findMany()
   * ```
   */
  get sales_associate(): Prisma.sales_associateDelegate<ExtArgs>;

  /**
   * `prisma.tool`: Exposes CRUD operations for the **tool** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tools
   * const tools = await prisma.tool.findMany()
   * ```
   */
  get tool(): Prisma.toolDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    outlet: 'outlet';
    rental: 'rental';
    sales_associate: 'sales_associate';
    tool: 'tool';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'outlet' | 'rental' | 'sales_associate' | 'tool' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      outlet: {
        payload: Prisma.$outletPayload<ExtArgs>;
        fields: Prisma.outletFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.outletFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.outletFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          findFirst: {
            args: Prisma.outletFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.outletFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          findMany: {
            args: Prisma.outletFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>[];
          };
          create: {
            args: Prisma.outletCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          createMany: {
            args: Prisma.outletCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.outletDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          update: {
            args: Prisma.outletUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          deleteMany: {
            args: Prisma.outletDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.outletUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.outletUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          aggregate: {
            args: Prisma.OutletAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOutlet>;
          };
          groupBy: {
            args: Prisma.outletGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OutletGroupByOutputType>[];
          };
          count: {
            args: Prisma.outletCountArgs<ExtArgs>;
            result: $Utils.Optional<OutletCountAggregateOutputType> | number;
          };
        };
      };
      rental: {
        payload: Prisma.$rentalPayload<ExtArgs>;
        fields: Prisma.rentalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.rentalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.rentalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findFirst: {
            args: Prisma.rentalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.rentalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findMany: {
            args: Prisma.rentalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>[];
          };
          create: {
            args: Prisma.rentalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          createMany: {
            args: Prisma.rentalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.rentalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          update: {
            args: Prisma.rentalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          deleteMany: {
            args: Prisma.rentalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.rentalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.rentalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRental>;
          };
          groupBy: {
            args: Prisma.rentalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RentalGroupByOutputType>[];
          };
          count: {
            args: Prisma.rentalCountArgs<ExtArgs>;
            result: $Utils.Optional<RentalCountAggregateOutputType> | number;
          };
        };
      };
      sales_associate: {
        payload: Prisma.$sales_associatePayload<ExtArgs>;
        fields: Prisma.sales_associateFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.sales_associateFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.sales_associateFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload>;
          };
          findFirst: {
            args: Prisma.sales_associateFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.sales_associateFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload>;
          };
          findMany: {
            args: Prisma.sales_associateFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload>[];
          };
          create: {
            args: Prisma.sales_associateCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload>;
          };
          createMany: {
            args: Prisma.sales_associateCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.sales_associateDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload>;
          };
          update: {
            args: Prisma.sales_associateUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload>;
          };
          deleteMany: {
            args: Prisma.sales_associateDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.sales_associateUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.sales_associateUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_associatePayload>;
          };
          aggregate: {
            args: Prisma.Sales_associateAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSales_associate>;
          };
          groupBy: {
            args: Prisma.sales_associateGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Sales_associateGroupByOutputType>[];
          };
          count: {
            args: Prisma.sales_associateCountArgs<ExtArgs>;
            result: $Utils.Optional<Sales_associateCountAggregateOutputType> | number;
          };
        };
      };
      tool: {
        payload: Prisma.$toolPayload<ExtArgs>;
        fields: Prisma.toolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.toolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.toolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          findFirst: {
            args: Prisma.toolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.toolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          findMany: {
            args: Prisma.toolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>[];
          };
          create: {
            args: Prisma.toolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          createMany: {
            args: Prisma.toolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.toolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          update: {
            args: Prisma.toolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          deleteMany: {
            args: Prisma.toolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.toolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.toolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          aggregate: {
            args: Prisma.ToolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTool>;
          };
          groupBy: {
            args: Prisma.toolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ToolGroupByOutputType>[];
          };
          count: {
            args: Prisma.toolCountArgs<ExtArgs>;
            result: $Utils.Optional<ToolCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    outlet: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | CompanyCountOutputTypeCountOutletArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOutletArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: outletWhereInput;
  };

  /**
   * Count Type OutletCountOutputType
   */

  export type OutletCountOutputType = {
    sales_associate: number;
    tool: number;
  };

  export type OutletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales_associate?: boolean | OutletCountOutputTypeCountSales_associateArgs;
    tool?: boolean | OutletCountOutputTypeCountToolArgs;
  };

  // Custom InputTypes

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletCountOutputType
     */
    select?: OutletCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountSales_associateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: sales_associateWhereInput;
  };

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolWhereInput;
  };

  /**
   * Count Type ToolCountOutputType
   */

  export type ToolCountOutputType = {
    rental: number;
  };

  export type ToolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | ToolCountOutputTypeCountRentalArgs;
  };

  // Custom InputTypes

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCountOutputType
     */
    select?: ToolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rental: number;
    sales_associate: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | UserCountOutputTypeCountRentalArgs;
    sales_associate?: boolean | UserCountOutputTypeCountSales_associateArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSales_associateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: sales_associateWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      outlet?: boolean | company$outletArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | company$outletArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      outlet: Prisma.$outletPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    outlet<T extends company$outletArgs<ExtArgs> = {}>(
      args?: Subset<T, company$outletArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly state: FieldRef<'company', 'String'>;
    readonly zip_code: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.outlet
   */
  export type company$outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    where?: outletWhereInput;
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    cursor?: outletWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model outlet
   */

  export type AggregateOutlet = {
    _count: OutletCountAggregateOutputType | null;
    _min: OutletMinAggregateOutputType | null;
    _max: OutletMaxAggregateOutputType | null;
  };

  export type OutletMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OutletMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OutletCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OutletMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OutletMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OutletCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OutletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outlet to aggregate.
     */
    where?: outletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: outletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` outlets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned outlets
     **/
    _count?: true | OutletCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OutletMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OutletMaxAggregateInputType;
  };

  export type GetOutletAggregateType<T extends OutletAggregateArgs> = {
    [P in keyof T & keyof AggregateOutlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutlet[P]>
      : GetScalarType<T[P], AggregateOutlet[P]>;
  };

  export type outletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: outletWhereInput;
    orderBy?: outletOrderByWithAggregationInput | outletOrderByWithAggregationInput[];
    by: OutletScalarFieldEnum[] | OutletScalarFieldEnum;
    having?: outletScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OutletCountAggregateInputType | true;
    _min?: OutletMinAggregateInputType;
    _max?: OutletMaxAggregateInputType;
  };

  export type OutletGroupByOutputType = {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: OutletCountAggregateOutputType | null;
    _min: OutletMinAggregateOutputType | null;
    _max: OutletMaxAggregateOutputType | null;
  };

  type GetOutletGroupByPayload<T extends outletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OutletGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OutletGroupByOutputType[P]>
          : GetScalarType<T[P], OutletGroupByOutputType[P]>;
      }
    >
  >;

  export type outletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      company_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      sales_associate?: boolean | outlet$sales_associateArgs<ExtArgs>;
      tool?: boolean | outlet$toolArgs<ExtArgs>;
      _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['outlet']
  >;

  export type outletSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type outletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    sales_associate?: boolean | outlet$sales_associateArgs<ExtArgs>;
    tool?: boolean | outlet$toolArgs<ExtArgs>;
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $outletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'outlet';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      sales_associate: Prisma.$sales_associatePayload<ExtArgs>[];
      tool: Prisma.$toolPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        address: string;
        city: string;
        state: string;
        zip_code: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['outlet']
    >;
    composites: {};
  };

  type outletGetPayload<S extends boolean | null | undefined | outletDefaultArgs> = $Result.GetResult<
    Prisma.$outletPayload,
    S
  >;

  type outletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    outletFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OutletCountAggregateInputType | true;
  };

  export interface outletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['outlet']; meta: { name: 'outlet' } };
    /**
     * Find zero or one Outlet that matches the filter.
     * @param {outletFindUniqueArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends outletFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, outletFindUniqueArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Outlet that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {outletFindUniqueOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends outletFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, outletFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Outlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindFirstArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends outletFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, outletFindFirstArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Outlet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindFirstOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends outletFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, outletFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Outlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outlets
     * const outlets = await prisma.outlet.findMany()
     *
     * // Get first 10 Outlets
     * const outlets = await prisma.outlet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const outletWithIdOnly = await prisma.outlet.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends outletFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outletFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Outlet.
     * @param {outletCreateArgs} args - Arguments to create a Outlet.
     * @example
     * // Create one Outlet
     * const Outlet = await prisma.outlet.create({
     *   data: {
     *     // ... data to create a Outlet
     *   }
     * })
     *
     **/
    create<T extends outletCreateArgs<ExtArgs>>(
      args: SelectSubset<T, outletCreateArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Outlets.
     *     @param {outletCreateManyArgs} args - Arguments to create many Outlets.
     *     @example
     *     // Create many Outlets
     *     const outlet = await prisma.outlet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends outletCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outletCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Outlet.
     * @param {outletDeleteArgs} args - Arguments to delete one Outlet.
     * @example
     * // Delete one Outlet
     * const Outlet = await prisma.outlet.delete({
     *   where: {
     *     // ... filter to delete one Outlet
     *   }
     * })
     *
     **/
    delete<T extends outletDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, outletDeleteArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Outlet.
     * @param {outletUpdateArgs} args - Arguments to update one Outlet.
     * @example
     * // Update one Outlet
     * const outlet = await prisma.outlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends outletUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, outletUpdateArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Outlets.
     * @param {outletDeleteManyArgs} args - Arguments to filter Outlets to delete.
     * @example
     * // Delete a few Outlets
     * const { count } = await prisma.outlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends outletDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outletDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outlets
     * const outlet = await prisma.outlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends outletUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, outletUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Outlet.
     * @param {outletUpsertArgs} args - Arguments to update or create a Outlet.
     * @example
     * // Update or create a Outlet
     * const outlet = await prisma.outlet.upsert({
     *   create: {
     *     // ... data to create a Outlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outlet we want to update
     *   }
     * })
     **/
    upsert<T extends outletUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, outletUpsertArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletCountArgs} args - Arguments to filter Outlets to count.
     * @example
     * // Count the number of Outlets
     * const count = await prisma.outlet.count({
     *   where: {
     *     // ... the filter for the Outlets we want to count
     *   }
     * })
     **/
    count<T extends outletCountArgs>(
      args?: Subset<T, outletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutletAggregateArgs>(
      args: Subset<T, OutletAggregateArgs>,
    ): Prisma.PrismaPromise<GetOutletAggregateType<T>>;

    /**
     * Group by Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletGroupByArgs} args - Group by arguments.
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
      T extends outletGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: outletGroupByArgs['orderBy'] }
        : { orderBy?: outletGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, outletGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOutletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the outlet model
     */
    readonly fields: outletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for outlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__outletClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    sales_associate<T extends outlet$sales_associateArgs<ExtArgs> = {}>(
      args?: Subset<T, outlet$sales_associateArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'findMany'> | Null>;

    tool<T extends outlet$toolArgs<ExtArgs> = {}>(
      args?: Subset<T, outlet$toolArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the outlet model
   */
  interface outletFieldRefs {
    readonly id: FieldRef<'outlet', 'String'>;
    readonly name: FieldRef<'outlet', 'String'>;
    readonly address: FieldRef<'outlet', 'String'>;
    readonly city: FieldRef<'outlet', 'String'>;
    readonly state: FieldRef<'outlet', 'String'>;
    readonly zip_code: FieldRef<'outlet', 'String'>;
    readonly company_id: FieldRef<'outlet', 'String'>;
    readonly created_at: FieldRef<'outlet', 'DateTime'>;
    readonly updated_at: FieldRef<'outlet', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * outlet findUnique
   */
  export type outletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlet to fetch.
     */
    where: outletWhereUniqueInput;
  };

  /**
   * outlet findUniqueOrThrow
   */
  export type outletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlet to fetch.
     */
    where: outletWhereUniqueInput;
  };

  /**
   * outlet findFirst
   */
  export type outletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlet to fetch.
     */
    where?: outletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for outlets.
     */
    cursor?: outletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` outlets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[];
  };

  /**
   * outlet findFirstOrThrow
   */
  export type outletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlet to fetch.
     */
    where?: outletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for outlets.
     */
    cursor?: outletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` outlets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[];
  };

  /**
   * outlet findMany
   */
  export type outletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlets to fetch.
     */
    where?: outletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing outlets.
     */
    cursor?: outletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` outlets.
     */
    skip?: number;
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[];
  };

  /**
   * outlet create
   */
  export type outletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * The data needed to create a outlet.
     */
    data: XOR<outletCreateInput, outletUncheckedCreateInput>;
  };

  /**
   * outlet createMany
   */
  export type outletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many outlets.
     */
    data: outletCreateManyInput | outletCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * outlet update
   */
  export type outletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * The data needed to update a outlet.
     */
    data: XOR<outletUpdateInput, outletUncheckedUpdateInput>;
    /**
     * Choose, which outlet to update.
     */
    where: outletWhereUniqueInput;
  };

  /**
   * outlet updateMany
   */
  export type outletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update outlets.
     */
    data: XOR<outletUpdateManyMutationInput, outletUncheckedUpdateManyInput>;
    /**
     * Filter which outlets to update
     */
    where?: outletWhereInput;
  };

  /**
   * outlet upsert
   */
  export type outletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * The filter to search for the outlet to update in case it exists.
     */
    where: outletWhereUniqueInput;
    /**
     * In case the outlet found by the `where` argument doesn't exist, create a new outlet with this data.
     */
    create: XOR<outletCreateInput, outletUncheckedCreateInput>;
    /**
     * In case the outlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<outletUpdateInput, outletUncheckedUpdateInput>;
  };

  /**
   * outlet delete
   */
  export type outletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter which outlet to delete.
     */
    where: outletWhereUniqueInput;
  };

  /**
   * outlet deleteMany
   */
  export type outletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outlets to delete
     */
    where?: outletWhereInput;
  };

  /**
   * outlet.sales_associate
   */
  export type outlet$sales_associateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    where?: sales_associateWhereInput;
    orderBy?: sales_associateOrderByWithRelationInput | sales_associateOrderByWithRelationInput[];
    cursor?: sales_associateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Sales_associateScalarFieldEnum | Sales_associateScalarFieldEnum[];
  };

  /**
   * outlet.tool
   */
  export type outlet$toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    where?: toolWhereInput;
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    cursor?: toolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * outlet without action
   */
  export type outletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
  };

  /**
   * Model rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  export type RentalAvgAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalSumAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    total_price: number | null;
    tool_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    total_price: number | null;
    tool_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    total_price: number;
    tool_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RentalAvgAggregateInputType = {
    total_price?: true;
  };

  export type RentalSumAggregateInputType = {
    total_price?: true;
  };

  export type RentalMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    tool_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    tool_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    tool_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rental to aggregate.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rentals
     **/
    _count?: true | RentalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RentalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RentalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RentalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RentalMaxAggregateInputType;
  };

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
    [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>;
  };

  export type rentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithAggregationInput | rentalOrderByWithAggregationInput[];
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum;
    having?: rentalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalCountAggregateInputType | true;
    _avg?: RentalAvgAggregateInputType;
    _sum?: RentalSumAggregateInputType;
    _min?: RentalMinAggregateInputType;
    _max?: RentalMaxAggregateInputType;
  };

  export type RentalGroupByOutputType = {
    id: string;
    start_date: Date;
    end_date: Date;
    total_price: number;
    tool_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  type GetRentalGroupByPayload<T extends rentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RentalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
          : GetScalarType<T[P], RentalGroupByOutputType[P]>;
      }
    >
  >;

  export type rentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      total_price?: boolean;
      tool_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tool?: boolean | toolDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['rental']
  >;

  export type rentalSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    total_price?: boolean;
    tool_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type rentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | toolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $rentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'rental';
    objects: {
      tool: Prisma.$toolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date;
        end_date: Date;
        total_price: number;
        tool_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['rental']
    >;
    composites: {};
  };

  type rentalGetPayload<S extends boolean | null | undefined | rentalDefaultArgs> = $Result.GetResult<
    Prisma.$rentalPayload,
    S
  >;

  type rentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    rentalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RentalCountAggregateInputType | true;
  };

  export interface rentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rental']; meta: { name: 'rental' } };
    /**
     * Find zero or one Rental that matches the filter.
     * @param {rentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends rentalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rentalFindUniqueArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Rental that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {rentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends rentalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends rentalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends rentalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     *
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends rentalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Rental.
     * @param {rentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     *
     **/
    create<T extends rentalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalCreateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Rentals.
     *     @param {rentalCreateManyArgs} args - Arguments to create many Rentals.
     *     @example
     *     // Create many Rentals
     *     const rental = await prisma.rental.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends rentalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Rental.
     * @param {rentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     *
     **/
    delete<T extends rentalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rentalDeleteArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Rental.
     * @param {rentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends rentalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Rentals.
     * @param {rentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends rentalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends rentalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Rental.
     * @param {rentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     **/
    upsert<T extends rentalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpsertArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
     **/
    count<T extends rentalCountArgs>(
      args?: Subset<T, rentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalAggregateArgs>(
      args: Subset<T, RentalAggregateArgs>,
    ): Prisma.PrismaPromise<GetRentalAggregateType<T>>;

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalGroupByArgs} args - Group by arguments.
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
      T extends rentalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentalGroupByArgs['orderBy'] }
        : { orderBy?: rentalGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, rentalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rental model
     */
    readonly fields: rentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tool<T extends toolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, toolDefaultArgs<ExtArgs>>,
    ): Prisma__toolClient<
      $Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the rental model
   */
  interface rentalFieldRefs {
    readonly id: FieldRef<'rental', 'String'>;
    readonly start_date: FieldRef<'rental', 'DateTime'>;
    readonly end_date: FieldRef<'rental', 'DateTime'>;
    readonly total_price: FieldRef<'rental', 'Int'>;
    readonly tool_id: FieldRef<'rental', 'String'>;
    readonly user_id: FieldRef<'rental', 'String'>;
    readonly created_at: FieldRef<'rental', 'DateTime'>;
    readonly updated_at: FieldRef<'rental', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * rental findUnique
   */
  export type rentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findUniqueOrThrow
   */
  export type rentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findFirst
   */
  export type rentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findFirstOrThrow
   */
  export type rentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findMany
   */
  export type rentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental create
   */
  export type rentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to create a rental.
     */
    data: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
  };

  /**
   * rental createMany
   */
  export type rentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rentals.
     */
    data: rentalCreateManyInput | rentalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * rental update
   */
  export type rentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to update a rental.
     */
    data: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
    /**
     * Choose, which rental to update.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental updateMany
   */
  export type rentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyInput>;
    /**
     * Filter which rentals to update
     */
    where?: rentalWhereInput;
  };

  /**
   * rental upsert
   */
  export type rentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The filter to search for the rental to update in case it exists.
     */
    where: rentalWhereUniqueInput;
    /**
     * In case the rental found by the `where` argument doesn't exist, create a new rental with this data.
     */
    create: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
    /**
     * In case the rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
  };

  /**
   * rental delete
   */
  export type rentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter which rental to delete.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental deleteMany
   */
  export type rentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalWhereInput;
  };

  /**
   * rental without action
   */
  export type rentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
  };

  /**
   * Model sales_associate
   */

  export type AggregateSales_associate = {
    _count: Sales_associateCountAggregateOutputType | null;
    _avg: Sales_associateAvgAggregateOutputType | null;
    _sum: Sales_associateSumAggregateOutputType | null;
    _min: Sales_associateMinAggregateOutputType | null;
    _max: Sales_associateMaxAggregateOutputType | null;
  };

  export type Sales_associateAvgAggregateOutputType = {
    salary: number | null;
  };

  export type Sales_associateSumAggregateOutputType = {
    salary: number | null;
  };

  export type Sales_associateMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    outlet_id: string | null;
    hire_date: Date | null;
    salary: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sales_associateMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    outlet_id: string | null;
    hire_date: Date | null;
    salary: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sales_associateCountAggregateOutputType = {
    id: number;
    user_id: number;
    outlet_id: number;
    hire_date: number;
    salary: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Sales_associateAvgAggregateInputType = {
    salary?: true;
  };

  export type Sales_associateSumAggregateInputType = {
    salary?: true;
  };

  export type Sales_associateMinAggregateInputType = {
    id?: true;
    user_id?: true;
    outlet_id?: true;
    hire_date?: true;
    salary?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sales_associateMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    outlet_id?: true;
    hire_date?: true;
    salary?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sales_associateCountAggregateInputType = {
    id?: true;
    user_id?: true;
    outlet_id?: true;
    hire_date?: true;
    salary?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Sales_associateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_associate to aggregate.
     */
    where?: sales_associateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales_associates to fetch.
     */
    orderBy?: sales_associateOrderByWithRelationInput | sales_associateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: sales_associateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales_associates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales_associates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sales_associates
     **/
    _count?: true | Sales_associateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Sales_associateAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Sales_associateSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Sales_associateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Sales_associateMaxAggregateInputType;
  };

  export type GetSales_associateAggregateType<T extends Sales_associateAggregateArgs> = {
    [P in keyof T & keyof AggregateSales_associate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales_associate[P]>
      : GetScalarType<T[P], AggregateSales_associate[P]>;
  };

  export type sales_associateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_associateWhereInput;
    orderBy?: sales_associateOrderByWithAggregationInput | sales_associateOrderByWithAggregationInput[];
    by: Sales_associateScalarFieldEnum[] | Sales_associateScalarFieldEnum;
    having?: sales_associateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Sales_associateCountAggregateInputType | true;
    _avg?: Sales_associateAvgAggregateInputType;
    _sum?: Sales_associateSumAggregateInputType;
    _min?: Sales_associateMinAggregateInputType;
    _max?: Sales_associateMaxAggregateInputType;
  };

  export type Sales_associateGroupByOutputType = {
    id: string;
    user_id: string;
    outlet_id: string;
    hire_date: Date;
    salary: number;
    created_at: Date;
    updated_at: Date;
    _count: Sales_associateCountAggregateOutputType | null;
    _avg: Sales_associateAvgAggregateOutputType | null;
    _sum: Sales_associateSumAggregateOutputType | null;
    _min: Sales_associateMinAggregateOutputType | null;
    _max: Sales_associateMaxAggregateOutputType | null;
  };

  type GetSales_associateGroupByPayload<T extends sales_associateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sales_associateGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Sales_associateGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Sales_associateGroupByOutputType[P]>
          : GetScalarType<T[P], Sales_associateGroupByOutputType[P]>;
      }
    >
  >;

  export type sales_associateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        outlet_id?: boolean;
        hire_date?: boolean;
        salary?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        outlet?: boolean | outletDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['sales_associate']
    >;

  export type sales_associateSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    outlet_id?: boolean;
    hire_date?: boolean;
    salary?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type sales_associateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | outletDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $sales_associatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'sales_associate';
    objects: {
      outlet: Prisma.$outletPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        outlet_id: string;
        hire_date: Date;
        salary: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['sales_associate']
    >;
    composites: {};
  };

  type sales_associateGetPayload<S extends boolean | null | undefined | sales_associateDefaultArgs> = $Result.GetResult<
    Prisma.$sales_associatePayload,
    S
  >;

  type sales_associateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    sales_associateFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Sales_associateCountAggregateInputType | true;
  };

  export interface sales_associateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales_associate']; meta: { name: 'sales_associate' } };
    /**
     * Find zero or one Sales_associate that matches the filter.
     * @param {sales_associateFindUniqueArgs} args - Arguments to find a Sales_associate
     * @example
     * // Get one Sales_associate
     * const sales_associate = await prisma.sales_associate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends sales_associateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sales_associateFindUniqueArgs<ExtArgs>>,
    ): Prisma__sales_associateClient<
      $Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Sales_associate that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {sales_associateFindUniqueOrThrowArgs} args - Arguments to find a Sales_associate
     * @example
     * // Get one Sales_associate
     * const sales_associate = await prisma.sales_associate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends sales_associateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_associateFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__sales_associateClient<
      $Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Sales_associate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_associateFindFirstArgs} args - Arguments to find a Sales_associate
     * @example
     * // Get one Sales_associate
     * const sales_associate = await prisma.sales_associate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends sales_associateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_associateFindFirstArgs<ExtArgs>>,
    ): Prisma__sales_associateClient<
      $Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Sales_associate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_associateFindFirstOrThrowArgs} args - Arguments to find a Sales_associate
     * @example
     * // Get one Sales_associate
     * const sales_associate = await prisma.sales_associate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends sales_associateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_associateFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__sales_associateClient<
      $Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Sales_associates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_associateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales_associates
     * const sales_associates = await prisma.sales_associate.findMany()
     *
     * // Get first 10 Sales_associates
     * const sales_associates = await prisma.sales_associate.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sales_associateWithIdOnly = await prisma.sales_associate.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends sales_associateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_associateFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Sales_associate.
     * @param {sales_associateCreateArgs} args - Arguments to create a Sales_associate.
     * @example
     * // Create one Sales_associate
     * const Sales_associate = await prisma.sales_associate.create({
     *   data: {
     *     // ... data to create a Sales_associate
     *   }
     * })
     *
     **/
    create<T extends sales_associateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sales_associateCreateArgs<ExtArgs>>,
    ): Prisma__sales_associateClient<
      $Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Sales_associates.
     *     @param {sales_associateCreateManyArgs} args - Arguments to create many Sales_associates.
     *     @example
     *     // Create many Sales_associates
     *     const sales_associate = await prisma.sales_associate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends sales_associateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_associateCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Sales_associate.
     * @param {sales_associateDeleteArgs} args - Arguments to delete one Sales_associate.
     * @example
     * // Delete one Sales_associate
     * const Sales_associate = await prisma.sales_associate.delete({
     *   where: {
     *     // ... filter to delete one Sales_associate
     *   }
     * })
     *
     **/
    delete<T extends sales_associateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sales_associateDeleteArgs<ExtArgs>>,
    ): Prisma__sales_associateClient<
      $Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Sales_associate.
     * @param {sales_associateUpdateArgs} args - Arguments to update one Sales_associate.
     * @example
     * // Update one Sales_associate
     * const sales_associate = await prisma.sales_associate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends sales_associateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sales_associateUpdateArgs<ExtArgs>>,
    ): Prisma__sales_associateClient<
      $Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Sales_associates.
     * @param {sales_associateDeleteManyArgs} args - Arguments to filter Sales_associates to delete.
     * @example
     * // Delete a few Sales_associates
     * const { count } = await prisma.sales_associate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends sales_associateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_associateDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sales_associates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_associateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales_associates
     * const sales_associate = await prisma.sales_associate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends sales_associateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sales_associateUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Sales_associate.
     * @param {sales_associateUpsertArgs} args - Arguments to update or create a Sales_associate.
     * @example
     * // Update or create a Sales_associate
     * const sales_associate = await prisma.sales_associate.upsert({
     *   create: {
     *     // ... data to create a Sales_associate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales_associate we want to update
     *   }
     * })
     **/
    upsert<T extends sales_associateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sales_associateUpsertArgs<ExtArgs>>,
    ): Prisma__sales_associateClient<
      $Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Sales_associates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_associateCountArgs} args - Arguments to filter Sales_associates to count.
     * @example
     * // Count the number of Sales_associates
     * const count = await prisma.sales_associate.count({
     *   where: {
     *     // ... the filter for the Sales_associates we want to count
     *   }
     * })
     **/
    count<T extends sales_associateCountArgs>(
      args?: Subset<T, sales_associateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sales_associateCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sales_associate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_associateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sales_associateAggregateArgs>(
      args: Subset<T, Sales_associateAggregateArgs>,
    ): Prisma.PrismaPromise<GetSales_associateAggregateType<T>>;

    /**
     * Group by Sales_associate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_associateGroupByArgs} args - Group by arguments.
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
      T extends sales_associateGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sales_associateGroupByArgs['orderBy'] }
        : { orderBy?: sales_associateGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, sales_associateGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSales_associateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the sales_associate model
     */
    readonly fields: sales_associateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales_associate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sales_associateClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    outlet<T extends outletDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, outletDefaultArgs<ExtArgs>>,
    ): Prisma__outletClient<
      $Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sales_associate model
   */
  interface sales_associateFieldRefs {
    readonly id: FieldRef<'sales_associate', 'String'>;
    readonly user_id: FieldRef<'sales_associate', 'String'>;
    readonly outlet_id: FieldRef<'sales_associate', 'String'>;
    readonly hire_date: FieldRef<'sales_associate', 'DateTime'>;
    readonly salary: FieldRef<'sales_associate', 'Int'>;
    readonly created_at: FieldRef<'sales_associate', 'DateTime'>;
    readonly updated_at: FieldRef<'sales_associate', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * sales_associate findUnique
   */
  export type sales_associateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    /**
     * Filter, which sales_associate to fetch.
     */
    where: sales_associateWhereUniqueInput;
  };

  /**
   * sales_associate findUniqueOrThrow
   */
  export type sales_associateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the sales_associate
       */
      select?: sales_associateSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: sales_associateInclude<ExtArgs> | null;
      /**
       * Filter, which sales_associate to fetch.
       */
      where: sales_associateWhereUniqueInput;
    };

  /**
   * sales_associate findFirst
   */
  export type sales_associateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    /**
     * Filter, which sales_associate to fetch.
     */
    where?: sales_associateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales_associates to fetch.
     */
    orderBy?: sales_associateOrderByWithRelationInput | sales_associateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales_associates.
     */
    cursor?: sales_associateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales_associates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales_associates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales_associates.
     */
    distinct?: Sales_associateScalarFieldEnum | Sales_associateScalarFieldEnum[];
  };

  /**
   * sales_associate findFirstOrThrow
   */
  export type sales_associateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the sales_associate
       */
      select?: sales_associateSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: sales_associateInclude<ExtArgs> | null;
      /**
       * Filter, which sales_associate to fetch.
       */
      where?: sales_associateWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of sales_associates to fetch.
       */
      orderBy?: sales_associateOrderByWithRelationInput | sales_associateOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for sales_associates.
       */
      cursor?: sales_associateWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` sales_associates from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` sales_associates.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of sales_associates.
       */
      distinct?: Sales_associateScalarFieldEnum | Sales_associateScalarFieldEnum[];
    };

  /**
   * sales_associate findMany
   */
  export type sales_associateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    /**
     * Filter, which sales_associates to fetch.
     */
    where?: sales_associateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales_associates to fetch.
     */
    orderBy?: sales_associateOrderByWithRelationInput | sales_associateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sales_associates.
     */
    cursor?: sales_associateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales_associates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales_associates.
     */
    skip?: number;
    distinct?: Sales_associateScalarFieldEnum | Sales_associateScalarFieldEnum[];
  };

  /**
   * sales_associate create
   */
  export type sales_associateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    /**
     * The data needed to create a sales_associate.
     */
    data: XOR<sales_associateCreateInput, sales_associateUncheckedCreateInput>;
  };

  /**
   * sales_associate createMany
   */
  export type sales_associateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales_associates.
     */
    data: sales_associateCreateManyInput | sales_associateCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sales_associate update
   */
  export type sales_associateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    /**
     * The data needed to update a sales_associate.
     */
    data: XOR<sales_associateUpdateInput, sales_associateUncheckedUpdateInput>;
    /**
     * Choose, which sales_associate to update.
     */
    where: sales_associateWhereUniqueInput;
  };

  /**
   * sales_associate updateMany
   */
  export type sales_associateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales_associates.
     */
    data: XOR<sales_associateUpdateManyMutationInput, sales_associateUncheckedUpdateManyInput>;
    /**
     * Filter which sales_associates to update
     */
    where?: sales_associateWhereInput;
  };

  /**
   * sales_associate upsert
   */
  export type sales_associateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    /**
     * The filter to search for the sales_associate to update in case it exists.
     */
    where: sales_associateWhereUniqueInput;
    /**
     * In case the sales_associate found by the `where` argument doesn't exist, create a new sales_associate with this data.
     */
    create: XOR<sales_associateCreateInput, sales_associateUncheckedCreateInput>;
    /**
     * In case the sales_associate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sales_associateUpdateInput, sales_associateUncheckedUpdateInput>;
  };

  /**
   * sales_associate delete
   */
  export type sales_associateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    /**
     * Filter which sales_associate to delete.
     */
    where: sales_associateWhereUniqueInput;
  };

  /**
   * sales_associate deleteMany
   */
  export type sales_associateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_associates to delete
     */
    where?: sales_associateWhereInput;
  };

  /**
   * sales_associate without action
   */
  export type sales_associateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
  };

  /**
   * Model tool
   */

  export type AggregateTool = {
    _count: ToolCountAggregateOutputType | null;
    _avg: ToolAvgAggregateOutputType | null;
    _sum: ToolSumAggregateOutputType | null;
    _min: ToolMinAggregateOutputType | null;
    _max: ToolMaxAggregateOutputType | null;
  };

  export type ToolAvgAggregateOutputType = {
    price_per_day: number | null;
  };

  export type ToolSumAggregateOutputType = {
    price_per_day: number | null;
  };

  export type ToolMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    brand: string | null;
    model: string | null;
    price_per_day: number | null;
    outlet_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ToolMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    brand: string | null;
    model: string | null;
    price_per_day: number | null;
    outlet_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ToolCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    brand: number;
    model: number;
    price_per_day: number;
    outlet_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ToolAvgAggregateInputType = {
    price_per_day?: true;
  };

  export type ToolSumAggregateInputType = {
    price_per_day?: true;
  };

  export type ToolMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    brand?: true;
    model?: true;
    price_per_day?: true;
    outlet_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ToolMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    brand?: true;
    model?: true;
    price_per_day?: true;
    outlet_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ToolCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    brand?: true;
    model?: true;
    price_per_day?: true;
    outlet_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tool to aggregate.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tools
     **/
    _count?: true | ToolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ToolAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ToolSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ToolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ToolMaxAggregateInputType;
  };

  export type GetToolAggregateType<T extends ToolAggregateArgs> = {
    [P in keyof T & keyof AggregateTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTool[P]>
      : GetScalarType<T[P], AggregateTool[P]>;
  };

  export type toolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolWhereInput;
    orderBy?: toolOrderByWithAggregationInput | toolOrderByWithAggregationInput[];
    by: ToolScalarFieldEnum[] | ToolScalarFieldEnum;
    having?: toolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ToolCountAggregateInputType | true;
    _avg?: ToolAvgAggregateInputType;
    _sum?: ToolSumAggregateInputType;
    _min?: ToolMinAggregateInputType;
    _max?: ToolMaxAggregateInputType;
  };

  export type ToolGroupByOutputType = {
    id: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    outlet_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ToolCountAggregateOutputType | null;
    _avg: ToolAvgAggregateOutputType | null;
    _sum: ToolSumAggregateOutputType | null;
    _min: ToolMinAggregateOutputType | null;
    _max: ToolMaxAggregateOutputType | null;
  };

  type GetToolGroupByPayload<T extends toolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ToolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ToolGroupByOutputType[P]>
          : GetScalarType<T[P], ToolGroupByOutputType[P]>;
      }
    >
  >;

  export type toolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      brand?: boolean;
      model?: boolean;
      price_per_day?: boolean;
      outlet_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      rental?: boolean | tool$rentalArgs<ExtArgs>;
      outlet?: boolean | outletDefaultArgs<ExtArgs>;
      _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tool']
  >;

  export type toolSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    brand?: boolean;
    model?: boolean;
    price_per_day?: boolean;
    outlet_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type toolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | tool$rentalArgs<ExtArgs>;
    outlet?: boolean | outletDefaultArgs<ExtArgs>;
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $toolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'tool';
    objects: {
      rental: Prisma.$rentalPayload<ExtArgs>[];
      outlet: Prisma.$outletPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: string;
        brand: string;
        model: string;
        price_per_day: number;
        outlet_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tool']
    >;
    composites: {};
  };

  type toolGetPayload<S extends boolean | null | undefined | toolDefaultArgs> = $Result.GetResult<
    Prisma.$toolPayload,
    S
  >;

  type toolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    toolFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ToolCountAggregateInputType | true;
  };

  export interface toolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tool']; meta: { name: 'tool' } };
    /**
     * Find zero or one Tool that matches the filter.
     * @param {toolFindUniqueArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends toolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, toolFindUniqueArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Tool that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {toolFindUniqueOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends toolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindFirstArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends toolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindFirstArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindFirstOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends toolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tool.findMany()
     *
     * // Get first 10 Tools
     * const tools = await prisma.tool.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const toolWithIdOnly = await prisma.tool.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends toolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Tool.
     * @param {toolCreateArgs} args - Arguments to create a Tool.
     * @example
     * // Create one Tool
     * const Tool = await prisma.tool.create({
     *   data: {
     *     // ... data to create a Tool
     *   }
     * })
     *
     **/
    create<T extends toolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, toolCreateArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tools.
     *     @param {toolCreateManyArgs} args - Arguments to create many Tools.
     *     @example
     *     // Create many Tools
     *     const tool = await prisma.tool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends toolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tool.
     * @param {toolDeleteArgs} args - Arguments to delete one Tool.
     * @example
     * // Delete one Tool
     * const Tool = await prisma.tool.delete({
     *   where: {
     *     // ... filter to delete one Tool
     *   }
     * })
     *
     **/
    delete<T extends toolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, toolDeleteArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Tool.
     * @param {toolUpdateArgs} args - Arguments to update one Tool.
     * @example
     * // Update one Tool
     * const tool = await prisma.tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends toolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpdateArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tools.
     * @param {toolDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends toolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends toolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tool.
     * @param {toolUpsertArgs} args - Arguments to update or create a Tool.
     * @example
     * // Update or create a Tool
     * const tool = await prisma.tool.upsert({
     *   create: {
     *     // ... data to create a Tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tool we want to update
     *   }
     * })
     **/
    upsert<T extends toolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpsertArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tool.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
     **/
    count<T extends toolCountArgs>(
      args?: Subset<T, toolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolAggregateArgs>(
      args: Subset<T, ToolAggregateArgs>,
    ): Prisma.PrismaPromise<GetToolAggregateType<T>>;

    /**
     * Group by Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolGroupByArgs} args - Group by arguments.
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
      T extends toolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: toolGroupByArgs['orderBy'] }
        : { orderBy?: toolGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, toolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tool model
     */
    readonly fields: toolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__toolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rental<T extends tool$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, tool$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    outlet<T extends outletDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, outletDefaultArgs<ExtArgs>>,
    ): Prisma__outletClient<
      $Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the tool model
   */
  interface toolFieldRefs {
    readonly id: FieldRef<'tool', 'String'>;
    readonly name: FieldRef<'tool', 'String'>;
    readonly type: FieldRef<'tool', 'String'>;
    readonly brand: FieldRef<'tool', 'String'>;
    readonly model: FieldRef<'tool', 'String'>;
    readonly price_per_day: FieldRef<'tool', 'Int'>;
    readonly outlet_id: FieldRef<'tool', 'String'>;
    readonly created_at: FieldRef<'tool', 'DateTime'>;
    readonly updated_at: FieldRef<'tool', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * tool findUnique
   */
  export type toolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool findUniqueOrThrow
   */
  export type toolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool findFirst
   */
  export type toolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool findFirstOrThrow
   */
  export type toolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool findMany
   */
  export type toolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tools to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool create
   */
  export type toolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The data needed to create a tool.
     */
    data: XOR<toolCreateInput, toolUncheckedCreateInput>;
  };

  /**
   * tool createMany
   */
  export type toolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tools.
     */
    data: toolCreateManyInput | toolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * tool update
   */
  export type toolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The data needed to update a tool.
     */
    data: XOR<toolUpdateInput, toolUncheckedUpdateInput>;
    /**
     * Choose, which tool to update.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool updateMany
   */
  export type toolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tools.
     */
    data: XOR<toolUpdateManyMutationInput, toolUncheckedUpdateManyInput>;
    /**
     * Filter which tools to update
     */
    where?: toolWhereInput;
  };

  /**
   * tool upsert
   */
  export type toolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The filter to search for the tool to update in case it exists.
     */
    where: toolWhereUniqueInput;
    /**
     * In case the tool found by the `where` argument doesn't exist, create a new tool with this data.
     */
    create: XOR<toolCreateInput, toolUncheckedCreateInput>;
    /**
     * In case the tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toolUpdateInput, toolUncheckedUpdateInput>;
  };

  /**
   * tool delete
   */
  export type toolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter which tool to delete.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool deleteMany
   */
  export type toolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tools to delete
     */
    where?: toolWhereInput;
  };

  /**
   * tool.rental
   */
  export type tool$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * tool without action
   */
  export type toolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      rental?: boolean | user$rentalArgs<ExtArgs>;
      sales_associate?: boolean | user$sales_associateArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | user$rentalArgs<ExtArgs>;
    sales_associate?: boolean | user$sales_associateArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      rental: Prisma.$rentalPayload<ExtArgs>[];
      sales_associate: Prisma.$sales_associatePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rental<T extends user$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, user$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    sales_associate<T extends user$sales_associateArgs<ExtArgs> = {}>(
      args?: Subset<T, user$sales_associateArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_associatePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.rental
   */
  export type user$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * user.sales_associate
   */
  export type user$sales_associateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_associate
     */
    select?: sales_associateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sales_associateInclude<ExtArgs> | null;
    where?: sales_associateWhereInput;
    orderBy?: sales_associateOrderByWithRelationInput | sales_associateOrderByWithRelationInput[];
    cursor?: sales_associateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Sales_associateScalarFieldEnum | Sales_associateScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const OutletScalarFieldEnum: {
    id: 'id';
    name: 'name';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OutletScalarFieldEnum = (typeof OutletScalarFieldEnum)[keyof typeof OutletScalarFieldEnum];

  export const RentalScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    total_price: 'total_price';
    tool_id: 'tool_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum];

  export const Sales_associateScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    outlet_id: 'outlet_id';
    hire_date: 'hire_date';
    salary: 'salary';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Sales_associateScalarFieldEnum =
    (typeof Sales_associateScalarFieldEnum)[keyof typeof Sales_associateScalarFieldEnum];

  export const ToolScalarFieldEnum: {
    id: 'id';
    name: 'name';
    type: 'type';
    brand: 'brand';
    model: 'model';
    price_per_day: 'price_per_day';
    outlet_id: 'outlet_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ToolScalarFieldEnum = (typeof ToolScalarFieldEnum)[keyof typeof ToolScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip_code?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    outlet?: OutletListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    outlet?: outletOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      state?: StringNullableFilter<'company'> | string | null;
      zip_code?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      outlet?: OutletListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    state?: StringNullableWithAggregatesFilter<'company'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type outletWhereInput = {
    AND?: outletWhereInput | outletWhereInput[];
    OR?: outletWhereInput[];
    NOT?: outletWhereInput | outletWhereInput[];
    id?: UuidFilter<'outlet'> | string;
    name?: StringFilter<'outlet'> | string;
    address?: StringFilter<'outlet'> | string;
    city?: StringFilter<'outlet'> | string;
    state?: StringFilter<'outlet'> | string;
    zip_code?: StringFilter<'outlet'> | string;
    company_id?: UuidFilter<'outlet'> | string;
    created_at?: DateTimeFilter<'outlet'> | Date | string;
    updated_at?: DateTimeFilter<'outlet'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    sales_associate?: Sales_associateListRelationFilter;
    tool?: ToolListRelationFilter;
  };

  export type outletOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    sales_associate?: sales_associateOrderByRelationAggregateInput;
    tool?: toolOrderByRelationAggregateInput;
  };

  export type outletWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: outletWhereInput | outletWhereInput[];
      OR?: outletWhereInput[];
      NOT?: outletWhereInput | outletWhereInput[];
      name?: StringFilter<'outlet'> | string;
      address?: StringFilter<'outlet'> | string;
      city?: StringFilter<'outlet'> | string;
      state?: StringFilter<'outlet'> | string;
      zip_code?: StringFilter<'outlet'> | string;
      company_id?: UuidFilter<'outlet'> | string;
      created_at?: DateTimeFilter<'outlet'> | Date | string;
      updated_at?: DateTimeFilter<'outlet'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      sales_associate?: Sales_associateListRelationFilter;
      tool?: ToolListRelationFilter;
    },
    'id'
  >;

  export type outletOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: outletCountOrderByAggregateInput;
    _max?: outletMaxOrderByAggregateInput;
    _min?: outletMinOrderByAggregateInput;
  };

  export type outletScalarWhereWithAggregatesInput = {
    AND?: outletScalarWhereWithAggregatesInput | outletScalarWhereWithAggregatesInput[];
    OR?: outletScalarWhereWithAggregatesInput[];
    NOT?: outletScalarWhereWithAggregatesInput | outletScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'outlet'> | string;
    name?: StringWithAggregatesFilter<'outlet'> | string;
    address?: StringWithAggregatesFilter<'outlet'> | string;
    city?: StringWithAggregatesFilter<'outlet'> | string;
    state?: StringWithAggregatesFilter<'outlet'> | string;
    zip_code?: StringWithAggregatesFilter<'outlet'> | string;
    company_id?: UuidWithAggregatesFilter<'outlet'> | string;
    created_at?: DateTimeWithAggregatesFilter<'outlet'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'outlet'> | Date | string;
  };

  export type rentalWhereInput = {
    AND?: rentalWhereInput | rentalWhereInput[];
    OR?: rentalWhereInput[];
    NOT?: rentalWhereInput | rentalWhereInput[];
    id?: UuidFilter<'rental'> | string;
    start_date?: DateTimeFilter<'rental'> | Date | string;
    end_date?: DateTimeFilter<'rental'> | Date | string;
    total_price?: IntFilter<'rental'> | number;
    tool_id?: UuidFilter<'rental'> | string;
    user_id?: UuidFilter<'rental'> | string;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
    tool?: XOR<ToolRelationFilter, toolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type rentalOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    tool_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tool?: toolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type rentalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: rentalWhereInput | rentalWhereInput[];
      OR?: rentalWhereInput[];
      NOT?: rentalWhereInput | rentalWhereInput[];
      start_date?: DateTimeFilter<'rental'> | Date | string;
      end_date?: DateTimeFilter<'rental'> | Date | string;
      total_price?: IntFilter<'rental'> | number;
      tool_id?: UuidFilter<'rental'> | string;
      user_id?: UuidFilter<'rental'> | string;
      created_at?: DateTimeFilter<'rental'> | Date | string;
      updated_at?: DateTimeFilter<'rental'> | Date | string;
      tool?: XOR<ToolRelationFilter, toolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type rentalOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    tool_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: rentalCountOrderByAggregateInput;
    _avg?: rentalAvgOrderByAggregateInput;
    _max?: rentalMaxOrderByAggregateInput;
    _min?: rentalMinOrderByAggregateInput;
    _sum?: rentalSumOrderByAggregateInput;
  };

  export type rentalScalarWhereWithAggregatesInput = {
    AND?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    OR?: rentalScalarWhereWithAggregatesInput[];
    NOT?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'rental'> | string;
    start_date?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    total_price?: IntWithAggregatesFilter<'rental'> | number;
    tool_id?: UuidWithAggregatesFilter<'rental'> | string;
    user_id?: UuidWithAggregatesFilter<'rental'> | string;
    created_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
  };

  export type sales_associateWhereInput = {
    AND?: sales_associateWhereInput | sales_associateWhereInput[];
    OR?: sales_associateWhereInput[];
    NOT?: sales_associateWhereInput | sales_associateWhereInput[];
    id?: UuidFilter<'sales_associate'> | string;
    user_id?: UuidFilter<'sales_associate'> | string;
    outlet_id?: UuidFilter<'sales_associate'> | string;
    hire_date?: DateTimeFilter<'sales_associate'> | Date | string;
    salary?: IntFilter<'sales_associate'> | number;
    created_at?: DateTimeFilter<'sales_associate'> | Date | string;
    updated_at?: DateTimeFilter<'sales_associate'> | Date | string;
    outlet?: XOR<OutletRelationFilter, outletWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type sales_associateOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    outlet_id?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    outlet?: outletOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type sales_associateWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: sales_associateWhereInput | sales_associateWhereInput[];
      OR?: sales_associateWhereInput[];
      NOT?: sales_associateWhereInput | sales_associateWhereInput[];
      user_id?: UuidFilter<'sales_associate'> | string;
      outlet_id?: UuidFilter<'sales_associate'> | string;
      hire_date?: DateTimeFilter<'sales_associate'> | Date | string;
      salary?: IntFilter<'sales_associate'> | number;
      created_at?: DateTimeFilter<'sales_associate'> | Date | string;
      updated_at?: DateTimeFilter<'sales_associate'> | Date | string;
      outlet?: XOR<OutletRelationFilter, outletWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type sales_associateOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    outlet_id?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: sales_associateCountOrderByAggregateInput;
    _avg?: sales_associateAvgOrderByAggregateInput;
    _max?: sales_associateMaxOrderByAggregateInput;
    _min?: sales_associateMinOrderByAggregateInput;
    _sum?: sales_associateSumOrderByAggregateInput;
  };

  export type sales_associateScalarWhereWithAggregatesInput = {
    AND?: sales_associateScalarWhereWithAggregatesInput | sales_associateScalarWhereWithAggregatesInput[];
    OR?: sales_associateScalarWhereWithAggregatesInput[];
    NOT?: sales_associateScalarWhereWithAggregatesInput | sales_associateScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'sales_associate'> | string;
    user_id?: UuidWithAggregatesFilter<'sales_associate'> | string;
    outlet_id?: UuidWithAggregatesFilter<'sales_associate'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'sales_associate'> | Date | string;
    salary?: IntWithAggregatesFilter<'sales_associate'> | number;
    created_at?: DateTimeWithAggregatesFilter<'sales_associate'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'sales_associate'> | Date | string;
  };

  export type toolWhereInput = {
    AND?: toolWhereInput | toolWhereInput[];
    OR?: toolWhereInput[];
    NOT?: toolWhereInput | toolWhereInput[];
    id?: UuidFilter<'tool'> | string;
    name?: StringFilter<'tool'> | string;
    type?: StringFilter<'tool'> | string;
    brand?: StringFilter<'tool'> | string;
    model?: StringFilter<'tool'> | string;
    price_per_day?: IntFilter<'tool'> | number;
    outlet_id?: UuidFilter<'tool'> | string;
    created_at?: DateTimeFilter<'tool'> | Date | string;
    updated_at?: DateTimeFilter<'tool'> | Date | string;
    rental?: RentalListRelationFilter;
    outlet?: XOR<OutletRelationFilter, outletWhereInput>;
  };

  export type toolOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    price_per_day?: SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    rental?: rentalOrderByRelationAggregateInput;
    outlet?: outletOrderByWithRelationInput;
  };

  export type toolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: toolWhereInput | toolWhereInput[];
      OR?: toolWhereInput[];
      NOT?: toolWhereInput | toolWhereInput[];
      name?: StringFilter<'tool'> | string;
      type?: StringFilter<'tool'> | string;
      brand?: StringFilter<'tool'> | string;
      model?: StringFilter<'tool'> | string;
      price_per_day?: IntFilter<'tool'> | number;
      outlet_id?: UuidFilter<'tool'> | string;
      created_at?: DateTimeFilter<'tool'> | Date | string;
      updated_at?: DateTimeFilter<'tool'> | Date | string;
      rental?: RentalListRelationFilter;
      outlet?: XOR<OutletRelationFilter, outletWhereInput>;
    },
    'id'
  >;

  export type toolOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    price_per_day?: SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: toolCountOrderByAggregateInput;
    _avg?: toolAvgOrderByAggregateInput;
    _max?: toolMaxOrderByAggregateInput;
    _min?: toolMinOrderByAggregateInput;
    _sum?: toolSumOrderByAggregateInput;
  };

  export type toolScalarWhereWithAggregatesInput = {
    AND?: toolScalarWhereWithAggregatesInput | toolScalarWhereWithAggregatesInput[];
    OR?: toolScalarWhereWithAggregatesInput[];
    NOT?: toolScalarWhereWithAggregatesInput | toolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'tool'> | string;
    name?: StringWithAggregatesFilter<'tool'> | string;
    type?: StringWithAggregatesFilter<'tool'> | string;
    brand?: StringWithAggregatesFilter<'tool'> | string;
    model?: StringWithAggregatesFilter<'tool'> | string;
    price_per_day?: IntWithAggregatesFilter<'tool'> | number;
    outlet_id?: UuidWithAggregatesFilter<'tool'> | string;
    created_at?: DateTimeWithAggregatesFilter<'tool'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'tool'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    rental?: RentalListRelationFilter;
    sales_associate?: Sales_associateListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    rental?: rentalOrderByRelationAggregateInput;
    sales_associate?: sales_associateOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      rental?: RentalListRelationFilter;
      sales_associate?: Sales_associateListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    outlet?: outletCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    outlet?: outletUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    outlet?: outletUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    outlet?: outletUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type outletCreateInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOutletInput;
    sales_associate?: sales_associateCreateNestedManyWithoutOutletInput;
    tool?: toolCreateNestedManyWithoutOutletInput;
  };

  export type outletUncheckedCreateInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales_associate?: sales_associateUncheckedCreateNestedManyWithoutOutletInput;
    tool?: toolUncheckedCreateNestedManyWithoutOutletInput;
  };

  export type outletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOutletNestedInput;
    sales_associate?: sales_associateUpdateManyWithoutOutletNestedInput;
    tool?: toolUpdateManyWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_associate?: sales_associateUncheckedUpdateManyWithoutOutletNestedInput;
    tool?: toolUncheckedUpdateManyWithoutOutletNestedInput;
  };

  export type outletCreateManyInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type outletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type outletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool: toolCreateNestedOneWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    tool_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUpdateOneRequiredWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    tool_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateManyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    tool_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    tool_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_associateCreateInput = {
    id?: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    outlet: outletCreateNestedOneWithoutSales_associateInput;
    user: userCreateNestedOneWithoutSales_associateInput;
  };

  export type sales_associateUncheckedCreateInput = {
    id?: string;
    user_id: string;
    outlet_id: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_associateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    outlet?: outletUpdateOneRequiredWithoutSales_associateNestedInput;
    user?: userUpdateOneRequiredWithoutSales_associateNestedInput;
  };

  export type sales_associateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_associateCreateManyInput = {
    id?: string;
    user_id: string;
    outlet_id: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_associateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_associateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolCreateInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutToolInput;
    outlet: outletCreateNestedOneWithoutToolInput;
  };

  export type toolUncheckedCreateInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    outlet_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutToolNestedInput;
    outlet?: outletUpdateOneRequiredWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type toolCreateManyInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    outlet_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutUserInput;
    sales_associate?: sales_associateCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
    sales_associate?: sales_associateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutUserNestedInput;
    sales_associate?: sales_associateUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
    sales_associate?: sales_associateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OutletListRelationFilter = {
    every?: outletWhereInput;
    some?: outletWhereInput;
    none?: outletWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type outletOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type Sales_associateListRelationFilter = {
    every?: sales_associateWhereInput;
    some?: sales_associateWhereInput;
    none?: sales_associateWhereInput;
  };

  export type ToolListRelationFilter = {
    every?: toolWhereInput;
    some?: toolWhereInput;
    none?: toolWhereInput;
  };

  export type sales_associateOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type toolOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type outletCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type outletMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type outletMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ToolRelationFilter = {
    is?: toolWhereInput;
    isNot?: toolWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type rentalCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    tool_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalAvgOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type rentalMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    tool_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    tool_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalSumOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type OutletRelationFilter = {
    is?: outletWhereInput;
    isNot?: outletWhereInput;
  };

  export type sales_associateCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    outlet_id?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sales_associateAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type sales_associateMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    outlet_id?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sales_associateMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    outlet_id?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sales_associateSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type RentalListRelationFilter = {
    every?: rentalWhereInput;
    some?: rentalWhereInput;
    none?: rentalWhereInput;
  };

  export type rentalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type toolCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    price_per_day?: SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolAvgOrderByAggregateInput = {
    price_per_day?: SortOrder;
  };

  export type toolMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    price_per_day?: SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    price_per_day?: SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolSumOrderByAggregateInput = {
    price_per_day?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type outletCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>
      | outletCreateWithoutCompanyInput[]
      | outletUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: outletCreateOrConnectWithoutCompanyInput | outletCreateOrConnectWithoutCompanyInput[];
    createMany?: outletCreateManyCompanyInputEnvelope;
    connect?: outletWhereUniqueInput | outletWhereUniqueInput[];
  };

  export type outletUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>
      | outletCreateWithoutCompanyInput[]
      | outletUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: outletCreateOrConnectWithoutCompanyInput | outletCreateOrConnectWithoutCompanyInput[];
    createMany?: outletCreateManyCompanyInputEnvelope;
    connect?: outletWhereUniqueInput | outletWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type outletUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>
      | outletCreateWithoutCompanyInput[]
      | outletUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: outletCreateOrConnectWithoutCompanyInput | outletCreateOrConnectWithoutCompanyInput[];
    upsert?: outletUpsertWithWhereUniqueWithoutCompanyInput | outletUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: outletCreateManyCompanyInputEnvelope;
    set?: outletWhereUniqueInput | outletWhereUniqueInput[];
    disconnect?: outletWhereUniqueInput | outletWhereUniqueInput[];
    delete?: outletWhereUniqueInput | outletWhereUniqueInput[];
    connect?: outletWhereUniqueInput | outletWhereUniqueInput[];
    update?: outletUpdateWithWhereUniqueWithoutCompanyInput | outletUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: outletUpdateManyWithWhereWithoutCompanyInput | outletUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: outletScalarWhereInput | outletScalarWhereInput[];
  };

  export type outletUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>
      | outletCreateWithoutCompanyInput[]
      | outletUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: outletCreateOrConnectWithoutCompanyInput | outletCreateOrConnectWithoutCompanyInput[];
    upsert?: outletUpsertWithWhereUniqueWithoutCompanyInput | outletUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: outletCreateManyCompanyInputEnvelope;
    set?: outletWhereUniqueInput | outletWhereUniqueInput[];
    disconnect?: outletWhereUniqueInput | outletWhereUniqueInput[];
    delete?: outletWhereUniqueInput | outletWhereUniqueInput[];
    connect?: outletWhereUniqueInput | outletWhereUniqueInput[];
    update?: outletUpdateWithWhereUniqueWithoutCompanyInput | outletUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: outletUpdateManyWithWhereWithoutCompanyInput | outletUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: outletScalarWhereInput | outletScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutOutletInput = {
    create?: XOR<companyCreateWithoutOutletInput, companyUncheckedCreateWithoutOutletInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOutletInput;
    connect?: companyWhereUniqueInput;
  };

  export type sales_associateCreateNestedManyWithoutOutletInput = {
    create?:
      | XOR<sales_associateCreateWithoutOutletInput, sales_associateUncheckedCreateWithoutOutletInput>
      | sales_associateCreateWithoutOutletInput[]
      | sales_associateUncheckedCreateWithoutOutletInput[];
    connectOrCreate?:
      | sales_associateCreateOrConnectWithoutOutletInput
      | sales_associateCreateOrConnectWithoutOutletInput[];
    createMany?: sales_associateCreateManyOutletInputEnvelope;
    connect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
  };

  export type toolCreateNestedManyWithoutOutletInput = {
    create?:
      | XOR<toolCreateWithoutOutletInput, toolUncheckedCreateWithoutOutletInput>
      | toolCreateWithoutOutletInput[]
      | toolUncheckedCreateWithoutOutletInput[];
    connectOrCreate?: toolCreateOrConnectWithoutOutletInput | toolCreateOrConnectWithoutOutletInput[];
    createMany?: toolCreateManyOutletInputEnvelope;
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
  };

  export type sales_associateUncheckedCreateNestedManyWithoutOutletInput = {
    create?:
      | XOR<sales_associateCreateWithoutOutletInput, sales_associateUncheckedCreateWithoutOutletInput>
      | sales_associateCreateWithoutOutletInput[]
      | sales_associateUncheckedCreateWithoutOutletInput[];
    connectOrCreate?:
      | sales_associateCreateOrConnectWithoutOutletInput
      | sales_associateCreateOrConnectWithoutOutletInput[];
    createMany?: sales_associateCreateManyOutletInputEnvelope;
    connect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
  };

  export type toolUncheckedCreateNestedManyWithoutOutletInput = {
    create?:
      | XOR<toolCreateWithoutOutletInput, toolUncheckedCreateWithoutOutletInput>
      | toolCreateWithoutOutletInput[]
      | toolUncheckedCreateWithoutOutletInput[];
    connectOrCreate?: toolCreateOrConnectWithoutOutletInput | toolCreateOrConnectWithoutOutletInput[];
    createMany?: toolCreateManyOutletInputEnvelope;
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
  };

  export type companyUpdateOneRequiredWithoutOutletNestedInput = {
    create?: XOR<companyCreateWithoutOutletInput, companyUncheckedCreateWithoutOutletInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOutletInput;
    upsert?: companyUpsertWithoutOutletInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutOutletInput, companyUpdateWithoutOutletInput>,
      companyUncheckedUpdateWithoutOutletInput
    >;
  };

  export type sales_associateUpdateManyWithoutOutletNestedInput = {
    create?:
      | XOR<sales_associateCreateWithoutOutletInput, sales_associateUncheckedCreateWithoutOutletInput>
      | sales_associateCreateWithoutOutletInput[]
      | sales_associateUncheckedCreateWithoutOutletInput[];
    connectOrCreate?:
      | sales_associateCreateOrConnectWithoutOutletInput
      | sales_associateCreateOrConnectWithoutOutletInput[];
    upsert?:
      | sales_associateUpsertWithWhereUniqueWithoutOutletInput
      | sales_associateUpsertWithWhereUniqueWithoutOutletInput[];
    createMany?: sales_associateCreateManyOutletInputEnvelope;
    set?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    disconnect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    delete?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    connect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    update?:
      | sales_associateUpdateWithWhereUniqueWithoutOutletInput
      | sales_associateUpdateWithWhereUniqueWithoutOutletInput[];
    updateMany?:
      | sales_associateUpdateManyWithWhereWithoutOutletInput
      | sales_associateUpdateManyWithWhereWithoutOutletInput[];
    deleteMany?: sales_associateScalarWhereInput | sales_associateScalarWhereInput[];
  };

  export type toolUpdateManyWithoutOutletNestedInput = {
    create?:
      | XOR<toolCreateWithoutOutletInput, toolUncheckedCreateWithoutOutletInput>
      | toolCreateWithoutOutletInput[]
      | toolUncheckedCreateWithoutOutletInput[];
    connectOrCreate?: toolCreateOrConnectWithoutOutletInput | toolCreateOrConnectWithoutOutletInput[];
    upsert?: toolUpsertWithWhereUniqueWithoutOutletInput | toolUpsertWithWhereUniqueWithoutOutletInput[];
    createMany?: toolCreateManyOutletInputEnvelope;
    set?: toolWhereUniqueInput | toolWhereUniqueInput[];
    disconnect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    delete?: toolWhereUniqueInput | toolWhereUniqueInput[];
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    update?: toolUpdateWithWhereUniqueWithoutOutletInput | toolUpdateWithWhereUniqueWithoutOutletInput[];
    updateMany?: toolUpdateManyWithWhereWithoutOutletInput | toolUpdateManyWithWhereWithoutOutletInput[];
    deleteMany?: toolScalarWhereInput | toolScalarWhereInput[];
  };

  export type sales_associateUncheckedUpdateManyWithoutOutletNestedInput = {
    create?:
      | XOR<sales_associateCreateWithoutOutletInput, sales_associateUncheckedCreateWithoutOutletInput>
      | sales_associateCreateWithoutOutletInput[]
      | sales_associateUncheckedCreateWithoutOutletInput[];
    connectOrCreate?:
      | sales_associateCreateOrConnectWithoutOutletInput
      | sales_associateCreateOrConnectWithoutOutletInput[];
    upsert?:
      | sales_associateUpsertWithWhereUniqueWithoutOutletInput
      | sales_associateUpsertWithWhereUniqueWithoutOutletInput[];
    createMany?: sales_associateCreateManyOutletInputEnvelope;
    set?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    disconnect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    delete?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    connect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    update?:
      | sales_associateUpdateWithWhereUniqueWithoutOutletInput
      | sales_associateUpdateWithWhereUniqueWithoutOutletInput[];
    updateMany?:
      | sales_associateUpdateManyWithWhereWithoutOutletInput
      | sales_associateUpdateManyWithWhereWithoutOutletInput[];
    deleteMany?: sales_associateScalarWhereInput | sales_associateScalarWhereInput[];
  };

  export type toolUncheckedUpdateManyWithoutOutletNestedInput = {
    create?:
      | XOR<toolCreateWithoutOutletInput, toolUncheckedCreateWithoutOutletInput>
      | toolCreateWithoutOutletInput[]
      | toolUncheckedCreateWithoutOutletInput[];
    connectOrCreate?: toolCreateOrConnectWithoutOutletInput | toolCreateOrConnectWithoutOutletInput[];
    upsert?: toolUpsertWithWhereUniqueWithoutOutletInput | toolUpsertWithWhereUniqueWithoutOutletInput[];
    createMany?: toolCreateManyOutletInputEnvelope;
    set?: toolWhereUniqueInput | toolWhereUniqueInput[];
    disconnect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    delete?: toolWhereUniqueInput | toolWhereUniqueInput[];
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    update?: toolUpdateWithWhereUniqueWithoutOutletInput | toolUpdateWithWhereUniqueWithoutOutletInput[];
    updateMany?: toolUpdateManyWithWhereWithoutOutletInput | toolUpdateManyWithWhereWithoutOutletInput[];
    deleteMany?: toolScalarWhereInput | toolScalarWhereInput[];
  };

  export type toolCreateNestedOneWithoutRentalInput = {
    create?: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: toolCreateOrConnectWithoutRentalInput;
    connect?: toolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutRentalInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type toolUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: toolCreateOrConnectWithoutRentalInput;
    upsert?: toolUpsertWithoutRentalInput;
    connect?: toolWhereUniqueInput;
    update?: XOR<
      XOR<toolUpdateToOneWithWhereWithoutRentalInput, toolUpdateWithoutRentalInput>,
      toolUncheckedUpdateWithoutRentalInput
    >;
  };

  export type userUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    upsert?: userUpsertWithoutRentalInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRentalInput, userUpdateWithoutRentalInput>,
      userUncheckedUpdateWithoutRentalInput
    >;
  };

  export type outletCreateNestedOneWithoutSales_associateInput = {
    create?: XOR<outletCreateWithoutSales_associateInput, outletUncheckedCreateWithoutSales_associateInput>;
    connectOrCreate?: outletCreateOrConnectWithoutSales_associateInput;
    connect?: outletWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutSales_associateInput = {
    create?: XOR<userCreateWithoutSales_associateInput, userUncheckedCreateWithoutSales_associateInput>;
    connectOrCreate?: userCreateOrConnectWithoutSales_associateInput;
    connect?: userWhereUniqueInput;
  };

  export type outletUpdateOneRequiredWithoutSales_associateNestedInput = {
    create?: XOR<outletCreateWithoutSales_associateInput, outletUncheckedCreateWithoutSales_associateInput>;
    connectOrCreate?: outletCreateOrConnectWithoutSales_associateInput;
    upsert?: outletUpsertWithoutSales_associateInput;
    connect?: outletWhereUniqueInput;
    update?: XOR<
      XOR<outletUpdateToOneWithWhereWithoutSales_associateInput, outletUpdateWithoutSales_associateInput>,
      outletUncheckedUpdateWithoutSales_associateInput
    >;
  };

  export type userUpdateOneRequiredWithoutSales_associateNestedInput = {
    create?: XOR<userCreateWithoutSales_associateInput, userUncheckedCreateWithoutSales_associateInput>;
    connectOrCreate?: userCreateOrConnectWithoutSales_associateInput;
    upsert?: userUpsertWithoutSales_associateInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSales_associateInput, userUpdateWithoutSales_associateInput>,
      userUncheckedUpdateWithoutSales_associateInput
    >;
  };

  export type rentalCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type outletCreateNestedOneWithoutToolInput = {
    create?: XOR<outletCreateWithoutToolInput, outletUncheckedCreateWithoutToolInput>;
    connectOrCreate?: outletCreateOrConnectWithoutToolInput;
    connect?: outletWhereUniqueInput;
  };

  export type rentalUncheckedCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type rentalUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutToolInput | rentalUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutToolInput | rentalUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutToolInput | rentalUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type outletUpdateOneRequiredWithoutToolNestedInput = {
    create?: XOR<outletCreateWithoutToolInput, outletUncheckedCreateWithoutToolInput>;
    connectOrCreate?: outletCreateOrConnectWithoutToolInput;
    upsert?: outletUpsertWithoutToolInput;
    connect?: outletWhereUniqueInput;
    update?: XOR<
      XOR<outletUpdateToOneWithWhereWithoutToolInput, outletUpdateWithoutToolInput>,
      outletUncheckedUpdateWithoutToolInput
    >;
  };

  export type rentalUncheckedUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutToolInput | rentalUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutToolInput | rentalUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutToolInput | rentalUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type rentalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type sales_associateCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<sales_associateCreateWithoutUserInput, sales_associateUncheckedCreateWithoutUserInput>
      | sales_associateCreateWithoutUserInput[]
      | sales_associateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: sales_associateCreateOrConnectWithoutUserInput | sales_associateCreateOrConnectWithoutUserInput[];
    createMany?: sales_associateCreateManyUserInputEnvelope;
    connect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
  };

  export type rentalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type sales_associateUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<sales_associateCreateWithoutUserInput, sales_associateUncheckedCreateWithoutUserInput>
      | sales_associateCreateWithoutUserInput[]
      | sales_associateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: sales_associateCreateOrConnectWithoutUserInput | sales_associateCreateOrConnectWithoutUserInput[];
    createMany?: sales_associateCreateManyUserInputEnvelope;
    connect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
  };

  export type rentalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type sales_associateUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<sales_associateCreateWithoutUserInput, sales_associateUncheckedCreateWithoutUserInput>
      | sales_associateCreateWithoutUserInput[]
      | sales_associateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: sales_associateCreateOrConnectWithoutUserInput | sales_associateCreateOrConnectWithoutUserInput[];
    upsert?:
      | sales_associateUpsertWithWhereUniqueWithoutUserInput
      | sales_associateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: sales_associateCreateManyUserInputEnvelope;
    set?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    disconnect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    delete?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    connect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    update?:
      | sales_associateUpdateWithWhereUniqueWithoutUserInput
      | sales_associateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | sales_associateUpdateManyWithWhereWithoutUserInput
      | sales_associateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: sales_associateScalarWhereInput | sales_associateScalarWhereInput[];
  };

  export type rentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type sales_associateUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<sales_associateCreateWithoutUserInput, sales_associateUncheckedCreateWithoutUserInput>
      | sales_associateCreateWithoutUserInput[]
      | sales_associateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: sales_associateCreateOrConnectWithoutUserInput | sales_associateCreateOrConnectWithoutUserInput[];
    upsert?:
      | sales_associateUpsertWithWhereUniqueWithoutUserInput
      | sales_associateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: sales_associateCreateManyUserInputEnvelope;
    set?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    disconnect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    delete?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    connect?: sales_associateWhereUniqueInput | sales_associateWhereUniqueInput[];
    update?:
      | sales_associateUpdateWithWhereUniqueWithoutUserInput
      | sales_associateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | sales_associateUpdateManyWithWhereWithoutUserInput
      | sales_associateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: sales_associateScalarWhereInput | sales_associateScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type outletCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales_associate?: sales_associateCreateNestedManyWithoutOutletInput;
    tool?: toolCreateNestedManyWithoutOutletInput;
  };

  export type outletUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales_associate?: sales_associateUncheckedCreateNestedManyWithoutOutletInput;
    tool?: toolUncheckedCreateNestedManyWithoutOutletInput;
  };

  export type outletCreateOrConnectWithoutCompanyInput = {
    where: outletWhereUniqueInput;
    create: XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>;
  };

  export type outletCreateManyCompanyInputEnvelope = {
    data: outletCreateManyCompanyInput | outletCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type outletUpsertWithWhereUniqueWithoutCompanyInput = {
    where: outletWhereUniqueInput;
    update: XOR<outletUpdateWithoutCompanyInput, outletUncheckedUpdateWithoutCompanyInput>;
    create: XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>;
  };

  export type outletUpdateWithWhereUniqueWithoutCompanyInput = {
    where: outletWhereUniqueInput;
    data: XOR<outletUpdateWithoutCompanyInput, outletUncheckedUpdateWithoutCompanyInput>;
  };

  export type outletUpdateManyWithWhereWithoutCompanyInput = {
    where: outletScalarWhereInput;
    data: XOR<outletUpdateManyMutationInput, outletUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type outletScalarWhereInput = {
    AND?: outletScalarWhereInput | outletScalarWhereInput[];
    OR?: outletScalarWhereInput[];
    NOT?: outletScalarWhereInput | outletScalarWhereInput[];
    id?: UuidFilter<'outlet'> | string;
    name?: StringFilter<'outlet'> | string;
    address?: StringFilter<'outlet'> | string;
    city?: StringFilter<'outlet'> | string;
    state?: StringFilter<'outlet'> | string;
    zip_code?: StringFilter<'outlet'> | string;
    company_id?: UuidFilter<'outlet'> | string;
    created_at?: DateTimeFilter<'outlet'> | Date | string;
    updated_at?: DateTimeFilter<'outlet'> | Date | string;
  };

  export type companyCreateWithoutOutletInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutOutletInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutOutletInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutOutletInput, companyUncheckedCreateWithoutOutletInput>;
  };

  export type sales_associateCreateWithoutOutletInput = {
    id?: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutSales_associateInput;
  };

  export type sales_associateUncheckedCreateWithoutOutletInput = {
    id?: string;
    user_id: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_associateCreateOrConnectWithoutOutletInput = {
    where: sales_associateWhereUniqueInput;
    create: XOR<sales_associateCreateWithoutOutletInput, sales_associateUncheckedCreateWithoutOutletInput>;
  };

  export type sales_associateCreateManyOutletInputEnvelope = {
    data: sales_associateCreateManyOutletInput | sales_associateCreateManyOutletInput[];
    skipDuplicates?: boolean;
  };

  export type toolCreateWithoutOutletInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutToolInput;
  };

  export type toolUncheckedCreateWithoutOutletInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolCreateOrConnectWithoutOutletInput = {
    where: toolWhereUniqueInput;
    create: XOR<toolCreateWithoutOutletInput, toolUncheckedCreateWithoutOutletInput>;
  };

  export type toolCreateManyOutletInputEnvelope = {
    data: toolCreateManyOutletInput | toolCreateManyOutletInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutOutletInput = {
    update: XOR<companyUpdateWithoutOutletInput, companyUncheckedUpdateWithoutOutletInput>;
    create: XOR<companyCreateWithoutOutletInput, companyUncheckedCreateWithoutOutletInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutOutletInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutOutletInput, companyUncheckedUpdateWithoutOutletInput>;
  };

  export type companyUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type sales_associateUpsertWithWhereUniqueWithoutOutletInput = {
    where: sales_associateWhereUniqueInput;
    update: XOR<sales_associateUpdateWithoutOutletInput, sales_associateUncheckedUpdateWithoutOutletInput>;
    create: XOR<sales_associateCreateWithoutOutletInput, sales_associateUncheckedCreateWithoutOutletInput>;
  };

  export type sales_associateUpdateWithWhereUniqueWithoutOutletInput = {
    where: sales_associateWhereUniqueInput;
    data: XOR<sales_associateUpdateWithoutOutletInput, sales_associateUncheckedUpdateWithoutOutletInput>;
  };

  export type sales_associateUpdateManyWithWhereWithoutOutletInput = {
    where: sales_associateScalarWhereInput;
    data: XOR<sales_associateUpdateManyMutationInput, sales_associateUncheckedUpdateManyWithoutOutletInput>;
  };

  export type sales_associateScalarWhereInput = {
    AND?: sales_associateScalarWhereInput | sales_associateScalarWhereInput[];
    OR?: sales_associateScalarWhereInput[];
    NOT?: sales_associateScalarWhereInput | sales_associateScalarWhereInput[];
    id?: UuidFilter<'sales_associate'> | string;
    user_id?: UuidFilter<'sales_associate'> | string;
    outlet_id?: UuidFilter<'sales_associate'> | string;
    hire_date?: DateTimeFilter<'sales_associate'> | Date | string;
    salary?: IntFilter<'sales_associate'> | number;
    created_at?: DateTimeFilter<'sales_associate'> | Date | string;
    updated_at?: DateTimeFilter<'sales_associate'> | Date | string;
  };

  export type toolUpsertWithWhereUniqueWithoutOutletInput = {
    where: toolWhereUniqueInput;
    update: XOR<toolUpdateWithoutOutletInput, toolUncheckedUpdateWithoutOutletInput>;
    create: XOR<toolCreateWithoutOutletInput, toolUncheckedCreateWithoutOutletInput>;
  };

  export type toolUpdateWithWhereUniqueWithoutOutletInput = {
    where: toolWhereUniqueInput;
    data: XOR<toolUpdateWithoutOutletInput, toolUncheckedUpdateWithoutOutletInput>;
  };

  export type toolUpdateManyWithWhereWithoutOutletInput = {
    where: toolScalarWhereInput;
    data: XOR<toolUpdateManyMutationInput, toolUncheckedUpdateManyWithoutOutletInput>;
  };

  export type toolScalarWhereInput = {
    AND?: toolScalarWhereInput | toolScalarWhereInput[];
    OR?: toolScalarWhereInput[];
    NOT?: toolScalarWhereInput | toolScalarWhereInput[];
    id?: UuidFilter<'tool'> | string;
    name?: StringFilter<'tool'> | string;
    type?: StringFilter<'tool'> | string;
    brand?: StringFilter<'tool'> | string;
    model?: StringFilter<'tool'> | string;
    price_per_day?: IntFilter<'tool'> | number;
    outlet_id?: UuidFilter<'tool'> | string;
    created_at?: DateTimeFilter<'tool'> | Date | string;
    updated_at?: DateTimeFilter<'tool'> | Date | string;
  };

  export type toolCreateWithoutRentalInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    outlet: outletCreateNestedOneWithoutToolInput;
  };

  export type toolUncheckedCreateWithoutRentalInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    outlet_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolCreateOrConnectWithoutRentalInput = {
    where: toolWhereUniqueInput;
    create: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
  };

  export type userCreateWithoutRentalInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales_associate?: sales_associateCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRentalInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales_associate?: sales_associateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRentalInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
  };

  export type toolUpsertWithoutRentalInput = {
    update: XOR<toolUpdateWithoutRentalInput, toolUncheckedUpdateWithoutRentalInput>;
    create: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    where?: toolWhereInput;
  };

  export type toolUpdateToOneWithWhereWithoutRentalInput = {
    where?: toolWhereInput;
    data: XOR<toolUpdateWithoutRentalInput, toolUncheckedUpdateWithoutRentalInput>;
  };

  export type toolUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    outlet?: outletUpdateOneRequiredWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutRentalInput = {
    update: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRentalInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
  };

  export type userUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_associate?: sales_associateUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_associate?: sales_associateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type outletCreateWithoutSales_associateInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOutletInput;
    tool?: toolCreateNestedManyWithoutOutletInput;
  };

  export type outletUncheckedCreateWithoutSales_associateInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool?: toolUncheckedCreateNestedManyWithoutOutletInput;
  };

  export type outletCreateOrConnectWithoutSales_associateInput = {
    where: outletWhereUniqueInput;
    create: XOR<outletCreateWithoutSales_associateInput, outletUncheckedCreateWithoutSales_associateInput>;
  };

  export type userCreateWithoutSales_associateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSales_associateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSales_associateInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSales_associateInput, userUncheckedCreateWithoutSales_associateInput>;
  };

  export type outletUpsertWithoutSales_associateInput = {
    update: XOR<outletUpdateWithoutSales_associateInput, outletUncheckedUpdateWithoutSales_associateInput>;
    create: XOR<outletCreateWithoutSales_associateInput, outletUncheckedCreateWithoutSales_associateInput>;
    where?: outletWhereInput;
  };

  export type outletUpdateToOneWithWhereWithoutSales_associateInput = {
    where?: outletWhereInput;
    data: XOR<outletUpdateWithoutSales_associateInput, outletUncheckedUpdateWithoutSales_associateInput>;
  };

  export type outletUpdateWithoutSales_associateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOutletNestedInput;
    tool?: toolUpdateManyWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateWithoutSales_associateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUncheckedUpdateManyWithoutOutletNestedInput;
  };

  export type userUpsertWithoutSales_associateInput = {
    update: XOR<userUpdateWithoutSales_associateInput, userUncheckedUpdateWithoutSales_associateInput>;
    create: XOR<userCreateWithoutSales_associateInput, userUncheckedCreateWithoutSales_associateInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSales_associateInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSales_associateInput, userUncheckedUpdateWithoutSales_associateInput>;
  };

  export type userUpdateWithoutSales_associateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSales_associateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type rentalCreateWithoutToolInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutToolInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateOrConnectWithoutToolInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>;
  };

  export type rentalCreateManyToolInputEnvelope = {
    data: rentalCreateManyToolInput | rentalCreateManyToolInput[];
    skipDuplicates?: boolean;
  };

  export type outletCreateWithoutToolInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOutletInput;
    sales_associate?: sales_associateCreateNestedManyWithoutOutletInput;
  };

  export type outletUncheckedCreateWithoutToolInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales_associate?: sales_associateUncheckedCreateNestedManyWithoutOutletInput;
  };

  export type outletCreateOrConnectWithoutToolInput = {
    where: outletWhereUniqueInput;
    create: XOR<outletCreateWithoutToolInput, outletUncheckedCreateWithoutToolInput>;
  };

  export type rentalUpsertWithWhereUniqueWithoutToolInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutToolInput, rentalUncheckedUpdateWithoutToolInput>;
    create: XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutToolInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutToolInput, rentalUncheckedUpdateWithoutToolInput>;
  };

  export type rentalUpdateManyWithWhereWithoutToolInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutToolInput>;
  };

  export type rentalScalarWhereInput = {
    AND?: rentalScalarWhereInput | rentalScalarWhereInput[];
    OR?: rentalScalarWhereInput[];
    NOT?: rentalScalarWhereInput | rentalScalarWhereInput[];
    id?: UuidFilter<'rental'> | string;
    start_date?: DateTimeFilter<'rental'> | Date | string;
    end_date?: DateTimeFilter<'rental'> | Date | string;
    total_price?: IntFilter<'rental'> | number;
    tool_id?: UuidFilter<'rental'> | string;
    user_id?: UuidFilter<'rental'> | string;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
  };

  export type outletUpsertWithoutToolInput = {
    update: XOR<outletUpdateWithoutToolInput, outletUncheckedUpdateWithoutToolInput>;
    create: XOR<outletCreateWithoutToolInput, outletUncheckedCreateWithoutToolInput>;
    where?: outletWhereInput;
  };

  export type outletUpdateToOneWithWhereWithoutToolInput = {
    where?: outletWhereInput;
    data: XOR<outletUpdateWithoutToolInput, outletUncheckedUpdateWithoutToolInput>;
  };

  export type outletUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOutletNestedInput;
    sales_associate?: sales_associateUpdateManyWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_associate?: sales_associateUncheckedUpdateManyWithoutOutletNestedInput;
  };

  export type rentalCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool: toolCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    tool_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateOrConnectWithoutUserInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalCreateManyUserInputEnvelope = {
    data: rentalCreateManyUserInput | rentalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type sales_associateCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    outlet: outletCreateNestedOneWithoutSales_associateInput;
  };

  export type sales_associateUncheckedCreateWithoutUserInput = {
    id?: string;
    outlet_id: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_associateCreateOrConnectWithoutUserInput = {
    where: sales_associateWhereUniqueInput;
    create: XOR<sales_associateCreateWithoutUserInput, sales_associateUncheckedCreateWithoutUserInput>;
  };

  export type sales_associateCreateManyUserInputEnvelope = {
    data: sales_associateCreateManyUserInput | sales_associateCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type rentalUpsertWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
  };

  export type rentalUpdateManyWithWhereWithoutUserInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutUserInput>;
  };

  export type sales_associateUpsertWithWhereUniqueWithoutUserInput = {
    where: sales_associateWhereUniqueInput;
    update: XOR<sales_associateUpdateWithoutUserInput, sales_associateUncheckedUpdateWithoutUserInput>;
    create: XOR<sales_associateCreateWithoutUserInput, sales_associateUncheckedCreateWithoutUserInput>;
  };

  export type sales_associateUpdateWithWhereUniqueWithoutUserInput = {
    where: sales_associateWhereUniqueInput;
    data: XOR<sales_associateUpdateWithoutUserInput, sales_associateUncheckedUpdateWithoutUserInput>;
  };

  export type sales_associateUpdateManyWithWhereWithoutUserInput = {
    where: sales_associateScalarWhereInput;
    data: XOR<sales_associateUpdateManyMutationInput, sales_associateUncheckedUpdateManyWithoutUserInput>;
  };

  export type outletCreateManyCompanyInput = {
    id?: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type outletUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_associate?: sales_associateUpdateManyWithoutOutletNestedInput;
    tool?: toolUpdateManyWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_associate?: sales_associateUncheckedUpdateManyWithoutOutletNestedInput;
    tool?: toolUncheckedUpdateManyWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_associateCreateManyOutletInput = {
    id?: string;
    user_id: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolCreateManyOutletInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    model: string;
    price_per_day: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_associateUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutSales_associateNestedInput;
  };

  export type sales_associateUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_associateUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateManyToolInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateManyUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    tool_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_associateCreateManyUserInput = {
    id?: string;
    outlet_id: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    tool_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    tool_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_associateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    outlet?: outletUpdateOneRequiredWithoutSales_associateNestedInput;
  };

  export type sales_associateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_associateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OutletCountOutputTypeDefaultArgs instead
   */
  export type OutletCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OutletCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ToolCountOutputTypeDefaultArgs instead
   */
  export type ToolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ToolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use outletDefaultArgs instead
   */
  export type outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    outletDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use rentalDefaultArgs instead
   */
  export type rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    rentalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use sales_associateDefaultArgs instead
   */
  export type sales_associateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    sales_associateDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use toolDefaultArgs instead
   */
  export type toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = toolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
