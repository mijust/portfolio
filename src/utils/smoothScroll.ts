"use client";

export const smoothScroll = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  
  window.scrollTo({
    top: target.offsetTop,
    behavior: "smooth"
  });
};