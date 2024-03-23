var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/index.ts
var require_src = __commonJS({
  "src/index.ts"(exports, module) {
    function test() {
      console.log("hello world");
    }
    function test2() {
      console.log("cuak");
    }
    module.exports = { test, test2 };
  }
});
export default require_src();
//# sourceMappingURL=index.mjs.map