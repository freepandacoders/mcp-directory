import './style.css';

import { Metadata } from 'next';
import React from 'react';
import pagejson from '@/pagejson/cn.js';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: {
            template: `%s | ${pagejson.metadata.title}`,
            default: pagejson.metadata.title,
        },
        description: pagejson.metadata.description,
        keywords: pagejson.metadata.keywords,
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='zh-cn'>
            <body>{children}</body>
        </html>
    );
}
