import { useState, useEffect, useRef, RefObject } from 'react';

interface Options extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView<T extends Element = HTMLElement>(
  options?: Options
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options?.triggerOnce) {
          observer.disconnect();
        }
      } else {
        if (!options?.triggerOnce) {
          setIsInView(false);
        }
      }
    }, options);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [ref, isInView];
}
