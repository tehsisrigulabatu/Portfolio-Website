

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  social: SocialLink[];
  skills: {
    tools: string[],
    language: string[],
    framework: string[]
  };
  experience: Experience[];
  projects: Project[];
}

export const PortfolioData: PortfolioData = {
    name: "Melodia Nur Insani S. R.",
    role: "Artificial Intelligence Engineer",
    about:
    "I'm a freshman Artificial Intelligence Engineering Student from Institut Teknologi Sepuluh Nopember. I am passionate about data, math, and problem solving.",
    profileImage: "/images/profile.webp",
    social: [
        {
            platform: "Github",
            url: "https://github.com/tehsisrigulabatu",
            icon: "Github",
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/melodia-nur-insani",
            icon: "Linkedin"
        },
        {
            platform: "Instagram",
            url: "https://instagram.com/meosccle",
            icon: "Instagram"
        },
        {
            platform: "Email",
            url: "melodiareza70@gmail.com",
            icon: "Email"
        },
    ],
    skills: {
        tools: [
            "Visual Studio Code", "Google Colab", "Figma", "Microsoft Office"
        ],
        language: [
            "python", "C++", "JavaScript", "TypeScript"
        ],
        framework: [
            "Scikit-learn", "PyTorch", "Keras", "Tensorflow", "OpenCV"
        ]
    },
    experience: [
        {
            company: "Barunastra ITS Research Team",
            role: "Programming: Perception",
            period: "Oct 2026 - Nov, 2026",
            description: ["Computer Vision: Built OpenCV pipelines and deployed YOLO object detection models within ROS 2.",
                "LiDAR Sensing: Processed LaserScan data to implement reliable front-sector obstacle detection for navigation.",
                
             ]
        },
        {
            company: "Directorate of Coorperation and Business Management (DKPU) ITS",
            role: "Data Analyst, Media Creative",
            period: "Aug, 2025 - March, 2026",
            description: ["Recorded & organized operational data, including meeting activities, ISO certification programs, laboratory operations and equipment maintenance.",
                "Contributed as part of the Creative Media team for the Forum Wakil Rektor 2025 (FORWAREK), where I played a key role in designing and conceptualizing the overall creative workflow and event flow to ensure an engaging participant experience."
            ]
        },
    ],
    projects: [
        {
            title: "Bicycle Rent Analysis",
            description: "Developed an exploratory data analysis project to evaluate how external variables—including weather patterns and operational off-days—impact customer demand and overall bicycle rental performance.",
            techStack: ["Numpy", "Pandas", "Matplotlib", "Streamlit"],
            link: "https://github.com/tehsisrigulabatu/Analisis-Data-Sepeda",
            thumbnail: "/images/projects/bike.webp",
        },
        {
            title: "Guns Tragedy in America",
            description: "Analyzed regional patterns and demographic factors (including race, age, and employment status) behind individual shooting incidents, categorizing cases by context such as suicide or homicide.",
            techStack: ["Scikit-learn", "KNN", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
            link: "https://github.com/tehsisrigulabatu/Guns-Clustering-KMeans",
            thumbnail: "/images/projects/guns.webp",
        },
        {
            title: "UCS Media Creative's Internship Portfolio",
            description: "Completed as part of the formal selection and portfolio requirement for the Creative Media division internship at UKM Cyber Security.",
            techStack: ["Figma"],
            link: "https://www.behance.net/gallery/254938925/Feeds-IG-for-Portfolio-Requirements",
            thumbnail: "/images/projects/ucs.webp",
        },
    ],
};