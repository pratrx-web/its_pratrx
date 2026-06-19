export type ThemeMode='auto'|'day'|'night';
export type WallpaperKind='video'|'image'|'gradient';
export interface PookieSettings{visual:{blur:number;opacity:number;glow:number;radius:number;animationSpeed:number;themeMode:ThemeMode;accent:string};wallpaper:{global:string;kind:WallpaperKind;brightness:number;contrast:number;saturation:number;blur:number;speed:number;playlist:string[];random:boolean};focus:{enabled:boolean;hideComments:boolean;hideSidebars:boolean;hideFeeds:boolean;sites:string[]};ai:{provider:'local'|'openai-compatible';endpoint:string;apiKey:string};performance:{enabled:boolean;targetFps:number;lowPower:boolean};cursor:{mode:'off'|'glow'|'particles'|'magnetic'};particles:{effect:'off'|'hearts'|'sakura'|'fireflies'|'snow'|'rain'|'stars'|'bubbles'};}
export interface Note{id:string;title:string;body:string;tags:string[];links:string[];created:number;updated:number;}
export interface Task{id:string;text:string;done:boolean;created:number;}
export interface Goal{id:string;text:string;period:'daily'|'weekly';done:boolean;}
export interface AnalyticsDay{date:string;sites:Record<string,number>;focusSeconds:number;distractionSeconds:number;}
export interface Message{type:string;payload?:unknown;}
