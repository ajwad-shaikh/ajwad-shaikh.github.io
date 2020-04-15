module.exports = {
  siteTitle: 'Ajwad Shaikh | Software Development Engineer',
  siteDescription:
    'Brittany Chiang is a software engineer based in Boston, MA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Brittany Chiang, Brittany, Chiang, bchiang7, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Brittany Chiang',
  location: 'Boston, MA',
  email: 'shaikhajwad10@gmail.com',
  github: 'https://github.com/ajwad-shaikh',
  twitterHandle: '@AjwadShaikh3',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ajwad-shaikh',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ajwad-shaikh',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/ajwad-shaikh',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hash.include_ajwad_',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AjwadShaikh3',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
