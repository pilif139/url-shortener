"use client";

import { useEffect, useState, useRef } from "react";

export default function useResizeObserver<T extends HTMLElement>() {
    const [dimensions, setDimensions] = useState<DOMRectReadOnly>();
    const observer = useRef<ResizeObserver>();
    const element = useRef<T>(null);

    useEffect(() => {
        if (element.current) {
            observer.current = new ResizeObserver(([entry]) => setDimensions(entry.contentRect));
            observer.current.observe(element.current);
        }
        return () => observer.current?.disconnect();
    }, []);

    return [dimensions, element] as const;
}