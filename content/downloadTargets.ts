export type DownloadTarget = {
  id: "windows" | "linux";
  name: string;
  description: string;
  primaryDownload: {
    label: string;
    url: string;
  };
  secondaryDownload?: {
    label: string;
    url: string;
  };
  cliCommand?: string;
  requirements?: string;
};

export const downloadTargets: DownloadTarget[] = [
  {
    id: "windows",
    name: "Windows",
    description: "Native installer for Windows 10 and newer.",
    primaryDownload: {
      label: "Download Installer",
      url: "https://github.com/Relwave/relwave-app/releases/latest",
    },
    secondaryDownload: {
      label: "View Release Notes",
      url: "https://github.com/Relwave/relwave-app/releases",
    },
    requirements: "Supports Windows 10 and newer.",
  },
  {
    id: "linux",
    name: "Linux",
    description: "AppImage and Debian packages for Linux.",
    primaryDownload: {
      label: "Download AppImage",
      url: "https://github.com/Relwave/relwave-app/releases/latest",
    },
    secondaryDownload: {
      label: "Download .deb",
      url: "https://github.com/Relwave/relwave-app/releases/latest",
    },
    cliCommand: "curl -LO https://github.com/Relwave/relwave-app/releases/latest/download/RelWave.AppImage\nchmod +x RelWave.AppImage\n./RelWave.AppImage",
  },
];
