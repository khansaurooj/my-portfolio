import React, { useRef, useEffect } from "react";

/**
 * SpiralBackground
 * A lightweight animated canvas background with:
 *  - Spiral orbits
 *  - Spring-like chains (linked dots)
 *  - Gentle parallax drift
 *
 * Colors match your theme:
 *  - Primary teal: #00FFDE
 *  - Accent gold:  #C59560
 *  - Base:         #064232 on black
 *
 * Usage:
 *  Place <SpiralBackground /> as the first child inside your Home section
 *  (positioned absolutely under your content).
 *
 *  <section id="home" className="home-section" style={{position:'relative', overflow:'hidden'}}>
 *    <SpiralBackground />
 *    <div className="overlay"></div>
 *    <div className="content"> ... </div>
 *  </section>
 */

const SpiralBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const DPR = window.devicePixelRatio || 1;
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    ctx.scale(DPR, DPR);

    // THEME COLORS
    const TEAL = "#00FFDE";
    const GOLD = "#C59560";
    const BG = "rgba(0,0,0,0.15)"; // subtle trail blend

    // Resize handling
    const onResize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    // ---------- Spiral particles ----------
    const spirals = Array.from({ length: 3 }).map((_, i) => ({
      cx: Math.random() * w,
      cy: Math.random() * h,
      baseR: 40 + Math.random() * 80,
      arm: 55 + Math.random() * 110,
      speed: 0.005 + Math.random() * 0.003,
      theta: Math.random() * Math.PI * 2,
      color: i % 2 ? TEAL : GOLD,
      alpha: 0.13 + Math.random() * 0.12,
    }));

    // ---------- Spring chains (linked dots) ----------
    const chains = Array.from({ length: 4 }).map((_, i) => {
      const points = Array.from({ length: 12 }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      }));
      return {
        points,
        color: i % 2 ? TEAL : GOLD,
        k: 0.02 + Math.random() * 0.03, // spring stiffness
        damp: 0.92 + Math.random() * 0.04, // damping
      };
    });

    // ---------- Stars for depth ----------
    const stars = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2,
      a: Math.random() * 0.6 + 0.2,
    }));

    function drawSpirals(t) {
      spirals.forEach(s => {
        s.theta += s.speed;
        const steps = 80;
        ctx.beginPath();
        for (let i = 0; i < steps; i++) {
          const pct = i / steps;
          const r = s.baseR + s.arm * pct;
          const ang = s.theta + pct * Math.PI * 3; // 1.5 turns
          const x = s.cx + Math.cos(ang) * r;
          const y = s.cy + Math.sin(ang) * r;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = hexToRgba(s.color, s.alpha);
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // little moving bead along spiral
        const beadAng = s.theta * 1.2;
        const beadR = s.baseR + (s.arm * (Math.sin(t * 0.001 + s.theta) + 1)) / 2;
        const bx = s.cx + Math.cos(beadAng) * beadR;
        const by = s.cy + Math.sin(beadAng) * beadR;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(bx, by, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function updateChains() {
      chains.forEach(chain => {
        const { points, k, damp } = chain;
        for (let i = 1; i < points.length; i++) {
          const p = points[i];
          const prev = points[i - 1];
          // spring towards previous point
          const dx = prev.x - p.x;
          const dy = prev.y - p.y;
          p.vx += dx * k;
          p.vy += dy * k;
          // damping
          p.vx *= damp;
          p.vy *= damp;
          p.x += p.vx;
          p.y += p.vy;
        }
        // head point random walk (parallax drift)
        const head = points[0];
        head.vx += (Math.random() - 0.5) * 0.2;
        head.vy += (Math.random() - 0.5) * 0.2;
        head.vx *= 0.98;
        head.vy *= 0.98;
        head.x = (head.x + head.vx + w) % w;
        head.y = (head.y + head.vy + h) % h;
      });
    }

    function drawChains() {
      chains.forEach(chain => {
        const { points, color } = chain;
        ctx.strokeStyle = hexToRgba(color, 0.25);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
        // joints
        ctx.fillStyle = hexToRgba(color, 0.6);
        points.forEach((p, i) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, i % 3 === 0 ? 2.2 : 1.5, 0, Math.PI * 2);
          ctx.fill();
        });
      });
    }

    function drawStars() {
      stars.forEach(s => {
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function hexToRgba(hex, a) {
      const c = hex.replace('#', '');
      const bigint = parseInt(c, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    function loop(t = 0) {
      // translucent clear for trailing effect
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, w, h);

      drawStars();
      updateChains();
      drawChains();
      drawSpirals(t);

      rafRef.current = requestAnimationFrame(loop);
    }

    // prime background
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        mixBlendMode: "screen",
        background: "radial-gradient(1200px 800px at 10% 10%, rgba(0,255,222,0.05), transparent),\n                    radial-gradient(1200px 800px at 90% 90%, rgba(197,149,96,0.05), transparent)",
      }}
    />
  );
};

export default SpiralBackground;
