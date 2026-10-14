'use client'

import { useState, useEffect } from 'react';

type OS = 'windows' | 'linux' | 'mac' | 'unknown';

export function useOS() {
  const [os, setOS] = useState<OS>('unknown');

  useEffect(() => {
    // Avoid hydration mismatch by checking OS only on client mount
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();
      let detectedOS: OS = 'unknown';
      if (userAgent.indexOf('win') !== -1) {
        detectedOS = 'windows';
      } else if (userAgent.indexOf('linux') !== -1) {
        detectedOS = 'linux';
      } else if (userAgent.indexOf('mac') !== -1) {
        detectedOS = 'mac';
      }
      window.setTimeout(() => setOS(detectedOS), 0);
    }
  }, []);

  return os;
}
