'use client'

import { useState, useEffect } from 'react';

type OS = 'windows' | 'linux' | 'mac' | 'unknown';

export function useOS() {
  const [os, setOS] = useState<OS>('unknown');

  useEffect(() => {
    // Avoid hydration mismatch by checking OS only on client mount
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf('win') !== -1) {
        setOS('windows');
      } else if (userAgent.indexOf('linux') !== -1) {
        setOS('linux');
      } else if (userAgent.indexOf('mac') !== -1) {
        setOS('mac');
      } else {
        setOS('unknown');
      }
    }
  }, []);

  return os;
}
