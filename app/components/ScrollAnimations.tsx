'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Function to observe elements
    const observeElements = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
      animatedElements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe when new content is added (for dynamic content)
    const mutationObserver = new MutationObserver(() => {
      setTimeout(observeElements, 100);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
} 