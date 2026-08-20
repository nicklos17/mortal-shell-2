import type { MetadataRoute } from 'next';
import { SITE_BASE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Mortal Shell 2 Wiki',
        short_name: 'MS2 Guide',
        description:
            'Mortal Shell 2 walkthrough, boss strategies, shells, weapons, and builds.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#0a0c10',
        theme_color: '#0a0c10',
        icons: [
            {
                src: `${SITE_BASE_URL}/favicon.ico`,
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
