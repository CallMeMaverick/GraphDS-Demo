"use client"
import React, { useEffect } from 'react';
import * as d3 from 'd3';

const GraphTheory = () => {
    useEffect(() => {
        const width = 700;
        const height = 500;
        const nodeRadius = 15;

        // Remove existing SVG if any
        d3.select('#d3-container').select('svg').remove();

        const svg = d3.select('#d3-container')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('border', '2px solid black')
            .style("border-radius", "10px")

        const nodes = d3.range(10).map(i => ({ id: i }));

        // Create a spanning tree to ensure all nodes are connected
        let links = [];
        for (let i = 1; i < nodes.length; i++) {
            links.push({ source: i, target: Math.floor(Math.random() * i) });
        }

        // Add some additional random links
        for (let i = 0; i < 5; i++) {
            links.push({
                source: Math.floor(Math.random() * nodes.length),
                target: Math.floor(Math.random() * nodes.length)
            });
        }

        const link = svg.selectAll('.link')
            .data(links)
            .enter().append('line')
            .attr('class', 'link')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', 1.5); // Setting stroke width

        const node = svg.selectAll('.node')
            .data(nodes)
            .enter().append('circle')
            .attr('class', 'node')
            .attr('r', nodeRadius)
            .attr('fill', '#ffffff')
            .attr('stroke', 'black') // Setting stroke color
            .attr('stroke-width', 1.5) // Setting stroke width
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-200))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('x', d3.forceX().x(d => Math.max(nodeRadius, Math.min(width - nodeRadius, d.x))))
            .force('y', d3.forceY().y(d => Math.max(nodeRadius, Math.min(height - nodeRadius, d.y))))
            .force('collision', d3.forceCollide().radius(nodeRadius + 5))
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
    }, []);


    return (
        <div id="d3-container" className="relative flex justify-center items-center w-full h-full">

        </div>
    );
};

export default GraphTheory;
