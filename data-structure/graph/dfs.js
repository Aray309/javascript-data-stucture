const componentTree = {
  HTML: ["Head", "Body"],
  Head: ["Title", "MetaData"],
  Body: ["Compo_1", "Compo_2"],
  Title: ["App_Title"],
  MetaData: [],
  Compo_1: [],
  Compo_2: [],
  App_Title: [],
};
function dfs(tree, start_node) {
  const stack = [start_node];
  const traversal = new Set();
  const result_dfs = [];

  //adding the starting node to given set
  traversal.add(start_node);

  //looping over the stack
  while (stack.length) {
    const current_index = stack.pop();
    result_dfs.push(current_index);

    //loop over the entire tree
    if (tree[current_index]) {
      tree[current_index].forEach((element) => {
        if (!traversal.has(element)) {
          traversal.add(element);
          stack.push(element);
        }
      });
    }
  }
  return result_dfs;
}
console.log(dfs(componentTree, "HTML"));
