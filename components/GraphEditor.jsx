"use client"
import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { motion } from "framer-motion";

const GraphComponent = () => {
    const [nodes, setNodes] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]);
    const [links, setLinks] = useState([
        { source: 1, target: 5 },
        { source: 2, target: 4 },
        { source: 3, target: 5 },
        { source: 1, target: 3 },
        { source: 5, target: 2 },
    ]);

    useEffect(() => {
        const updateGraph = () => {
            const isMobile = window.innerWidth <= 768;
            const width = isMobile ? 350 : 700;
            const height = isMobile ? 450 : 500;
            const nodeRadius = 15;

            d3.select('#d3-edit').select('svg').remove();

            const svg = d3.select('#d3-edit')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .style('border', '2px solid black')
                .style("border-radius", "10px");

            const link = svg.selectAll('.link')
                .data(links)
                .enter().append('line')
                .attr('class', 'link')
                .attr('stroke', '#999')
                .attr('stroke-opacity', 0.6)
                .attr('stroke-width', 1.5);

            const node = svg.selectAll('.node')
                .data(nodes)
                .enter().append('circle')
                .attr('class', 'node')
                .attr('r', nodeRadius * 1.5)
                .attr('fill', '#ffffff')
                .attr('stroke', 'black')
                .attr('stroke-width', 1.5)
                .call(d3.drag()
                    .on('start', dragstarted)
                    .on('drag', dragged)
                    .on('end', dragended));

            const text = svg.selectAll('.text')
                .data(nodes)
                .enter().append('text')
                .attr('class', 'text')
                .attr('dx', -nodeRadius / 2)
                .attr('dy', '.35em')
                .text(d => d.id);

            const simulation = d3.forceSimulation(nodes)
                .force('link', d3.forceLink(links).id(d => d.id).distance(100))
                .force('charge', d3.forceManyBody().strength(-100))
                .force('center', d3.forceCenter(width / 2, height / 2))
                .force('x', d3.forceX(width / 2).strength(0.1))
                .force('y', d3.forceY(height / 2).strength(0.1))
                .force('collision', d3.forceCollide().radius(nodeRadius * 2 + 2))
                .on('tick', ticked);

            function ticked() {
                link
                    .attr('x1', d => d.source.x)
                    .attr('y1', d => d.source.y)
                    .attr('x2', d => d.target.x)
                    .attr('y2', d => d.target.y);

                node
                    .attr('cx', d => Math.max(nodeRadius, Math.min(width - nodeRadius, d.x)))
                    .attr('cy', d => Math.max(nodeRadius, Math.min(height - nodeRadius, d.y)));

                text
                    .attr('x', d => Math.max(nodeRadius, Math.min(width - nodeRadius, d.x)))
                    .attr('y', d => Math.max(nodeRadius, Math.min(height - nodeRadius, d.y)));
            }

            function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }

            return () => {
                svg.selectAll('*').remove();
            };
        };

        updateGraph();
        window.addEventListener('resize', updateGraph);

        return () => {
            window.removeEventListener('resize', updateGraph);
        };
    }, [nodes, links]);

    const handleCommand = (command) => {
        const parts = command.trim().split(' ');
        if (parts[0] === 'add') {
            if (parts[1] === 'node') {
                const id = parseInt(parts[2]);
                if (!isNaN(id) && !nodes.find(node => node.id === id)) {
                    setNodes([...nodes, { id }]);
                }
            } else if (parts[1] === 'link') {
                const source = parseInt(parts[2]);
                const target = parseInt(parts[3]);
                if (!isNaN(source) && !isNaN(target) && source !== target) {
                    if (nodes.find(node => node.id === source) && nodes.find(node => node.id === target)) {
                        setLinks([...links, { source, target }]);
                    }
                }
            }
        } else if (parts[0] === "delete") {
            if (parts[1] === "node") {
                const idToDelete = parseInt(parts[2]);
                if (!isNaN(idToDelete) && nodes.find(node => node.id === idToDelete)) {
                    setNodes(nodes.filter(node => node.id !== idToDelete));
                    setLinks(links.filter(link =>
                        link.source.id !== idToDelete && link.target.id !== idToDelete
                    ));
                }

            } else if (parts[1] === "link") {
                const source = parseInt(parts[2]);
                const target = parseInt(parts[3]);

                setLinks(links.filter(link =>
                    !(link.source.id === source && link.target.id === target) &&
                    !(link.source.id === target && link.target.id === source)
                ));
            }
        }
    };

    return (
        <div className={"flex flex-col justify-center self-center mt-4"}>
            <div className={"flex md:flex-row flex-col justify-around items-center mb-4 gap-12"}>
                <input className={"bg-gray-200 rounded-xl p-2"} type="text" id="command-input" placeholder="Enter command" />
                <motion.button
                    className={"hover:bg-sky-400 bg-sky-300 text-white p-2 border rounded-xl border-sky-300 w-36"}
                    onClick={() => handleCommand(document.getElementById('command-input').value)}
                    whileHover={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                >Execute
                </motion.button>
            </div>
            <div id="d3-edit" className="relative flex justify-center items-center md:w-full md:h-full w-[350px] h-[450px]"></div>
        </div>
    );
};

export default GraphComponent;


