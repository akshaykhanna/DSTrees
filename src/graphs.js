class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2) {
    if (node1 in this.adjList && node2 in this.adjList) {
      this.adjList[node1].push(node2);
      this.adjList[node2].push(node1);
    }
  }

  removeNode(node) {
    this.adjList[node].forEach((n) => {
      this.adjList[n] = this.adjList[n].filter((p) => p != node);
    });
    this.nodes = this.nodes.filter((p) => p != node);
    delete this.adjList[node];
  }

  removeEdge(node1, node2) {
    if (node1 in this.adjList && node2 in this.adjList) {
      this.adjList[node2] = this.adjList[node2].filter((p) => p != node1);
      this.adjList[node1] = this.adjList[node1].filter((p) => p != node2);
    } else {
      return 'Please pass in valid indices';
    }
  }

  depthFirstTraversal(startingNode, func = console.log) {
    if(startingNode) {
      const v = {};
      const stack = [startingNode];
      while(stack.length > 0) {
        const curr = stack.pop();
        this.adjList[curr].forEach(p => !(p in v) && stack.push(p));
        func(curr);
        v[curr] = 1;
      }
    }
    return 'No starting node was provided';
  }

  breadthFirstTraversal(startingNode, func = console.log) {
    if(startingNode) {
      const v = {}
      const queue = [startingNode];
      while(queue.length > 0){
        const curr = queue.shift();
         if(!(curr in v)) {
           this.adjList[curr].forEach(p => !(p in v) && queue.push(p));
           func(curr);
           v[curr] = 1;
         }
      }
    }
    return 'No starting node was provided';
  }
}

export default Graph;
