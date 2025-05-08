// Icon index file - exports all icons with dynamic imports
import dynamic from 'next/dynamic';
import React from 'react';

// Simple placeholder component while icons load
const IconPlaceholder = () => <div className="w-6 h-6 bg-gray-200 animate-pulse rounded" />;

// Dynamically import icons to improve initial load time
const DockerIcon = dynamic(() => import('./docker').then(mod => mod.DockerIcon), {
  loading: () => <IconPlaceholder />,
  ssr: false
});

const UserIcon = dynamic(() => import('./user').then(mod => mod.UserIcon), {
  loading: () => <IconPlaceholder />,
  ssr: false
});

// Export all icons with consistent API
export const Icons = {
  docker: DockerIcon,
  user: UserIcon,
};

// For TypeScript support
export type IconType = keyof typeof Icons;