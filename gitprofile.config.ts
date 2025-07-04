const CONFIG = {
  github: {
    username: 'apekshyaaa', 
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['apekshyaaa/my-project1', 'apekshyaaa/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['apekshyaaa/gitprofile', 'apekshyaaa/pandora'], // List of repository names to display. example: ['apekshyaaa/my-project1', 'apekshyaaa/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        // To add, add title, descripton, imageUrl and link
      ],
    },
  },
  seo: {
    title: 'Portfolio of Apekshya Subedi',
    description: 'Apekshya Subedi is an aspiring software developer and data scientist from Nepal.',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/apekshya-subedi/',
    x: 'https://x.com/subtle_apu',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'apu58728@gmail.com',
  },
  resume: {
    fileUrl:
      '',
  },
  skills: [
    'Python',
    'SQL',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Code for Nepal',
      position: 'Data Fellowship',
      from: '2024',
      to: '2025',
      companyLink: 'https://',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'CS50P',
      body: 'CS50P offered by Harvard University via edX',
      year: 'July 2025',
      link: 'https://example.com',
    },
    {
      name: 'Associate Data Scientist Certification',
      body: 'DataCamp',
      year: 'July 2025',
      link: 'https://'
    },
    {
      name: 'Python with Data Science',
      body: 'Kantipur Engineering College',
      year: '2023',
      link: 'https://'
    }
  ],
  educations: [
    {
      institution: 'Banepa Nist',
      degree: 'NEB +2 Science',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Kantipur Engineering College-TU',
      degree: 'Degree',
      from: '2021',
      to: '2025',
    }
  ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'apekshyaaa', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/apekshyaaa"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
