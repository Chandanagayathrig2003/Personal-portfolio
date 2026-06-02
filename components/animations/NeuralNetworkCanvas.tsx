"use client";
import { useEffect, useRef } from "react";

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    // Define layers
    const layers = [
      { nodes: 4, x: W * 0.15, label: "Input" },
      { nodes: 6, x: W * 0.38, label: "Hidden 1" },
      { nodes: 5, x: W * 0.62, label: "Hidden 2" },
      { nodes: 3, x: W * 0.85, label: "Output" },
    ];

    const nodePositions: { x: number; y: number; layer: number; idx: number }[] = [];

    // Build node positions
    layers.forEach((layer, li) => {
      const spacing = H / (layer.nodes + 1);
      for (let i = 0; i < layer.nodes; i++) {
        nodePositions.push({
          x: layer.x,
          y: spacing * (i + 1),
          layer: li,
          idx: i,
        });
      }
    });

    // Build connections
    const connections: { from: number; to: number; weight: number }[] = [];
    for (let li = 0; li < layers.length - 1; li++) {
      const fromNodes = nodePositions.filter((n) => n.layer === li);
      const toNodes = nodePositions.filter((n) => n.layer === li + 1);
      fromNodes.forEach((f, fi) => {
        toNodes.forEach((t, ti) => {
          connections.push({
            from: nodePositions.indexOf(f),
            to: nodePositions.indexOf(t),
            weight: Math.sin(fi * 1.3 + ti * 0.7) * 0.5 + 0.5,
          });
        });
      });
    }

    const draw = () => {
      timeRef.current += 0.02;
      const t = timeRef.current;

      ctx.clearRect(0, 0, W, H);

      // Draw connections
      connections.forEach((conn, ci) => {
        const from = nodePositions[conn.from];
        const to = nodePositions[conn.to];
        const pulse = Math.sin(t * 2 + ci * 0.3) * 0.5 + 0.5;
        const alpha = conn.weight * 0.4 * pulse;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();

        // Animated pulse along connection
        if (Math.sin(t + ci) > 0.7) {
          const pct = ((t * 0.5 + ci * 0.1) % 1);
          const px = from.x + (to.x - from.x) * pct;
          const py = from.y + (to.y - from.y) * pct;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#00d4ff";
          ctx.shadowColor = "#00d4ff";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw nodes
      nodePositions.forEach((node, ni) => {
        const pulse = Math.sin(t * 1.5 + ni * 0.4) * 0.3 + 0.7;
        const colors = ["#00d4ff", "#7c3aed", "#a855f7", "#00ffff"];
        const color = colors[node.layer];

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, 12 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, 0.1)`;
        ctx.fill();

        // Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 7, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 7);
        grad.addColorStop(0, "rgba(255,255,255,0.9)");
        grad.addColorStop(1, color);
        ctx.fillStyle = grad;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Layer labels
      layers.forEach((layer) => {
        ctx.fillStyle = "rgba(0, 212, 255, 0.6)";
        ctx.font = "11px monospace";
        ctx.textAlign = "center";
        ctx.fillText(layer.label, layer.x, H - 10);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={380}
      className="w-full h-full opacity-90"
      aria-hidden="true"
    />
  );
}
