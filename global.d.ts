declare module '*?raw' {
  const content: string;
  export default content;
}
declare module '*?url' {
  const content: string;
  export default content;
}
declare module '*.css' {
  const content: unknown;
  export default content;
}
declare module '*.html' {
  const content: string;
  export default content;
}
declare module '*.md' {
  const content: string;
  export default content;
}
declare module '*.yaml' {
  const content: any;
  export default content;
}
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare const YAML: typeof import('yaml');

<<<<<<< HEAD
type PartialDeep<T, Options extends import('type-fest').PartialDeepOptions = {}> = import('type-fest').PartialDeep<
  T,
  Options
>;
type LiteralUnion<LiteralType, BaseType extends import('type-fest').Primitive = string> = import('type-fest').LiteralUnion<
  LiteralType,
  BaseType
>;
type SetRequired<BaseType, Keys extends keyof BaseType> = import('type-fest').SetRequired<BaseType, Keys>;

=======
>>>>>>> 6dc4e35995d4d180a1cd4ff223ac9d21f083e2f5
declare const z: typeof import('zod');
declare namespace z {
  export type infer<T> = import('zod').infer<T>;
  export type input<T> = import('zod').input<T>;
  export type output<T> = import('zod').output<T>;
}
<<<<<<< HEAD
declare const createApp: typeof import('vue').createApp;
declare const inject: typeof import('vue').inject;
declare const reactive: typeof import('vue').reactive;
declare const readonly: typeof import('vue').readonly;
declare const ref: typeof import('vue').ref;
declare const watchEffect: typeof import('vue').watchEffect;
declare const createPinia: typeof import('pinia').createPinia;
declare const defineStore: typeof import('pinia').defineStore;
declare const useIntervalFn: typeof import('@vueuse/core').useIntervalFn;
declare const watchIgnorable: typeof import('@vueuse/core').watchIgnorable;
declare const dedent: typeof import('dedent').default;
declare const klona: typeof import('klona').klona;
=======
>>>>>>> 6dc4e35995d4d180a1cd4ff223ac9d21f083e2f5

declare module 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js' {
  export function registerMvuSchema(
    schema: z.ZodType<Record<string, any>> | (() => z.ZodType<Record<string, any>>),
  ): void;
}
<<<<<<< HEAD
declare module 'https://testingcf.jsdelivr.net/gh/MagicalAstrogy/MagVarUpdate/artifact/bundle.js' {}
=======
>>>>>>> 6dc4e35995d4d180a1cd4ff223ac9d21f083e2f5
