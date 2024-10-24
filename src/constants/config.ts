const LocalConfig = {
  values: {
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
    AUTOPREFIXER_GRID: process.env.AUTOPREFIXER_GRID,
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_VERCEL_TOKEN: process.env.NEXT_PUBLIC_VERCEL_TOKEN,
    NEXT_PUBLIC_RESUME_LINK:
      process.env.NEXT_PUBLIC_RESUME_LINK ||
      "https://docs.google.com/document/d/1nuNEpXaZTY3MmR86uAL6TmLzLPMMRGXGloV9jNl5lHM/edit?usp=sharing",
  },
};

export default LocalConfig;
