import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'abdulparawala.ap@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Abdul, I am reaching out to you because...',

    oldPortfolio: 'https://react-portfolio-master-ap.vercel.app/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/abdulpara5252' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/abdulparawala/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Scss',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NextJS',
            icon: '/logo/next.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        }
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Vakeel Saab AI Chatbot (Legal Assistant)',
        slug: 'vakeelsaab',
        liveUrl: '',
        year: 2025,
        description: `
      Engineered an LLM-powered chatbot using RAG pipeline with Llama2. Integrated Langchain, ChromaDB, FastAPI, and Streamlit for seamless user experience. Deployed solution on AWS infrastructure with S3 document storage and EC2 backend API also login using supabase authentication.
      `,
        role: `
      AI Engineer / Full-Stack Developer<br/>
      - Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline with Llama2 for legal document Q&A<br/>
      - Integrated Langchain for chaining LLM tasks and ChromaDB for vector storage<br/>
      - Developed backend API using FastAPI, frontend using Streamlit<br/>
      - Deployed on AWS (EC2 for backend, S3 for storage), enabled user authentication with Supabase<br/>
      - Ensured robust, scalable, and secure deployment for legal use cases
      `,
        techStack: [
            'Remixjs',
            'Prisma',
            'Supabase',
            'ChakraUI',
            'Nodejs',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/VakeelSaabThum.png',
        longThumbnail: '/projects/long/VakeelSaabLong.png',
        images: [
            '/projects/images/casedashbod.jpg',
            '/projects/images/KnowladgeBase.jpg',
            '/projects/images/LoginScreen.jpg',
        ],
    },
    {
        title: 'T Virtual Reality',
        slug: 't-virtual-reality',
        liveUrl: 'https://t-virtual-reality-v2.onrender.com/',
        year: 2025,
        description: `A modern VR cinema experience landing page, designed to immerse users with:
            360° rotating 3D model
            Interactive shine and dynamic lighting effects
            Smooth user experience powered by GSAP animations and Framer Motion
            Seamless scrolling with a fully responsive interface
            Integrations with Supabase, Google Sheets, and Google APIs
            Built using React.js, Three.js, React Fiber, and Prisma`,

        role: `As the frontend developer and UI/UX integrator, I:<br/>
        - Built a 360° interactive VR landing page with React Fiber and Three.js<br/>
        - Integrated GSAP and Framer Motion for advanced UI animations<br/>
        - Connected Google Sheets for booking, Supabase for backend, and Google APIs for automation<br/>
        - Delivered a fully responsive, modern, and immersive VR cinema experience website.`,
        techStack: [
            'React',
            'Redux',
            'React Fiber',
            'SCSS',
            'Framer Motion',
            'debouncing',
            'Exceldatabse',
        ],
        thumbnail: '/projects/thumbnail/Tvirtual.jpg',
        longThumbnail: '/projects/long/VR.jpg',
        images: [
            '/projects/long/VR.jpg',
            '/projects/images/tvirtualbooking.jpg',
            '/projects/images/tvrcontact.jpg',
            '/projects/images/virtualimg.jpg',
        ],
    }, 
    {
        title: 'ItechInnovation',
        slug: 'ItechInnovation',
        techStack: [
            'Nextjs',
            'TalwindCss',
            'Twilio',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/ItechThumb.jpg',
        longThumbnail: '/projects/long/ItechThumb.jpg',
        images: [
            '/projects/images/itechimg.jpg',
            '/projects/images/itechimg1.jpg',
            '/projects/images/itechimg3.jpg',
        ],
        liveUrl: 'https://v0-i-tech-innovationsmain.vercel.app/',
        year: 2025,
        description: `A modern IoT solutions showcase for ItechInnovation. The platform highlights a wide range of IoT products and sectors (industrial, smart home, healthcare, and more), with a dedicated client section to demonstrate real-world deployments. Features include:
        - Animated product carousel for interactive product exploration
        - Sector-specific pages describing IoT use cases
        - Client list with logos and testimonials
        - About section detailing company vision, expertise, and achievements
        - Fully responsive, animated UI/UX built with Next.js, Tailwind CSS, and Framer Motion
        - Contact form powered by Nodemailer for direct client inquiries regarding products or sectors`,

        role: `As the frontend UI/UX engineer, I:<br/>
        - Designed and implemented the entire user interface for the IoT product and sector showcase<br/>
        - Developed an animated carousel to display products interactively<br/>
        - Built sector and client list pages with dynamic data and smooth transitions<br/>
        - Created an About section to communicate company strengths and vision<br/>
        - Integrated a contact form using Nodemailer for client inquiries<br/>
        - Focused on modern, responsive design and engaging animations to elevate the company's digital presence.`,
      
        
    }, 
    {
        title: 'AirMax',
        slug: 'air-max',
        techStack: [
            'React.js',
            'Javascript',
            'CSS',
            'HTML',
        ],
        thumbnail: '/projects/thumbnail/nikethumb.png',
        longThumbnail: '/projects/thumbnail/nikethumb.png',
        images: [
            '/projects/images/nikecheckout.jpg',
            '/projects/images/nikeproduct.jpg',
        ],
        liveUrl: 'https://air-max-beta.vercel.app',
        year: 2024,
        description:
            'Air-Max is a clone of the Nike sneakers web application, designed for users to browse, communicate, and share their favorite styles..',
        role: `As the frontend developer, I:<br/>
        - Designed and implemented the entire UI for a Nike sneakers clone web app<br/>
        - Built a responsive product catalog, sneaker detail pages, and interactive cart<br/>
        - Integrated smooth animations and transitions for a modern e-commerce experience<br/>
        - Focused on user flows for browsing, searching, and sharing sneaker styles<br/>
        - Ensured a visually engaging, mobile-friendly interface using React, CSS, and Framer Motion.`,
    },
    {
        title: 'Fanta',
        slug: 'fanta',
        techStack: ['HTML', 'CSS & SCSS', 'GSAP',],
        thumbnail: '/projects/thumbnail/FantaThumb.jpg',
        longThumbnail: '/projects/thumbnail/FantaThumb.jpg',
        images: [
            '/projects/images/FantaIMG.jpg',
        ],
        sourceCode: 'https://github.com/abdulpara5252/fanta-main',
        liveUrl: 'https://main--fantaaanimation.netlify.app',
        year: 2023,
        description:
            'Fanta Animation App is a dynamic web experience that brings the UI to life with fluid animations. Built with HTML, CSS, and JavaScript, it features responsive design and engaging interactive animations powered by GSAP (GreenSock Animation Platform) for a smooth user experience.',
        role: ``,
    },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Abdul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer ReactJs',
        company: 'Vagaro Technology',
        duration: 'Sep 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Sarjen System Pvt Ltd',
        duration: 'May 2022 - Aug 2024',
    },
    {
        title: '.Net Developer',
        company: 'Whiz Software Solution',
        duration: 'July 2021 - Dec 2021',
    },
    {
        title: 'Angular + .Net Developer(Freelance)',
        company: 'Prishusoft',
        duration: 'Dec 2019 - June 2021',
    },
];
