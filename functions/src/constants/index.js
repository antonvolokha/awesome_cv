import {
    apomedical,
    backend,
    carrent,
    creator,
    docker,
    flutter,
    git,
    javascript,
    jobit,
    mobile,
    mongodb,
    nodejs,
    php,
    portmone,
    postgresql,
    seed4me,
    symfony,
    tripguide,
    typescript,
    web,
} from "../assets";

export const navLinks = [
    {
        id: "/#about",
        title: "About",
    },
    {
        id: "/#work",
        title: "Work",
    },
    {
        id: "/#contact",
        title: "Contact",
    },
    {
        id: "/blog",
        title: "Blog",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Symfony",
        icon: symfony,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
];

const experiences = [
    {
        title: "Fullstack Developer",
        company_name: "Seed4.me",
        icon: seed4me,
        iconBg: "#4f9301",
        date: "Feb 2017 - July 2021",
        points: [
            "Developing admin interface.",
            "Develooing affiliate program.",
            "Developing ads interface.",
            "Redesign website.",
            "Integrate new payments methods.",
            "Develop and support REST API.",
            "Migrating services to Docker and update dependencies.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Portmone",
        icon: portmone,
        iconBg: "#ee3030",
        date: "July 2021 - Mar 2022",
        points: [
            "Together with the team, they support and improve the Portmone product.",
            "Participate in the design of new project solutions.",
            "Take direct participation on the part of the technical department in the discussion of business tasks and the preparation of technical tasks for them.",
            "Development of the new functionality of Portmone.",
        ],
    },
    {
        title: "Backend Developer/Feature-Team lead",
        company_name: "Apomedical.io",
        icon: apomedical,
        iconBg: "#ffffff",
        date: "Mar 2022 - nowadays",
        points: [
            "Developing back-end part using PHP8 and NodeJS Symfony.",
            "Building reusable code and libraries for future use.",
            "Working with database.",
            "Developing REST API.",
            "Tests implementation using Codeception.",
            "Code review and bug fixing.",
            "Optimization of the application for maximum speed and scalability.",
            "Task analysis and estimations.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

const githublink = "https://github.com/antonvolokha";

export {services, technologies, experiences, testimonials, projects, githublink};
