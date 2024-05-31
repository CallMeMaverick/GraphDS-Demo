import CodeSnippetBuildingGraph from "@/components/CodeSnippetBuildingGraph";
import Link from "next/link";

export default function Manipulation() {
    return (
        <div className={"flex flex-col justify-center items-center m-0 mt-4 w-7/12 mx-auto md:text-xl text-[15px] gap-5 md:leading-10 leading-7"}>
            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold text-center"}>How are graphs presented in problems?</h1>
            <div className={"md:w-10/12 w-[320px]"}>
                <p className="mb-4">
                    In linked list problems, the head of the linked list is provided. In binary tree problems, the root
                    of the tree is given. In graph problems, however, only information about the graph is provided. This
                    information can come in various common formats, and we&apos;ll explore a few of them.
                </p>
            </div>

            <div className={"md:w-10/12 w-[320px] custom-span-highlight flex flex-col justify-center items-center"}>
                <p className={"p-4"}>It&apos;s important to understand that in linked lists and binary trees, you are given
                    actual objects in memory containing data and pointers.
                    With graphs, the graph doesn&apos;t physically exist in memory.</p>

                <p className={"p-4"}>
                    Essentially, only the <span className={"font-bold text-sky-500"}>&quot;concept&quot;</span> of the graph
                    exists.
                    The input will provide some information about it,
                    and it’s your task to figure out how to represent and traverse the graph using code.
                </p>


                <p className={"p-4"}>
                    Often, the nodes of a graph are labeled from <span
                    className={"font-bold text-sky-500"}>0 to n - 1</span>.
                    The problem statement might not explicitly say that the input is a graph. Sometimes, there might be
                    a narrative, and you need to deduce that the input represents a graph. For example, <span
                    className={"font-bold text-sky-500"}>&quot;there are n
                    cities labeled from 0 to n - 1&quot;</span>. You can consider each city as a node, with each city having
                    a
                    unique label.
                </p>
            </div>

            <div className={"md:w-10/12 w-[320px]"}>
                <p>
                    With binary trees, traversal is straightforward because each node only references node.left and
                    node.right.
                    This lets us focus solely on traversal methods like DFS or BFS.
                    In graphs, however, a node can have many neighbors. Before starting our traversal, we often need to
                    ensure that we can quickly access all the neighbors of any given node.
                </p>

                <p>
                    What does this mean exactly? It’s easiest to understand with an example.
                </p>
            </div>

            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold text-center self-center md:w-10/12 w-[320px]"}>First input format: array
                of edges</h1>
            <div className={"md:text-xl flex flex-col justify-center md:w-10/12 w-[320px]"}>
                <p>
                    In this format, the input is a 2D array where each element is in the form [x, y], indicating an edge
                    between nodes x and y. The problem might frame these edges within a context, such as &quot;[x, y] means
                    there`&apos;s a highway connecting city x and city y&quot;.
                </p>

                <div className={"custom-span-highlight flex flex-col justify-center items-center mt-4 mb-4"}>
                    <p className={"p-4"}>
                        Edges can be directed or undirected, as specified in the problem description.
                    </p>
                </div>

                <p>
                    So, why can&apos;t we start traversal right away? Imagine we want to begin a DFS from node 0. How do we
                    find its neighbors? We&apos;d have to iterate through the entire input to find all edges involving node
                    0. Moving to a neighbor node would require another full iteration to find its neighbors, and so on.
                </p>
                <br/>
                <p>
                    This process—iterating through the entire input to find neighbors at each node—is inefficient and
                    slow.
                </p>
                <br/>
                <p>
                    To streamline traversal, we can preprocess the input to quickly access all neighbors of any node.
                    Ideally, we want a data structure that, given a node, returns a list of its neighbors.
                    A hash map is an excellent tool for this.
                </p>
                <br/>
                <p>
                    Consider a hash map graph that maps integers to lists of integers.
                    We can iterate over the input array and, for each [x, y] pair,
                    add y to the list associated with graph[x].
                    If the edges are undirected, we also add x to the list associated with graph[y]. Once this hash map
                    is built, calling graph[0] will immediately provide all neighbors of node 0.
                </p>

                <div className={"custom-span-highlight flex flex-col justify-center items-center mt-4 mb-4"}>
                    <p className={"p-4"}>
                        A useful analogy: imagine you&apos;re on Facebook and want to see a list of all your friends. If
                        Facebook
                        stored its graph as an array of edges, you&apos;d need to scan through every single connection
                        worldwide to
                        find your friends, which would be extremely slow given the vast number of connections. Instead,
                        by
                        pre-building the graph, you can simply click the friends tab on your profile to instantly see
                        your
                        friends.
                    </p>
                </div>

                <div className={"md:w-max w-[370px] self-center mb-4"}>
                    <CodeSnippetBuildingGraph/>
                </div>
            </div>

            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold text-center self-center md:w-10/12 w-[320px]"}>Second input format:
                adjacency list</h1>
            <div className={"flex flex-col justify-center md:w-10/12 w-[320px]"}>
                <p>
                    In an adjacency list, the nodes will be numbered from <span className={"custom-span-highlight"}>0 to n - 1</span>.
                    The input will be a <span className={"custom-span-highlight"}>2D integer array</span> ,
                    let&apos;s call it graph. <span className={"custom-span-highlight"}>graph[i]</span> will
                    be a list of all the outgoing edges from the
                    𝑖<sup>th</sup> node.
                </p>

                <p>
                    The graph shown in the image can be represented using an adjacency list like this: <span
                    className={"custom-span-highlight"}>graph = [[1], [2], [0, 3], []]</span>.
                </p>
                <br/>
                <p>
                    With this format, we can directly access all the neighbors of any node without needing any
                    pre-processing.
                    This makes the adjacency list a very convenient format.
                    For example, to find all the neighbors of node 6, we simply look at <span
                    className={"custom-span-highlight"}>graph[6]</span>.
                </p>
            </div>

            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold text-center self-center md:w-10/12 w-[320px]"}>Third input format:
                adjacency matrix</h1>
            <div className={"flex flex-col justify-center md:w-10/12 w-[320px]"}>
                <p>
                    The next format is an adjacency matrix. Once again, the nodes will be numbered from <span
                    className={"custom-span-highlight"}>0 to n - 1</span> . You will be given a 2D matrix of size <span
                    className={"custom-span-highlight"}>n x n</span>, let&apos;s call it graph. If <span
                    className={"custom-span-highlight"}>graph[i][j] ==
                    1</span>, that means there is an outgoing edge from node <span
                    className={"custom-span-highlight"}>i</span> to node <span
                    className={"custom-span-highlight"}>j</span>.
                </p>

                <p>
                    When given this format, you have two options. During traversal, for any node, you can iterate
                    over graph[node], and if <span
                    className={"custom-span-highlight"}>graph[node][i] == 1</span>, you know that node i is a
                    neighbor.
                    Alternatively, you can pre-process the graph similar to how we did with an array of edges.
                    You can build a hash map and iterate over the entire graph. If <span
                    className={"custom-span-highlight"}>graph[i][j] == 1</span>,
                    then add <span
                    className={"custom-span-highlight"}>j</span> to the list associated with <span
                    className={"custom-span-highlight"}>graph[i]</span>.
                    This way, during traversal, you won&apos;t need to
                    iterate n times at each node to find its neighbors. This method is especially useful when nodes have
                    only a few neighbors, but n is large.
                </p>
                <br/>
                <p>
                    Both approaches have a time complexity of 𝑂(𝑛<sup>2</sup>).
                </p>
            </div>

            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold text-center self-center md:w-10/12 w-[320px]"}>Last input format: matrix</h1>
            <div className={"flex flex-col justify-center md:w-10/12 w-[320px]"}>
                <p>
                    The final format we&apos;ll discuss is more subtle but quite common.
                    Here, the input is a 2D matrix, and the problem describes a scenario where each square
                    represents something, and these squares are interconnected in some way.
                    For example, <span
                    className={"custom-span-highlight"}>&quot;Each square of the matrix is a village.
                    Villages trade with their neighboring villages, which are directly above,
                    left, right, or below them.&quot;</span>.
                </p>

                <p>
                    In this scenario, each square at <span
                    className={"custom-span-highlight"}>(row, col)</span> in the matrix is a node,
                    and its neighbors are at <span
                    className={"custom-span-highlight"}>row - 1, col), (row, col - 1), (row + 1,
                    col), and (row, col + 1)</span>,
                    provided they are within bounds.
                </p>
                <br/>
                <p>
                    Unlike other formats, the nodes in these graphs aren&apos;t labeled from <span
                    className={"custom-span-highlight"}>0 to n</span> .
                    Instead, each element in the matrix is a node, and the edges are defined by the problem description,
                    not the input.
                    In the given example, the problem description specifies that villages trade with directly adjacent
                    villages.
                    Thus, the edges are between squares within one step.
                    You&apos;ll need to carefully analyze the problem to understand these types of graphs..
                </p>

                <div className="flex flex-row justify-between items-center text-center mt-20">
                    <Link
                        className="hover:bg-sky-400 bg-sky-300 text-white font-bold w-36 h-10 rounded-2xl flex justify-center items-center"
                        href="/theory"
                    >
                        Theory
                    </Link>
                    <Link
                        className="hover:bg-sky-400 bg-sky-300 text-white font-bold w-36 h-10 rounded-2xl flex justify-center items-center"
                        href="/editor"
                    >
                        Editor
                    </Link>
                </div>
            </div>
        </div>
    )
}