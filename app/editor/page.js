import GraphComponent from "@/components/GraphEditor";
import Link from "next/link";

export default function GraphEditor() {
    return (
        <>
            <div
                className={"flex flex-col justify-center items-center m-0 mt-4 w-7/12 mx-auto text-xl gap-5 leading-10"}>
                <h1 className={"font-bold text-6xl text-sky-400"}>Command Interface</h1>
                <div>
                    <p>Below you will find documentation on how to use the editor.</p>

                    <div className={"mt-4"}>
                        <h1 className={"text-sky-400 text-3xl font-bold mt-4"}>Nodes</h1>
                        <div>
                            <ul>
                                <li>
                                    <span className={"command"}>add node <span
                                        className={"font-bold"}>node_id</span></span> -
                                    add node with specified id
                                </li>
                                <li>
                                    <span className={"command"}>delete node <span
                                        className={"font-bold"}>node_id</span></span> -
                                    delete node with specified id
                                </li>
                            </ul>
                        </div>

                        <h1 className={"text-sky-400 text-3xl font-bold mt-4"}>Links</h1>
                        <div>
                            <ul>
                                <li>
                                    <span className={"command"}>add link <span
                                        className={"font-bold"}>target</span> <span
                                        className={"font-bold"}>source</span></span> -
                                    add link connecting <span className={"font-bold"}>target</span> with <span
                                    className={"font-bold"}>source</span>
                                </li>
                                <li>
                                    <span className={"command"}>delete link <span
                                        className={"font-bold"}>target</span> <span
                                        className={"font-bold"}>source</span></span> -
                                    delete link connecting <span className={"font-bold"}>target</span> with <span
                                    className={"font-bold"}>source</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <GraphComponent/>

                <div className={"flex flex-row justify-between items-center text-center mt-20 gap-72"}>
                    <Link className={"hover:bg-sky-400 bg-sky-300 text-white font-bold w-36 h-10 rounded-2xl"}
                          href={"/manipulation"}>Manipulation</Link>
                    <Link className={"hover:bg-sky-400 bg-sky-300 text-white font-bold w-36 h-10 rounded-2xl"}
                          href={"/"}>Home</Link>
                </div>
            </div>
        </>
    )
}