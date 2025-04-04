// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'naveenjangid178', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['naveenjangid178/aquaregia-25', 'naveenjangid178/youtube-backend', 'naveenjangid178/no-code-forms', 'naveenjangid178/elite-media', 'naveenjangid178/basic-paytm', 'naveenjangid178/gpt3-ui', 'naveenjangid178/silentscholar'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Aquaregia',
          description:
            'The official website for AQUAREGIA, a vibrant inter-college cultural fest featuring music, dance,hackathons, and more. The website ensures smooth event management with real-time pdates, online registrations, and a user-friendly experience.',
          imageUrl:
            './aquaregia.png',
          link: 'https://aquaregiafest.com',
        },
        {
          title: 'IDP (Intelligent Document Processing)',
          description:
            'Developed an Intelligent Document Processing (IDP) solution to extract text from salary slips and automatically generate structured data tables, integrating OpenAI and Azure APIs to provide real-time data verification and validation for enhanced accuracy.',
          imageUrl:
            'https://cdn.prod.website-files.com/64be86eaa29fa71f24b00685/64be86eaa29fa71f24b00e8a_62221eee49ff1727b7b96eeb_A%2520Showcase%2520of%2520IDP%2520Use%2520Cases%2520Main%2520Image.jpeg',
          link: '',
        },
        {
          title: 'youtube backend',
          description:
            'YouTube backend project with user authentication, video management, comments, playlists.',
          imageUrl:
            'https://www.analyticssteps.com/backend/media/thumbnail/6392372/9074555_1591250182_youtube.jpg',
          link: 'https://github.com/naveenjangid178/youtube-backend',
        },
        {
          title: 'no-code-forms',
          description:
            'A powerful form builder that allows users to create, customize, and manage forms without writing any code. Built with a scalable backend and a user-friendly interface.',
          imageUrl:
            'https://www.yoroflow.com/img/workflowManagement/workflow_features_images/no-code-form-designer-section-image.png',
          link: 'https://github.com/naveenjangid178/no-code-forms',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Naveen Kumar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'naveen-kumar178',
    x: 'naveen_kumar178',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '+91-8079088775',
    email: 'naveenjangid178@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/17h1wMABbu_3pmwyCSDcG8IeC9j0P1fqY/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    // 'Next.js',
    'TypeScript',    
    'Java',    
    'Python',  
    'C/C++',  
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'GSAP',
    'CSS3',
    'HTML5',
    'Tailwind',
    'MUI'
  ],
  experiences: [
    {
      company: 'University Maharaja College',
      position: 'IT Coordinator',
      from: 'August 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'TechCodistic',
      position: 'Full-Stack Developer',
      from: 'April 2024',
      to: 'October 2024',
      companyLink: 'https://techcodistic.in/',
    },
  ],
  certifications: [
    {
      name: 'Salesforce Developer',
      body: 'AU IGNITE Future Skill Academy',
      year: 'Nov 2024 - Feb 2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Rajasthan',
      degree: 'BCA',
      from: '2022',
      to: 'Present',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
