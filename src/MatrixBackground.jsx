import React, { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Ajusta o tamanho do canvas para a tela inteira
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Caracteres que vão cair (mistura de letras, números e símbolos de código)
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array para controlar a posição Y de cada coluna
    const drops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      // Fundo preto com opacidade cria o rastro de "fade" nas letras
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cor verde hacker e fonte monoespaçada
      ctx.fillStyle = '#10b981';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        
        // Desenha a letra
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Se a gota chegou no fim da tela e passou no teste aleatório, volta pro topo
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move a gota para baixo
        drops[i]++;
      }
    };

    // Velocidade da animação (33ms = ~30 frames por segundo)
    const interval = setInterval(draw, 33);

    // Ajusta o tamanho se o usuário redimensionar a janela
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Limpeza quando o componente for desmontado
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // Fica fixo no fundo (-z-10) e com opacidade reduzida para não atrapalhar a leitura
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none" 
    />
  );
}