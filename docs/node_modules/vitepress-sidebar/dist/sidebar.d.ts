import type { UserConfig } from 'vitepress';
import type { Sidebar, VitePressSidebarOptions } from './types.js';
export declare function generateSidebar(options?: VitePressSidebarOptions | VitePressSidebarOptions[]): Sidebar;
export declare function withSidebar(vitePressOptions: UserConfig, sidebarOptions?: VitePressSidebarOptions | VitePressSidebarOptions[]): Partial<UserConfig>;
