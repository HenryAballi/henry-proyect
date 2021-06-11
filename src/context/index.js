import { createContext } from 'react';

const context = createContext({
    showLinks: false, 
    setShowLinks: null,
    showGalleries: false,
    setShowGalleries: null,
});

export default context;