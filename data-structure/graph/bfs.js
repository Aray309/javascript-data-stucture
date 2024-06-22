const componentTree = {
    HTML:["Head","Body"],
    Head:["Title","MetaData"],
    Body:["Compo_1","Compo_2"],
    Title:["App_Title"],
    MetaData:[],
    Compo_1:[],
    Compo_2:[],
    App_Title:[]
}
function bfs(tree,start_node){
    const queue=[start_node];
    const traversal_node={};
    const dfs_result=[];

    //adding first node
    traversal_node[start_node]=true;

    //start looping
    while(queue.length){
        const current_index = queue.shift();
        dfs_result.push(current_index);

        //looping over the main tree
        tree[current_index].forEach(element => {
            if (!traversal_node[element]) {
                traversal_node[element]=true;
                queue.push(element)
            }
        });
    }
    return dfs_result
}
console.log(bfs(componentTree,"HTML"))