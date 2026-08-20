'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || el.dataset.loaded) return;
        el.dataset.loaded = '1';

        const conf = document.createElement('script');
        conf.text = `atOptions = {
      'key' : '346e644285848f18acc8cd9bf5caca8b',
      'format' : 'iframe',
      'height' : 90,
      'width' : 728,
      'params' : {}
    };`;

        const inv = document.createElement('script');
        inv.src = 'https://www.highperformanceformat.com/346e644285848f18acc8cd9bf5caca8b/invoke.js';
        inv.async = true;

        el.appendChild(conf);
        el.appendChild(inv);
    }, []);

    return <div className="ad-banner" ref={ref} />;
}