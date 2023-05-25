export const ok = () => new Response("{}", { status: 200 });
export const bad = () => new Response("{}", { status: 400 });
export const internal = () => new Response("{}", { status: 500 });
export const notAllowed = () => new Response("{}", { status: 405 });