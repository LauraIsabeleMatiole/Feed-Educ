// Endereço do backend usado por todas as telas.
// No computador (localhost) usa o Spring Boot local; publicado no GitHub Pages,
// usa o backend hospedado na nuvem. Troque BACKEND_NUVEM pelo endereço do Render.
const BACKEND_NUVEM = 'https://SEU-BACKEND.onrender.com';

window.BACKEND_URL = ['localhost', '127.0.0.1'].includes(location.hostname)
    ? 'http://localhost:8080'
    : BACKEND_NUVEM;
