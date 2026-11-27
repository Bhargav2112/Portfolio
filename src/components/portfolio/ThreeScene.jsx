import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Lightweight hero canvas: a slowly rotating wireframe torus-knot with
 * a restrained gold particle field. Respects reduced-motion and touch devices.
 */
export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isCoarsePointer,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isCoarsePointer ? 1.25 : 1.7));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.TorusKnotGeometry(1.12, 0.012, 220, 12, 2, 3);
    const material = new THREE.MeshBasicMaterial({
      color: 0xc8a24d,
      wireframe: true,
      transparent: true,
      opacity: 0.72,
    });
    const knot = new THREE.Mesh(geometry, material);
    knot.rotation.set(0.45, 0.2, 0.1);
    group.add(knot);

    const innerGeometry = new THREE.IcosahedronGeometry(0.78, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x0b6b4b,
      wireframe: true,
      transparent: true,
      opacity: 0.34,
    });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(inner);

    const particleCount = isCoarsePointer ? 260 : 520;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.1 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 5.8;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius * 0.35;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc8a24d,
      size: 0.018,
      transparent: true,
      opacity: 0.62,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frame = 0;
    let animationId = 0;
    const animate = () => {
      animationId = window.requestAnimationFrame(animate);
      if (!reducedMotion) {
        group.rotation.y += 0.0028;
        group.rotation.x += 0.0009;
        particles.rotation.y -= 0.00025;
        knot.rotation.z += 0.0008;
      }
      frame += 1;
      // Low-power render cadence on small devices: skip alternate frames.
      if (isCoarsePointer && frame % 2 === 0) return;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(animationId);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="portfolio-three-scene pointer-events-none absolute inset-0"
    />
  );
}
