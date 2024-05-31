"use client";
import React, { useEffect } from 'react';
import * as d3 from 'd3';

const DirectedGraphTheory = () => {
    useEffect(() => {
        const updateGraph = () => {
            const isMobile = window.innerWidth <= 768;
            const width = isMobile ? 400 : 700;
            const height = isMobile ? 400 : 500;
            const nodeRadius = 15;

            d3.select('#d3-container-directed').select('svg').remove();

            const svg = d3.select('#d3-container-directed')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .style('border', '2px solid black')
                .style('border-radius', '10px');

            svg.append('defs').append('marker')
                .attr('id', 'arrowhead')
                .attr('viewBox', '-0 -5 10 10')
                .attr('refX', 23)
                .attr('refY', 0)
                .attr('orient', 'auto')
                .attr('markerWidth', 10)
                .attr('markerHeight', 10)
                .attr('xoverflow', 'visible')
                .append('svg:path')
                .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
                .attr('fill', '#999')
                .style('stroke', 'none');

            const nodes = d3.range(4).map(i => ({ id: i }));
            const links = [
                { source: 0, target: 1 },
                { source: 1, target: 2 },
                { source: 2, target: 3 },
                { source: 3, target: 0 },
                { source: 0, target: 2 }
            ];

            const link = svg.selectAll('.link')
                .data(links)
                .enter().append('line')
                .attr('class', 'link')
                .attr('stroke', '#999')
                .attr('stroke-opacity', 0.6)
                .attr('stroke-width', 1.5)
                .attr('marker-end', 'url(#arrowhead)');

            const node = svg.selectAll('.node')
                .data(nodes)
                .enter().append('circle')
                .attr('class', 'node')
                .attr('r', nodeRadius)
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
                .text(d => d.id)

            const simulation = d3.forceSimulation(nodes)
                .force('link', d3.forceLink(links).id(d => d.id).distance(150))
                .force('charge', d3.forceManyBody().strength(-300))
                .force('center', d3.forceCenter(width / 2, height / 2))
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
    }, []);

    return (
        <div id="d3-container-directed" className="flex justify-center items-center md:w-full md:h-full w-[350px] h-[450px]">
        </div>
    );
};

export default DirectedGraphTheory;



