
import { useEffect, useContext } from 'react';
import context from '../context';

const useManageMenus = () => {
    const { setShowLinks, setShowGalleries } = useContext(context);

    useEffect(() => {
        setShowLinks(false);
        setShowGalleries(false);
    },[setShowLinks, setShowGalleries]);
};

export default useManageMenus;
