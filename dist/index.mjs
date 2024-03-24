// src/index.ts
function entry(nodeID, component) {
  const baseNode = document.getElementById(nodeID);
  baseNode ? baseNode.innerHTML = component : console.log("f");
}
export {
  entry
};
//# sourceMappingURL=index.mjs.map