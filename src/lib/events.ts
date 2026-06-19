type Fn=(detail:any)=>void;const bus=new EventTarget();
export const Events={on(type:string,fn:Fn){const h=(e:Event)=>fn((e as CustomEvent).detail);bus.addEventListener(type,h);return()=>bus.removeEventListener(type,h)},emit(type:string,detail?:unknown){bus.dispatchEvent(new CustomEvent(type,{detail}))}};
export const debounce=<A extends unknown[]>(fn:(...a:A)=>void,ms=150)=>{let t=0;return(...a:A)=>{clearTimeout(t);t=window.setTimeout(()=>fn(...a),ms)}};
export const throttle=<A extends unknown[]>(fn:(...a:A)=>void,ms=100)=>{let last=0;return(...a:A)=>{const n=performance.now();if(n-last>ms){last=n;fn(...a)}}};
