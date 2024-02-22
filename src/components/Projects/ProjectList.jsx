const ProjectList = [
  {
    name: 'Pinteract',
    url: 'https://pinteract.onrender.com',
    icon: 'icon.png',
    iconBg: '#ed4245',
    imgs: [
      {
        src: 'landing.jpeg',
        alt: 'Pinteract Landing Page',
        desc: 'Landing page showcasing all the public Pins users have uploaded.'
      },
      {
        src: 'newpin.jpeg',
        alt: 'Pinteract New Pin Page',
        desc: 'Page with a form for users to upload new Pins.'
      },
      {
        src: 'pin.jpeg',
        alt: 'Pinteract Pin Page',
        desc: 'Pin Page for viewing Pin details and submitting comments.'
      },
      {
        src: 'profile.jpeg',
        alt: 'Pinteract User Profile Page',
        desc: 'Page to view a user\'s profile. Users can switch between Board and Pin views.'
      },
      {
        src: 'boardedit.mp4',
        vid: 'video/mp4',
        alt: 'Pinteract Board Editing',
        desc: 'Demonstration of removing Pins from Boards.'
      },
    ],
    desc: <div>
      Simple full-stack clone of Pinterest independently built in just two weeks. Uses Amazon S3 for file uploads, clean and polished UI, and secure backend validation for user input.
    </div>
  },
  {
    name: 'Dissscord',
    url: 'https://dissscord.onrender.com',
    icon: 'icon.svg',
    iconBg: '#5865f2',
    imgs: [
      {
        src: 'landing.jpeg',
        alt: 'Dissscord Landing Page',
        desc: 'Landing page showcasing all the public servers users have created.'
      },
      {
        src: 'liveTypingDemo.mp4',
        vid: 'video/mp4',
        alt: 'Dissscord Live Messaging Demo',
        desc: 'Demonstration of real-time messaging, typing, and reactions in Dissscord.'
      },
      {
        src: 'serverCreateDemo.mp4',
        vid: 'video/mp4',
        alt: 'Dissscord Server Create Demo',
        desc: 'Demonstration of how to create a server in Dissscord.'
      },
      {
        src: 'serverInfo.jpeg',
        alt: 'Dissscord Server Info',
        desc: 'Modal of a Dissscord server with a Join button.'
      },
      {
        src: 'serverSettingsModal.jpeg',
        alt: 'Dissscord Server Modal',
        desc: 'Modal for server owners to make changes to their server, such as the name, public visibility, and uploading a new icon or banner.'
      },
      {
        src: 'accountSettingsModal.jpeg',
        alt: 'Dissscord Account Settings Modal',
        desc: 'Modal for users to change account properties, such as uploading a new avatar, display name, username, etc.'
      },
    ],
    desc: <div>
      Full-stack clone of Discord built in just one week as a group.
      Uses websockets for real-time messaging, reactions, and typing status.
      Collaborated with agile methodologies to form efficient teamwork experiences.
    </div>
  },
  {
    name: 'LiquidBnB',
    url: 'https://liquidbnb.onrender.com',
    icon: 'icon.svg',
    iconBg: '#ff5a5f',
    imgs: [
      {
        src: 'landing.jpeg',
        alt: 'LiquidBnB Landing Page',
        desc: 'Landing page showcasing all the public Spots users have created.'
      },
      {
        src: 'spotDetail.jpeg',
        alt: 'LiquidBnB Spot Detail Page',
        desc: 'Page to view details of a Spot, as well as review comments and ratings.'
      },
      {
        src: 'spotCreate.jpeg',
        alt: 'LiquidBnB Spot Create Form',
        desc: 'Users can create their own Spot listings by filling out form information and providing images.'
      },
    ],
    desc: <div>
      Full-stack clone of AirBnB built indepentently in just two weeks.
      Clean and polished UI, uses React/Redux for fast dynamic page changes, and secure backend validation for user input.
    </div>
  }
]
export default ProjectList