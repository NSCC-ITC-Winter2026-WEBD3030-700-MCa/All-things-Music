// docmd.config.js
module.exports = {
  // --- Core Metadata ---
  siteTitle: "All-things-Music",
  siteUrl: "", // e.g. https://mysite.com (Critical for SEO/Sitemap)

  // --- Branding ---
  logo: {
    light: "assets/images/docmd-logo-dark.png",
    dark: "assets/images/docmd-logo-light.png",
    alt: "Logo",
    href: "./",
  },
  favicon: "assets/favicon.ico",

  // --- Source & Output ---
  srcDir: "docs",
  outputDir: "site",

  // --- Theme & Layout ---
  theme: {
    name: "sky", // Options: 'default', 'sky', 'ruby', 'retro'
    defaultMode: "system", // 'light', 'dark', or 'system'
    enableModeToggle: true, // Show mode toggle button
    positionMode: "top", // 'top' or 'bottom'
    codeHighlight: true, // Enable Highlight.js
    customCss: ["assets/css/genre-colors.css"],
  },
  customJs: ["assets/js/genre-song-count.js"],

  // --- Features ---
  search: true, // Built-in offline search
  minify: true, // Minify HTML/CSS/JS in build
  autoTitleFromH1: true, // Auto-generate page title from first H1
  copyCode: true, // Show "copy" button on code blocks
  pageNavigation: true, // Prev/Next buttons at bottom

  // --- Navigation (Sidebar) ---
  navigation: [
    { title: 'Introduction', path: '/', icon: 'home' },
    { title: 'How to Use', path: '/how-to-use', icon: 'help-circle' },
    { title: 'About', path: '/about', icon: 'book-open' },
    { title: 'Glossary', path: '/glossary', icon: 'book' },
    { title: 'Feedback', path: '/feedback', icon: 'message' },
    { title: 'Did You Know?', path: '/fun-facts', icon: 'sparkles' },

    {
      title: "Genres",
      icon: "music",
      collapsible: true,
      children: [
        { title: "Blues", path: "/genres/blues", icon: "hand-fist" },
        { title: "Classical", path: "/genres/classical", icon: "music-4" },
        { title: "Electronic", path: "/genres/electronic", icon: "speaker" },
        { title: "Folk", path: "/genres/folk", icon: "guitar" },
        { title: "Hip-Hop", path: "/genres/hip-hop", icon: "drum" },
        { title: "Jazz", path: "/genres/jazz", icon: "piano" },
        { title: "Pop", path: "/genres/pop", icon: "mic-vocal" },
        { title: "Rap", path: "/genres/rap", icon: "headphones" },
        { title: "Rock", path: "/genres/rock", icon: "activity" },
      ],
    },
    {
      title: "Instruments",
      icon: "guitar",
      collapsible: false,
      children: [],
    },
    {
      title: "GitHub",
      path: "https://github.com/docmd-io/docmd",
      icon: "github",
      external: true,
    },
  ],

  // --- Plugins ---
  plugins: {
    seo: {
      defaultDescription: "Documentation built with docmd.",
      openGraph: {
        defaultImage: "", // e.g. 'assets/images/og-image.png'
      },
      twitter: {
        cardType: "summary_large_image",
      },
    },
    analytics: {
      googleV4: {
        measurementId: "G-X9WTDL262N", // Replace with your Google Analytics Measurement ID
      },
    },
    sitemap: {
      defaultChangefreq: "weekly", // e.g. 'daily', 'weekly', 'monthly'
      defaultPriority: 0.8, // Priority between 0.0 and 1.0
    },
  },

  // --- Footer ---
  footer: `<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:1.5em; font-size:1em; padding:8px 0;">
      <span><strong>All-things-Music</strong> &mdash; A collaborative project to explore and celebrate music diversity.</span>
      <nav style="display:inline-flex; gap:0.75em; align-items:center;">
        <a href="/">Introduction</a>
        <a href="/about">About</a>
        <a href="/genres/blues">Genres</a>
        <a href="/instruments/guitar">Instruments</a>
        <a href="/feedback">Feedback</a>
        <a href="https://github.com/NSCC-ITC-Winter2026-WEBD3030-700-MCa/All-things-Music" target="_blank">GitHub</a>
      </nav>
      <span style="font-size:0.95em;">© ${new Date().getFullYear()} All-things-Music. Built with <a href="https://docmd.io" target="_blank">docmd</a>.</span>
    </div>`,

  // --- Edit Link ---
  editLink: {
    enabled: false,
    baseUrl:
      "https://github.com/NSCC-ITC-Winter2026-WEBD3030-700-MCa/All-things-Music/edit/main/docs",
    text: "Edit this page",
  },
};
