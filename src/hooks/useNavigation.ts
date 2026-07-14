import { useState, useCallback, useEffect } from 'react';
import type { PageName } from '../types';

// Lightweight hash-based router — no external dependency needed
export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<PageName>(() => {
    const hash = window.location.hash.replace('#/', '') || 'landing';
    return hash as PageName;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '') || 'landing';
      setCurrentPage(hash as PageName);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((page: PageName) => {
    window.location.hash = `/${page}`;
  }, []);

  return { currentPage, navigate };
}
