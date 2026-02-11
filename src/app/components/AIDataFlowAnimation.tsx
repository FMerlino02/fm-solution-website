import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PipelineStage {
  label: string;
  icon: string;
  description: string;
}

export const AIDataFlowAnimation = () => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentStage, setCurrentStage] = useState(0);
  const animationIdRef = useRef<number>();
  const stageTimeRef = useRef<number>(0);

  // Define pipeline stages with translations
  const stages: PipelineStage[] = [
    {
      label: t('home.aiSection.pipeline.stage1.label'),
      icon: '1',
      description: t('home.aiSection.pipeline.stage1.description')
    },
    {
      label: t('home.aiSection.pipeline.stage2.label'),
      icon: '2',
      description: t('home.aiSection.pipeline.stage2.description')
    },
    {
      label: t('home.aiSection.pipeline.stage3.label'),
      icon: '3',
      description: t('home.aiSection.pipeline.stage3.description')
    },
    {
      label: t('home.aiSection.pipeline.stage4.label'),
      icon: '4',
      description: t('home.aiSection.pipeline.stage4.description')
    },
    {
      label: t('home.aiSection.pipeline.stage5.label'),
      icon: '5',
      description: t('home.aiSection.pipeline.stage5.description')
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const isDark = document.documentElement.classList.contains('dark');

    // Stage cycling logic
    const STAGE_DURATION = 2500; // 2.5 seconds per stage

    // Animation loop
    const animate = (timestamp: number) => {
      if (!canvas || !ctx) return;

      // Initialize stage time on first frame
      if (stageTimeRef.current === 0) {
        stageTimeRef.current = timestamp;
      }

      // Update current stage
      if (timestamp - stageTimeRef.current > STAGE_DURATION) {
        setCurrentStage((prev) => (prev + 1) % stages.length);
        stageTimeRef.current = timestamp;
      }

      const SECTION_WIDTH = canvas.width / stages.length;
      const DOT_Y = canvas.height / 2;

      // Clear canvas
      ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw pipeline sections
      stages.forEach((stage, idx) => {
        const x = idx * SECTION_WIDTH;
        const isActive = idx === currentStage;

        // Section background
        ctx.fillStyle = isActive
          ? (isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.08)')
          : (isDark ? 'rgba(148, 163, 184, 0.02)' : 'rgba(203, 213, 225, 0.03)');
        ctx.fillRect(x, 0, SECTION_WIDTH, canvas.height);

        // Section border
        ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(203, 213, 225, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + SECTION_WIDTH, 0);
        ctx.lineTo(x + SECTION_WIDTH, canvas.height);
        ctx.stroke();

        // Icon at top
        const centerX = x + SECTION_WIDTH / 2;
        ctx.font = '36px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = isActive
          ? (isDark ? '#60a5fa' : '#3b82f6')
          : (isDark ? '#64748b' : '#94a3b8');
        ctx.fillText(stage.icon, centerX, 60);

        // Label
        ctx.font = 'bold 14px sans-serif';
        ctx.fillStyle = isActive
          ? (isDark ? '#e2e8f0' : '#1e293b')
          : (isDark ? '#94a3b8' : '#64748b');
        ctx.fillText(stage.label, centerX, 95);
      });

      // Draw connecting line
      ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgba(203, 213, 225, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(SECTION_WIDTH / 2, DOT_Y);
      ctx.lineTo(canvas.width - SECTION_WIDTH / 2, DOT_Y);
      ctx.stroke();

      // Draw stage markers
      stages.forEach((stage, idx) => {
        const centerX = idx * SECTION_WIDTH + SECTION_WIDTH / 2;
        const isPassed = idx < currentStage;
        const isCurrent = idx === currentStage;

        // Marker circle
        ctx.fillStyle = isCurrent
          ? (isDark ? '#60a5fa' : '#3b82f6')
          : isPassed
          ? (isDark ? '#10b981' : '#10b981')
          : (isDark ? '#334155' : '#cbd5e1');
        ctx.beginPath();
        ctx.arc(centerX, DOT_Y, isCurrent ? 12 : 8, 0, Math.PI * 2);
        ctx.fill();

        // Glow for current stage
        if (isCurrent) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = isDark ? '#60a5fa' : '#3b82f6';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw description text for current stage
      const currentStageData = stages[currentStage];
      ctx.font = '15px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';

      // Wrap text if needed
      const maxWidth = canvas.width - 100;
      const words = currentStageData.description.split(' ');
      let line = '';
      let y = canvas.height - 60;

      for (const word of words) {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line !== '') {
          ctx.fillText(line, canvas.width / 2, y);
          line = word + ' ';
          y += 22;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, canvas.width / 2, y);

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [currentStage, stages]);

  return (
    <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
