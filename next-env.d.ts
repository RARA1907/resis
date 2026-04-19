/// <reference types="next" />
/// <reference types="next/image" />

declare module "*.png" {
  const value: string;
  export default value;
}