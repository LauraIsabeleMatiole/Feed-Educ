// Endereço do backend usado por todas as telas.
// No computador (localhost) usa o Spring Boot local; publicado no GitHub Pages,
// usa o backend hospedado no Render.
const BACKEND_NUVEM = 'https://feededuc.onrender.com';

window.BACKEND_URL = ['localhost', '127.0.0.1'].includes(location.hostname)
    ? 'http://localhost:8080'
    : BACKEND_NUVEM;
