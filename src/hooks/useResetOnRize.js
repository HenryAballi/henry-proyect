import { useEffect } from 'react';

const useResetOnRize = (setShowLinks, setShowGalleries) => {
    useEffect(() => {
        const resizeHandler = window.addEventListener('resize', () => {
            setShowGalleries(false); 
            setShowLinks(false);
        })
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [setShowLinks, setShowGalleries]);
};

export default useResetOnRize;
