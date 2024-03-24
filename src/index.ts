function entry(nodeID:string, component:string):void {
    const baseNode = document.getElementById(nodeID)
    baseNode ? baseNode.innerHTML = component : console.log("f");
}

export { entry }