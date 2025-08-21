// src/typings.d.ts

// Declaración para AOS — expone init/refresh y un default export
declare module 'aos' {
  interface AOSStatic {
    init(options?: any): void;
    refresh(): void;
    refreshHard?(): void;
    [key: string]: any;
  }

  const AOS: AOSStatic;

  export default AOS;
  export function init(options?: any): void;
  export function refresh(): void;
  export function refreshHard(): void;
}

// Declaración para cualquier archivo JSON
declare module '*.json' {
  const value: any;
  export default value;
}
