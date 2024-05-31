"use client";
import GraphTheory from "@/components/GraphTheory";
import DirectedGraphTheory from "@/components/DirectedGraphTheory";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TheorySection() {
    const [popup, setPopup] = useState(false);


    return (
        <div className={"flex flex-col justify-center items-center m-0 mt-4 w-7/12 mx-auto md:text-xl text-[15px] gap-5 md:leading-10 leading-7"}>
            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold"}>Introduction</h1>
            <div className={"md:w-10/12 w-[320px]"}>
                <p className="mb-4">
                    We like Oppenheimer, but theory in data structures and algorithms will{" "}
                    <span className="font-bold text-sky-400">not</span> just take you so far. Understanding the
                    fundamentals is
                    crucial, but applying these concepts to solve real-world problems is where the true power lies.
                </p>
            </div>

            <div className={"md:w-10/12 w-[320px]"}>
                <p className="mb-4">
                    In computer science, graphs are incredibly versatile structures that represent a set of objects and
                    the
                    connections between them. These objects are called{" "}
                    <span className={"custom-span-highlight"}>nodes</span> or{" "}
                    <span className={"custom-span-highlight"}>vertices</span>, and the connections are known as{" "}
                    <span className={"custom-span-highlight"}>edges</span>. Graphs can model a variety of systems in
                    diverse
                    fields, such as social networks, communication networks, biological networks, and more.
                </p>
            </div>

            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold"}>Graphs</h1>
            <div className={"flex flex-col justify-between md:w-10/12 w-[320px]"}>
                <div className={"md:w-10/12 w-[320px]"}>
                    <p className="mb-4">
                        As was mentioned earlier, a <span className={"custom-span-highlight"}>graphs</span> is any
                        collection of{" "}
                        <span className={"custom-span-highlight"}>nodes</span> and connections between those{" "}
                        <span className={"custom-span-highlight"}>nodes</span>.
                    </p>
                </div>

                <div className={"flex flex-row justify-between items-center"}>
                    <p className="">
                        If we were to represent it visually, it would look something like that:
                    </p>

                    <div
                        className="z-50 md:w-1/12"
                        onMouseEnter={() => setPopup(true)}
                        onMouseLeave={() => setPopup(false)}
                    >
                        <svg
                            className={"self-end"}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                fill="#1C274C"
                            />
                        </svg>
                    </div>
                </div>

                <div className={"h-10 mt-4"}>
                    {popup &&

                        <div className={"flex justify-center items-center"}>
                            <motion.p
                                className={"text-sky-300"}
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.8}}
                                transition={{duration: 0.3}}
                            >You can drag nodes and explore connections
                            </motion.p>
                        </div>
                    }
                </div>

                <div className={"flex justify-center max-w-7xl"}>
                    <GraphTheory />
                </div>
            </div>

            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold text-center"}>Graph Terminology</h1>
            <div className={"flex flex-col justify-between md:w-10/12 w-[320px]"}>
                <p className="mb-4">
                    In graphs, edges can be either <span className={"custom-span-highlight"}>directed</span> or <span
                    className={"custom-span-highlight"}>undirected</span>.
                    Directed edges mean you can only move in one direction.
                    For example, if there&apos;s a directed edge from node <span
                    className={"custom-span-highlight"}>A</span> to node <span
                    className={"custom-span-highlight"}>B</span>, you can go from <span
                    className={"custom-span-highlight"}>A</span> to <span
                    className={"custom-span-highlight"}>B</span>, but not from
                    <span
                        className={"custom-span-highlight"}>B</span> to <span
                    className={"custom-span-highlight"}>A</span>.
                </p>
                <p className="mb-4">
                    In diagrams, directed edges are shown as arrows. Undirected edges, on the other hand, allow movement
                    in both directions, so you can travel from
                    <span className={"custom-span-highlight"}>A</span> to <span
                    className={"custom-span-highlight"}>B</span> and
                    <span className={"custom-span-highlight"}>B</span> to <span
                    className={"custom-span-highlight"}>A</span>.
                    These edges are represented as simple lines
                    between nodes.
                </p>

                <div className={"custom-span-highlight flex justify-center items-center text-center"}>
                    <p>In binary trees, for instance, the edges were directed. Binary trees are directed graphs. You
                        can&apos;t access a node&apos;s parent, only its children. Once you move to a child, you can&apos;t move
                        back.</p>
                </div>

                <div>
                    <h1 className={"text-3xl text-sky-300 font-bold self-start mt-4 mb-4"}>Directed graph</h1>
                    <div className={"flex justify-center max-w-7xl"}>
                        <DirectedGraphTheory/>
                    </div>

                </div>
            </div>

            <h1 className={"md:text-6xl text-3xl text-sky-300 font-bold text-center"}>Connected Component</h1>
            <div className={"flex flex-col justify-between md:w-10/12 w-[320px]"}>
                <p className="mb-4">
                    Another key concept is the connected component.
                    A connected component in a graph is a <span
                    className={"custom-span-highlight"}>set of nodes</span> that are <span
                    className={"custom-span-highlight"}>interconnected by edges</span>.
                </p>

                <div className={"custom-span-highlight flex justify-center items-center text-center mb-4"}>
                    <p>For instance, in binary trees, there must be only one connected component, meaning all nodes must
                        be reachable from the root node.</p>
                </div>

                <p className="mb-4">
                    A node can have multiple edges attached to it. In a directed graph,
                    a node can have numerous edges entering and leaving it.
                    The number of edges that can reach the node is called its <span
                    className={"custom-span-highlight"}>indegree</span>,
                    while the number of edges that can leave the node is called its <span
                    className={"custom-span-highlight"}>outdegree</span>.
                    Nodes connected by an edge are referred to as neighbors.
                    For instance, in a graph like <span
                    className={"custom-span-highlight"}>A &lt;-&gt; B &lt;-&gt; C</span>, <span
                    className={"custom-span-highlight"}>A</span> and <span
                    className={"custom-span-highlight"}>B</span> are neighbors, <span
                    className={"custom-span-highlight"}>B</span> is a
                    neighbor to both <span
                    className={"custom-span-highlight"}>A</span> and <span
                    className={"custom-span-highlight"}>C</span>, and <span
                    className={"custom-span-highlight"}>C</span> is a neighbor to <span
                    className={"custom-span-highlight"}>B</span>.
                </p>

                <div className="flex flex-row justify-between items-center text-center mt-20">
                    <Link
                        className="hover:bg-sky-400 bg-sky-300 text-white font-bold w-36 h-10 rounded-2xl flex justify-center items-center"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="hover:bg-sky-400 bg-sky-300 text-white font-bold w-36 h-10 rounded-2xl flex justify-center items-center"
                        href="/manipulation"
                    >
                        Manipulation
                    </Link>
                </div>

            </div>
        </div>
    );
}
