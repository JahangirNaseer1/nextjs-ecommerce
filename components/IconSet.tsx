import * as React from 'react';

export const CartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7.2 16h9.45c.9 0 1.7-.6 1.93-1.47l2.3-8.1A1 1 0 0 0 20 5H6.21l-.94-2.36A1 1 0 0 0 4.34 2H2v2h1.34l3.6 9.59-1.35 2.44A2 2 0 0 0 7.2 16zM6.16 6h12.31l-1.72 6.07a1 1 0 0 1-.97.73H8.53l-2.37-6.8z" fill="#222" />
    </svg>
);

export const AccountIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <circle cx={12} cy={8} r={4} fill="#222" />
        <path d="M4 20c0-4 8-4 8-4s8 0 8 4v2H4v-2z" fill="#222" />
    </svg>
);
