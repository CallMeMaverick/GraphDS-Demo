"use client"
import { useState } from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

// Register languages
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('python', python);

const codeSnippets = {
    cpp: `
unordered_map<int, vector<int>> buildGraph(vector<vector<int>>& edges) {
    unordered_map<int, vector<int>> graph;
    for (vector<int>& edge : edges) {
        int x = edge[0], y = edge[1];
        graph[x].push_back(y);
        // graph[y].push_back(x); // uncomment the above line if the graph is undirected
    }
    return graph;
}
    `,
    java: `
public Map<Integer, List<Integer>> buildGraph(int[][] edges) {
    Map<Integer, List<Integer>> graph = new HashMap<>();
    for (int[] edge: edges) {
        int x = edge[0], y = edge[1];
        if (!graph.containsKey(x)) {
            graph.put(x, new ArrayList<>());
        }
        graph.get(x).add(y);

        // if (!graph.containsKey(y)) {
        //     graph.put(y, new ArrayList<>());
        // }
        // graph.get(y).add(x);

        // uncomment the above lines if the graph is undirected
    }

    return graph;
}
    `,
    javascript: `
let buildGraph = edges => {
    let graph = new Map();
    for (const [x, y] of edges) {
        if (!graph.has(x)) {
            graph.set(x, []);
        }

        graph.get(x).push(y);

        // if (!graph.has(y)) {
        //     graph.set(y, []);
        // }

        // graph.get(y).push(x);
        // uncomment the above lines if the graph is undirected
    }
}
    `,
    python: `
from collections import defaultdict

def build_graph(edges):
    graph = defaultdict(list)
    for x, y in edges:
        graph[x].append(y)
        # graph[y].append(x)
        # uncomment the above line if the graph is undirected
    
    return graph
    `
};

const CodeSnippetBuildingGraph = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('cpp');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="flex flex-col container mx-auto p-4">
            <div className="flex justify-around mb-4">
                {Object.keys(codeSnippets).map(lang => (
                    <button
                        key={lang}
                        className={`px-4 py-2 rounded md:text-xl text-[10px] ${selectedLanguage === lang ? 'bg-sky-400 text-white' : 'bg-sky-200 text-gray-500'}`}
                        onClick={() => setSelectedLanguage(lang)}
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className="relative">
                <CopyToClipboard text={codeSnippets[selectedLanguage]} onCopy={handleCopy}>
                    <button className="absolute right-0 top-0 bg-sky-400 text-white px-2 py-1 rounded w-36">
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </CopyToClipboard>
                <SyntaxHighlighter
                    language={selectedLanguage}
                    style={vs2015}
                    showLineNumbers
                >
                    {codeSnippets[selectedLanguage]}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeSnippetBuildingGraph;
