"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: { id: number; name: string; designation: string; image: string }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  // Motion values shared by all tooltips
  const xPx = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 5 };
  const translateX = useSpring(xPx, springConfig);
  const rotate = useSpring(useTransform(xPx, [-10, 10], [-3, 3]), springConfig);
  const biasedX = useTransform(translateX, (v) => v - 35); // 35px left bias

  const setDeltaFromClientPoint = (clientX: number, clientY: number) => {
    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const within =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      if (within) {
        const centerX = rect.left + rect.width / 2;
        const delta = Math.max(-10, Math.min(10, clientX - centerX));
        xPx.set(delta);
        setHoveredIndex(items[i].id);
        return;
      }
    }
    setHoveredIndex(null);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    setDeltaFromClientPoint(t.clientX, t.clientY);
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    setDeltaFromClientPoint(t.clientX, t.clientY);
  };
  const onTouchEnd = () => setHoveredIndex(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const el = itemRefs.current[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const delta = Math.max(-10, Math.min(10, e.clientX - centerX));
    xPx.set(delta);
  };

  return (
    <div
      className="flex -space-x-4 touch-pan-y select-none isolation-auto"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {items.map((item, idx) => {
        const baseZ = items.length - idx; // keep left-most above right-most
        const isActive = hoveredIndex === item.id;

        return (
          <div
            key={item.id}
            ref={(el) => el && (itemRefs.current[idx] = el)}
            className="relative inline-flex w-14 justify-center items-center"
            style={{ zIndex: isActive ? 1000 : baseZ }}
            onMouseEnter={() => {
              setHoveredIndex(item.id);
              xPx.set(0);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={(e) => handleMouseMove(e, idx)}
          >
            <AnimatePresence mode="popLayout">
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 10 },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{ x: biasedX, rotate, whiteSpace: "nowrap" }}
                  className="absolute -top-16 left-0 right-0 mx-auto
                             flex text-xs flex-col items-center justify-center
                             rounded-md bg-black z-50 shadow-xl px-4 py-2 w-max pointer-events-none"
                >
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                  <div className="font-bold text-white relative z-30 text-base">
                    {item.name}
                  </div>
                  <div className="text-white text-xs">{item.designation}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <img
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="object-cover object-top rounded-full h-14 w-14
                         ring-2 ring-white
                         relative transition duration-300
                         group-hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
};
