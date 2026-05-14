// LinkedIn-aligned profile data module
// Maintains a local snapshot of public profile information for the portfolio.

const LinkedInSync = {
    profileId: 'gautammanglani',
    profileUrl: 'https://www.linkedin.com/in/gautammanglani',
    githubUrl: 'https://github.com/GautamManglani',
    certificationState: {
        certifications: [],
        activeIndex: 0
    },

    cache: {
        profile: null,
        lastFetch: null,
        cacheDuration: 3600000
    },

    async init() {
        try {
            await this.fetchLinkedInData();
            this.updatePageContent();
            this.enhanceDynamicContent();
        } catch (error) {
            console.error('Profile data initialization failed:', error);
            this.showFallbackContent();
        }
    },

    async fetchLinkedInData() {
        if (this.cache.profile && this.cache.lastFetch) {
            const timeSinceLastFetch = Date.now() - this.cache.lastFetch;
            if (timeSinceLastFetch < this.cache.cacheDuration) {
                return this.cache.profile;
            }
        }

        const profileData = {
            public_identifier: 'gautammanglani',
            profile_pic_url: 'https://cdn1.genspark.ai/user-upload-image/crawler_linkedin_profile_thumbnails/e2a3a761-fa04-31cc-9992-5fd6d5f206ac',
            first_name: 'Gautam',
            last_name: 'Manglani',
            full_name: 'Gautam Manglani',
            follower_count: 13,
            connections: 13,
            occupation: 'Cybersecurity Intern at ElevanceSkills',
            headline: 'Cybersecurity Intern focused on Nmap, Burp Suite, vulnerability analysis, and ethical hacking.',
            summary: 'Currently pursuing a BCA in Cyber Security at Kristu Jayanti University, with a focus on building practical expertise in network security, ethical hacking, and digital protection. Engaged in structured cybersecurity training and project work as a Cybersecurity Intern at ElevanceSkills, contributing to tasks such as cybersecurity awareness and digital protection under mentor guidance. Previous internship experiences include vulnerability assessments, penetration testing workflows, and security tool development using Python at organizations like ShadowFox, Redynox, and Prodigy InfoTech. Proficient in tools like Nmap, Burp Suite, and CTF, with certifications in Linux Fundamentals (Red Hat), Cisco networking, Java programming (NPTEL), and multiple internship accomplishments. Passionate about leveraging hands-on learning to advance in cybersecurity roles.',
            location_str: 'Bengaluru, Karnataka, India',
            country: 'IN',
            city: 'Bengaluru',
            state: 'Karnataka',
            personal_emails: ['gautammanglani018@gmail.com'],
            social_links: {
                linkedin: 'https://www.linkedin.com/in/gautammanglani',
                github: 'https://github.com/GautamManglani'
            },
            education: [
                {
                    starts_at: { day: 1, month: 1, year: 2024 },
                    ends_at: { day: 31, month: 12, year: 2027 },
                    school: 'Kristu Jayanti University',
                    degree_name: 'Bachelor of Computer Applications (BCA)',
                    field_of_study: 'Cyber Security',
                    description: 'Coursework: Network Security, Ethical Hacking, Operating Systems, Computer Networks, Cryptography, Web Security. Activities: cyber security club events, CTFs, hackathons, and technical workshops.',
                    school_linkedin_profile_url: 'https://www.linkedin.com/school/kristujayantiuniversityblr',
                    location: 'Bengaluru, Karnataka, India'
                },
                {
                    starts_at: { day: 1, month: 1, year: 2022 },
                    ends_at: { day: 31, month: 1, year: 2024 },
                    school: 'International Public School - India',
                    degree_name: 'Senior Secondary Education',
                    field_of_study: 'General Studies',
                    description: 'Completed pre-university education while building early interest in computers, networking, and cybersecurity.',
                    location: 'India'
                }
            ],
            experiences: [
                {
                    starts_at: { day: 1, month: 3, year: 2026 },
                    ends_at: null,
                    company: 'ElevanceSkills',
                    title: 'Cybersecurity Intern',
                    description: '• Selected as a Cybersecurity Intern at ElevanceSkills\n• Participating in structured cybersecurity training and real-time project work\n• Learning practical security concepts under mentor guidance\n• Contributing to tasks related to cybersecurity awareness and digital protection\n• Working remotely with a structured schedule and reporting process',
                    location: 'Bangalore Urban, Karnataka, India'
                },
                {
                    starts_at: { day: 1, month: 1, year: 2026 },
                    ends_at: { day: 1, month: 1, year: 2026 },
                    company: 'ShadowFox',
                    title: 'Cyber Security Intern',
                    description: '• Assisted in cybersecurity internship assignments and foundational security tasks\n• Worked on learning-based activities around assessment, reporting, and defensive security practices',
                    location: 'Bangalore Urban, Karnataka, India'
                },
                {
                    starts_at: { day: 1, month: 12, year: 2025 },
                    ends_at: { day: 1, month: 12, year: 2025 },
                    company: 'Redynox',
                    title: 'Cyber Security Intern',
                    description: 'Key responsibilities and work\n• Performed basic network security analysis\n• Conducted vulnerability assessments on sample systems\n• Learned penetration testing workflow and tools\n• Studied incident response steps and reporting\n• Documented findings in structured security reports\n• Collaborated with the cybersecurity team on assigned tasks',
                    location: 'Bangalore Urban, Karnataka, India'
                },
                {
                    starts_at: { day: 1, month: 12, year: 2025 },
                    ends_at: { day: 1, month: 12, year: 2025 },
                    company: 'Prodigy InfoTech',
                    title: 'Cyber Security Intern',
                    description: 'Prodigy Infotech Cyber Security Internship focused on building hands-on security tools using Python. Completed five practical tasks covering core security concepts and basic offensive techniques, including a Caesar Cipher tool, image encryption tool, password complexity checker, keylogger for educational use, and a network packet analyzer. This internship strengthened understanding of cryptography basics, secure coding, network analysis, and ethical security practices through real-world implementation.',
                    location: 'Bangalore Urban, Karnataka, India'
                },
                {
                    starts_at: { day: 1, month: 6, year: 2025 },
                    ends_at: { day: 1, month: 12, year: 2025 },
                    company: 'iStudio Technologies - Digital Tranformation company',
                    title: 'Ethical Hacking Intern',
                    description: '• Completed an Ethical Hacking internship focused on real-time security tasks\n• Performed vulnerability identification on test environments\n• Practiced basic exploitation techniques and security analysis\n• Worked with tools for scanning, enumeration and reporting\n• Followed mentor guidance to improve practical cybersecurity skills\n• Completed assigned weekly tasks and final internship requirements\n• Gained hands-on understanding of ethical hacking workflows and documentation',
                    location: 'Bangalore Urban, Karnataka, India'
                }
            ],
            certifications: [
        {
            title: "Cybersecurity Training – Learn to Hack Real-Time Web Application",
            issuer: "ElevanceSkills",
            date: "May 2026",
            credentialId: "69fc093166a525c473001900",
            details: [
                "Successfully completed cybersecurity training and real-time project training",
                "Learned practical web application security concepts and attack methodologies",
                "Gained exposure to real-world web application hacking techniques",
                "Strengthened understanding of cybersecurity workflows and security testing practices"
            ]
        },
        {
            title: "Mastercard - Cybersecurity Job Simulation",
            issuer: "Forage",
            date: "Mar 2026",
            credentialId: "pPSgdwxmAjMF6nm9g",
            details: ["Certificate in completion of Cybersecurity Job Simulation in Forge"]
        },
        {
            title: "Node JS: Advanced Concepts",
            issuer: "Udemy",
            date: "Feb 2026",
            credentialId: "UC-59abdfae-6561-47a1-8b71-2cee06fa75f8",
            details: [
                "Completed advanced-level Node.js training",
                "Learned asynchronous programming, performance optimization, and internals",
                "Strengthened backend development concepts",
                "Improved ability to build scalable server-side applications"
            ]
        },
        {
            title: "The Complete Git Guide: Understand and Master Git and GitHub",
            issuer: "Udemy",
            date: "Feb 2026",
            credentialId: "UC-3699e56f-b7a1-4b34-9d79-1e7b33dcbb33",
            details: [
                "Completed an in-depth course on Git and GitHub",
                "Learned version control concepts, branching, merging, and workflows",
                "Gained hands-on experience managing repositories and collaboration",
                "Improved understanding of real-world development workflows"
            ]
        },
        {
            title: "Ethical Hacking for Beginners",
            issuer: "Infosys Springboard",
            date: "Aug 2025",
            credentialId: "",
            details: [
                "Completed beginner-level ethical hacking course",
                "Learned basic cybersecurity concepts and threat awareness",
                "Understood common attack types and prevention methods",
                "Built foundation for advanced cybersecurity learning"
            ]
        },
        {
            title: "Cyber Security and Applied Ethical Hacking",
            issuer: "Infosys Springboard",
            date: "Aug 2025",
            credentialId: "",
            details: [
                "Completed Cyber Security and Applied Ethical Hacking course",
                "Learned practical cybersecurity concepts and applied hacking techniques",
                "Understood real-world cyber threats and defensive measures"
            ]
        },
        {
            title: "Ethical Hacking Masterclass",
            issuer: "Infosys Springboard",
            date: "Aug 2025",
            credentialId: "",
            details: [
                "Completed Ethical Hacking Masterclass through Infosys Springboard",
                "Learned fundamentals of ethical hacking and cybersecurity practices",
                "Understood attack methodologies and basic security testing concepts"
            ]
        },
        {
            title: "React Hooks Interactive Lab",
            issuer: "DevTown",
            date: "Jan 2026",
            credentialId: "20TYYb",
            details: [
                "Completed a 5-day interactive lab on React Hooks",
                "Practiced useState, useEffect, and component-based development",
                "Strengthened frontend development and React fundamentals"
            ]
        },
        {
            title: "Bounty Hunt 101 – Learn the Art of Breaking",
            issuer: "DevTown",
            date: "Jan 2026",
            credentialId: "ZmMbOJ",
            details: [
                "Participated in the Bounty Hunt 101 cybersecurity bootcamp",
                "Learned fundamentals of bug bounty and ethical hacking",
                "Understood reconnaissance and vulnerability discovery workflow",
                "Gained exposure to responsible disclosure practices"
            ]
        },
        {
            title: "Cybersecurity Internship",
            issuer: "Redynox",
            date: "Jan 2026",
            credentialId: "RDX-GA-20260116-2460",
            details: [
                "Completed a one-month cybersecurity internship at Redynox",
                "Worked on real-world cybersecurity practices and awareness tasks",
                "Gained practical exposure to safeguarding digital infrastructure",
                "Demonstrated strong learning discipline and commitment to cyber safety"
            ]
        },
        {
            title: "Cyber Security Intern",
            issuer: "Prodigy InfoTech",
            date: "Jan 2026",
            credentialId: "PIT/DEC25/00900",
            details: [
                "Successfully completed a 1-month Cyber Security internship with outstanding remarks",
                "Worked on real-world cybersecurity tasks and practical assignments",
                "Demonstrated strong technical understanding, initiative, and professionalism"
            ]
        },
        {
            title: "DCSC – DROP Certified Security Course",
            issuer: "The Drop Organization",
            date: "Jul 2024",
            credentialId: "DCSC-GMKM0424",
            details: [
                "Completed the DCSC from DROP Organization",
                "Trained in web application penetration testing concepts",
                "Learned identification and exploitation of common web vulnerabilities",
                "Understood security testing methodologies and reporting practices"
            ]
        },
        {
            title: "5-Day AI Agents Intensive Course",
            issuer: "Google & Kaggle",
            date: "Dec 2025",
            credentialId: "",
            details: [
                "Completed a 5-day intensive course on AI Agents conducted by Kaggle in collaboration with Google",
                "Learned the fundamentals of AI agents and their real-world applications",
                "Explored agent workflows, reasoning patterns, and automation concepts"
            ]
        },
        {
            title: "Junior Cybersecurity Analyst",
            issuer: "Cisco Networking Academy",
            date: "Feb 2025",
            credentialId: "0fc5889c-9f2c-4cc5-ba94-cce7016894eb",
            details: [
                "Completed the Junior Cybersecurity Analyst career path",
                "Learned to recommend cybersecurity controls for network and information security",
                "Practiced mitigating network and system security threats",
                "Evaluated organizational security posture using vulnerability and risk assessment tools"
            ]
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            date: "Oct 2024",
            credentialId: "9c835d7d-1003-440b-a1de-1d701a824ee2",
            details: [
                "Learned fundamentals of cybersecurity, online safety, and cyber threats",
                "Understood common attacks, vulnerabilities, and basic protection methods",
                "Gained awareness of how individuals and organizations secure digital systems"
            ]
        },
        {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco Networking Academy",
            date: "Sep 2025",
            credentialId: "a91be6b8-7b1a-44b7-9985-d6805ac10168",
            details: [
                "Learned fundamentals of networking, TCP/IP, and OSI model",
                "Configured switches, routers, IPv4 and IPv6 addressing",
                "Understood Ethernet operations and basic network security practices",
                "Gained hands-on experience in small network setup and troubleshooting"
            ]
        },
        {
            title: "Ethical Hacking Internship",
            issuer: "iStudio Technologies",
            date: "Jun 2025",
            credentialId: "ISETHI1848349",
            details: [
                "Completed an Ethical Hacking internship focused on real-time security tasks",
                "Performed vulnerability identification on test environments",
                "Practiced basic exploitation techniques and security analysis",
                "Worked with tools for scanning, enumeration and reporting"
            ]
        },
        {
            title: "Hunting Bugs on Live Targets",
            issuer: "Indian Cyber Club Technologies",
            date: "Dec 2025",
            credentialId: "",
            details: [
                "Participated in the Hunting Bugs on Live Targets program",
                "Practiced identifying security flaws in real-time environments",
                "Learned common bug bounty techniques and testing approaches"
            ]
        },
        {
            title: "Kaggle Community Member Badge",
            issuer: "Kaggle",
            date: "Nov 2025",
            credentialId: "",
            details: [
                "Recognized for active participation in the Kaggle learning community",
                "Explored datasets, discussions, and beginner-friendly workflows",
                "Learned practical approaches to data handling and problem solving"
            ]
        },
        {
            title: "Python Coder Badge",
            issuer: "Kaggle",
            date: "Nov 2025",
            credentialId: "",
            details: [
                "Completed Python tasks and exercises on Kaggle",
                "Strengthened understanding of variables, loops, functions, and data structures",
                "Built confidence in writing clean and correct Python code"
            ]
        },
        {
            title: "Xploit – Cybersecurity Event (3rd Place)",
            issuer: "Kristu Jayanti University",
            date: "Oct 2025",
            credentialId: "",
            details: [
                "Awarded 3rd place in the Xploit Cybersecurity event at Synchrotech",
                "Competed in hands-on cybersecurity challenges and problem-solving tasks",
                "Demonstrated skills in vulnerability analysis, threat understanding, and practical security concepts"
            ]
        },
        {
            title: "Programming in Java – Elite Certification",
            issuer: "NPTEL",
            date: "Oct 2025",
            credentialId: "NPTEL25CS11OS3052601217",
            details: [
                "Completed the 12-week NPTEL course conducted by IIT Kharagpur",
                "Earned Elite category with a consolidated score of 85%",
                "Gained strong understanding of OOP, exception handling, multithreading, and collections"
            ]
        },
        {
            title: "Digital Engineering – Gold Certification",
            issuer: "nasscom",
            date: "Aug 2025",
            credentialId: "FSP/2025/8/10240381",
            details: [
                "Cleared the national Digital Engineering assessment by NASSCOM FutureSkills Prime",
                "Achieved Gold category with an overall score of 83%",
                "Demonstrated strong understanding of digital systems, engineering workflows, and problem-solving"
            ]
        },
        {
            title: "Getting Started with Linux Fundamentals (RH104)",
            issuer: "Red Hat",
            date: "Feb 2025",
            credentialId: "",
            details: [
                "Completed foundational training in Linux system usage and administration",
                "Worked with core commands, file systems, and user management"
            ]
        }
    ],
            skill_groups: {
                'Cyber Security Foundations': [
                    'Network Security',
                    'Ethical Hacking',
                    'Digital Protection',
                    'Information Security',
                    'Vulnerability Assessment',
                    'Penetration Testing',
                    'Vulnerability Scanning',
                    'Cryptography',
                    'Network Analysis',
                    'CTF'
                ],
                'Security Tools': [
                    'Nmap',
                    'Burp Suite',
                    'Netsparker',
                    'Wireshark'
                ],
                'Programming & Scripting': [
                    'Python',
                    'Java',
                    'JavaScript',
                    'HTML',
                    'CSS',
                    'Secure Coding'
                ],
                'Systems & Infrastructure': [
                    'Linux Fundamentals',
                    'Operating Systems',
                    'Computer Networks',
                    'Web Security'
                ],
                'Professional Practices': [
                    'Security Reporting',
                    'Documentation',
                    'Incident Response Basics'
                ]
            },
            skills: [
                'Network Security',
                'Ethical Hacking',
                'Digital Protection',
                'Information Security',
                'Vulnerability Assessment',
                'Penetration Testing',
                'Vulnerability Scanning',
                'Cryptography',
                'Network Analysis',
                'CTF',
                'Nmap',
                'Burp Suite',
                'Netsparker',
                'Wireshark',
                'Python',
                'Java',
                'JavaScript',
                'HTML',
                'CSS',
                'Secure Coding',
                'Linux Fundamentals',
                'Operating Systems',
                'Computer Networks',
                'Web Security',
                'Security Reporting',
                'Documentation'
            ],
            accomplishment_projects: [
                {
                    starts_at: { day: 1, month: 12, year: 2025 },
                    ends_at: null,
                    title: 'Prodigy Infotech Cyber Security Internship Projects',
                    description: 'Completed multiple hands-on cyber security projects during the Prodigy Infotech Internship with a strong focus on practical implementation using Python. Built a Caesar Cipher tool to encrypt and decrypt text using user-defined shift values, developed an image encryption program using pixel manipulation, created a password complexity checker, implemented a basic keylogger for educational use, and developed a network packet analyzer to inspect IP addresses, protocols, and payload data.',
                    url: '',
                    tags: ['Python', 'Cryptography', 'Network Analysis', 'Secure Coding']
                },
                {
                    starts_at: { day: 1, month: 11, year: 2025 },
                    ends_at: { day: 1, month: 12, year: 2025 },
                    title: 'Portfolio Website for Myself',
                    description: 'Built a personal website to highlight cyber security work through sections for projects, skills, education, certifications, and contact details. Designed a clean layout with fast loading, simple navigation, and responsive behavior for both mobile and desktop. The website runs on the custom domain gautammanglani.in.',
                    url: 'https://gautammanglani.in/',
                    tags: ['HTML', 'CSS', 'Responsive Design', 'Portfolio']
                },
                {
                    starts_at: { day: 1, month: 6, year: 2025 },
                    ends_at: { day: 1, month: 12, year: 2025 },
                    title: 'Ethical Hacking Internship Project – iStudio',
                    description: 'Completed structured ethical hacking tasks during the internship, including scanning, information gathering, basic exploitation steps, vulnerability scanning of a test application using Netsparker, and final reporting with documentation and a walkthrough video. The project strengthened skills in enumeration, vulnerability analysis, evidence collection, and structured cybersecurity reporting.',
                    url: '',
                    tags: ['Ethical Hacking', 'Netsparker', 'Reporting', 'Vulnerability Analysis']
                }
            ],
            languages_and_proficiencies: [
                { name: 'English', proficiency: 'FULL_PROFESSIONAL' },
                { name: 'Hindi', proficiency: 'NATIVE_OR_BILINGUAL' }
            ]
        };

        this.cache.profile = profileData;
        this.cache.lastFetch = Date.now();
        return profileData;
    },

    updatePageContent() {
        const data = this.cache.profile;
        if (!data) return;

        this.updateHeroSection(data);
        this.updateAboutSection(data);
        this.updateEducationSection(data);
        this.updateSkillsSection(data);
        this.updateCertificationsSection(data);
        this.updateExperienceSection(data);
        this.updateProjectsSection(data);
        this.updateContactSection(data);
        this.updateGlobalLinks(data);
    },

    updateGlobalLinks(data) {
        const github = data.social_links?.github || this.githubUrl;
        const linkedin = data.social_links?.linkedin || this.profileUrl;
        const email = data.personal_emails?.[0] || 'gautammanglani018@gmail.com';

        [
            document.getElementById('github-link'),
            document.getElementById('github-hero-link'),
            document.getElementById('github-footer-link'),
            document.getElementById('contact-github-link')
        ].forEach((link) => {
            if (!link) return;
            link.href = github;
        });

        const contactEmail = document.getElementById('contact-email');
        if (contactEmail) {
            contactEmail.href = `mailto:${email}`;
            contactEmail.textContent = email;
        }

        document.querySelectorAll('a[href="https://www.linkedin.com/in/gautammanglani"]').forEach((link) => {
            link.href = linkedin;
        });
    },

    updateHeroSection(data) {
        const heroName = document.getElementById('hero-name');
        const heroHeadline = document.getElementById('hero-headline');
        const heroLocation = document.getElementById('hero-location');
        const profileImage = document.getElementById('profile-image');
        const heroOccupation = document.getElementById('hero-occupation');

        if (heroName) heroName.textContent = data.full_name || 'Gautam Manglani';
        if (heroHeadline) heroHeadline.textContent = data.headline || data.occupation || 'Cybersecurity Intern';
        if (heroOccupation) heroOccupation.textContent = data.occupation || 'Cybersecurity Intern';

        if (heroLocation) {
            heroLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i>${this.escapeHtml(data.location_str || 'Bengaluru, Karnataka, India')}`;
        }

        if (profileImage && data.profile_pic_url) {
            profileImage.src = data.profile_pic_url;
            profileImage.alt = data.full_name || 'Gautam Manglani';
        }
    },

    updateAboutSection(data) {
        const aboutSummary = document.getElementById('about-summary');
        const educationStatus = document.getElementById('education-status');
        const locationCity = document.getElementById('location-city');
        const connectionsCount = document.getElementById('connections-count');
        const certificationsCount = document.getElementById('certifications-count');
        const experienceCount = document.getElementById('experience-count');
        const followersCount = document.getElementById('followers-count');
        const highlightsList = document.getElementById('profile-highlights');
        const languagesList = document.getElementById('languages-list');

        if (aboutSummary && data.summary) {
            aboutSummary.textContent = data.summary;
        }

        if (educationStatus) {
            educationStatus.textContent = data.occupation || 'Cybersecurity Intern';
        }

        if (locationCity) {
            locationCity.textContent = data.city || 'Bengaluru';
        }

        if (connectionsCount) {
            connectionsCount.textContent = data.connections || data.follower_count || '13';
        }

        if (certificationsCount) {
            certificationsCount.textContent = (data.certifications || []).length;
        }

        if (experienceCount) {
            experienceCount.textContent = (data.experiences || []).length;
        }

        if (followersCount) {
            followersCount.textContent = data.follower_count || data.connections || '13';
        }

        if (highlightsList) {
            const highlights = this.buildHighlights(data);
            highlightsList.innerHTML = highlights.map((item) => `<div class="highlight-chip">${this.escapeHtml(item)}</div>`).join('');
        }

        if (languagesList) {
            const languages = data.languages_and_proficiencies || [];
            languagesList.innerHTML = languages.map((lang) => `
                <div class="language-pill">
                    <strong>${this.escapeHtml(lang.name)}</strong>
                    <span>${this.escapeHtml(this.formatProficiency(lang.proficiency))}</span>
                </div>
            `).join('');
        }
    },

    buildHighlights(data) {
        const topSkills = Object.values(data.skill_groups || {}).flat().slice(0, 3);
        const latestCert = data.certifications?.[0]?.title; // FIXED: cert.title
        return [
            data.occupation,
            `${data.education?.[0]?.degree_name || 'BCA'} - ${data.education?.[0]?.field_of_study || 'Cyber Security'}`,
            ...topSkills,
            latestCert ? `Latest achievement: ${latestCert}` : null,
            'Hands-on internship experience across security, reporting, and ethical hacking'
        ].filter(Boolean);
    },

    updateEducationSection(data) {
        const timeline = document.getElementById('education-timeline');
        if (!timeline || !data.education || data.education.length === 0) return;

        timeline.innerHTML = '';

        data.education.forEach((edu) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3>${this.escapeHtml(edu.school || 'Education')}</h3>
                        <span class="timeline-date">${this.escapeHtml(this.formatYearRange(edu.starts_at, edu.ends_at))}</span>
                    </div>
                    ${this.renderEducationLine(edu)}
                    ${edu.description ? `<p class="timeline-location timeline-description">${this.escapeHtml(edu.description)}</p>` : ''}
                    ${edu.location ? `<p class="timeline-location">${this.escapeHtml(edu.location)}</p>` : ''}
                </div>
            `;
            timeline.appendChild(item);
        });
    },

    updateSkillsSection(data) {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) return;

        const skillGroups = data.skill_groups || {};
        const hasGroups = Object.keys(skillGroups).length > 0;
        const iconMap = {
            'Cyber Security Foundations': 'fa-shield-alt',
            'Security Tools': 'fa-screwdriver-wrench',
            'Programming & Scripting': 'fa-code',
            'Systems & Infrastructure': 'fa-server',
            'Professional Practices': 'fa-clipboard-check',
            'General': 'fa-star'
        };

        skillsContainer.innerHTML = '';

        if (hasGroups) {
            Object.entries(skillGroups).forEach(([groupName, skills]) => {
                if (!skills || skills.length === 0) return;
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'skill-category';
                categoryDiv.innerHTML = `
                    <h3 class="category-title">
                        <i class="fas ${iconMap[groupName] || 'fa-star'}"></i>
                        ${this.escapeHtml(groupName)}
                    </h3>
                    <div class="skills-list">
                        ${skills.map((skill) => `<span class="skill-tag">${this.escapeHtml(skill)}</span>`).join('')}
                    </div>
                `;
                skillsContainer.appendChild(categoryDiv);
            });
            return;
        }

        const skills = data.skills || [];
        if (skills.length === 0) return;

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        categoryDiv.innerHTML = `
            <h3 class="category-title">
                <i class="fas fa-star"></i>
                Skills
            </h3>
            <div class="skills-list">
                ${skills.map((skill) => `<span class="skill-tag">${this.escapeHtml(skill)}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(categoryDiv);
    },

    // FIXED: Using your exact variables (title, issuer, date)
    updateCertificationsSection(data) {
        const certificationsGrid = document.getElementById('certifications-grid');
        if (!certificationsGrid || !data.certifications || data.certifications.length === 0) return;

        this.certificationState.certifications = [...data.certifications];
        this.certificationState.activeIndex = 0;

        certificationsGrid.innerHTML = `
            <div class="cert-sidebar-panel">
                <div class="cert-sidebar-header">
                    <span class="cert-count">${data.certifications.length} certifications</span>
                    <p>Select a certificate to preview full details without filling the whole screen.</p>
                </div>
                <div class="certifications-sidebar" id="certifications-sidebar"></div>
            </div>
            <div class="certification-display cert-display-card" id="certification-display"></div>
        `;

        const sidebar = document.getElementById('certifications-sidebar');
        if (!sidebar) return;

        this.certificationState.certifications.forEach((cert, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `cert-nav-item ${index === 0 ? 'active' : ''}`;
            button.dataset.index = String(index);
            // FIXED: cert.title, cert.issuer, cert.date
            button.innerHTML = `
                <span class="cert-nav-title">${this.escapeHtml(cert.title || 'Certification')}</span>
                <span class="cert-nav-meta">${this.escapeHtml(cert.issuer || 'Credential')} • ${this.escapeHtml(cert.date || 'Date unavailable')}</span>
            `;
            button.addEventListener('click', () => this.renderActiveCertification(index));
            sidebar.appendChild(button);
        });

        this.renderActiveCertification(0);
    },

    // FIXED: Using your exact variables and adding details
    renderActiveCertification(index) {
        const certifications = this.certificationState.certifications || [];
        if (!certifications.length) return;

        const safeIndex = Math.max(0, Math.min(index, certifications.length - 1));
        this.certificationState.activeIndex = safeIndex;
        const cert = certifications[safeIndex];
        const display = document.getElementById('certification-display');
        const sidebarButtons = document.querySelectorAll('.cert-nav-item');

        sidebarButtons.forEach((button, buttonIndex) => {
            button.classList.toggle('active', buttonIndex === safeIndex);
        });

        if (!display) return;

        // FIXED: ADDING BULLET POINTS
        let detailsHtml = '';
        if (cert.details && cert.details.length > 0) {
            detailsHtml = `<ul class="detail-list" style="margin-top: 15px;">${cert.details.map(d => `<li>${this.escapeHtml(d)}</li>`).join('')}</ul>`;
        }

        // FIXED: cert.title, cert.issuer, cert.date, cert.credentialId
        display.innerHTML = `
            <div class="cert-display-top">
                <div class="cert-display-icon"><i class="fas fa-certificate"></i></div>
                <div>
                    <p class="cert-display-kicker">Credential ${safeIndex + 1} of ${certifications.length}</p>
                    <h3>${this.escapeHtml(cert.title || 'Certification')}</h3>
                    <p class="cert-display-authority">${this.escapeHtml(cert.issuer || 'Issuing authority')}</p>
                </div>
            </div>
            <div class="cert-display-meta-grid">
                <div class="cert-meta-box">
                    <span>Issued</span>
                    <strong>${this.escapeHtml(cert.date || 'Not specified')}</strong>
                </div>
                <div class="cert-meta-box">
                    <span>Credential</span>
                    <strong>${this.escapeHtml(cert.credentialId || 'Not provided')}</strong>
                </div>
                <div class="cert-meta-box">
                    <span>Status</span>
                    <strong>Active / Listed</strong>
                </div>
            </div>
            <p class="cert-display-description">${this.escapeHtml(this.buildCertificationDescription(cert))}</p>
            ${detailsHtml}
            <div class="cert-display-actions">
                <button type="button" class="btn btn-secondary cert-nav-control" ${safeIndex === 0 ? 'disabled' : ''} data-direction="prev">
                    <i class="fas fa-arrow-left"></i>
                    Previous
                </button>
                ${cert.url ? `<a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View Credential</a>` : '<span class="btn btn-primary disabled-btn">Credential Link Unavailable</span>'}
                <button type="button" class="btn btn-secondary cert-nav-control" ${safeIndex === certifications.length - 1 ? 'disabled' : ''} data-direction="next">
                    Next
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;

        display.querySelectorAll('.cert-nav-control').forEach((button) => {
            button.addEventListener('click', () => {
                const nextIndex = button.dataset.direction === 'next' ? safeIndex + 1 : safeIndex - 1;
                this.renderActiveCertification(nextIndex);
            });
        });
    },

    // FIXED: Using your exact variables for the description string
    buildCertificationDescription(cert) {
        const parts = [
            cert.title ? `${cert.title} issued by ${cert.issuer || 'the listed authority'}.` : '',
            cert.credentialId ? `Credential reference: ${cert.credentialId}.` : 'Credential reference is not publicly listed.',
            cert.url ? 'A verification link is available for this credential.' : 'No public verification link is attached in the current portfolio data.'
        ];
        return parts.filter(Boolean).join(' ');
    },

    updateExperienceSection(data) {
        const experienceTimeline = document.getElementById('experience-timeline');
        if (!experienceTimeline || !data.experiences || data.experiences.length === 0) return;

        experienceTimeline.innerHTML = '';

        data.experiences.forEach((exp) => {
            const expItem = document.createElement('div');
            expItem.className = 'exp-item';
            expItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3>${this.escapeHtml(exp.title || 'Position')}</h3>
                        <span class="timeline-date">${this.escapeHtml(this.formatDateRange(exp.starts_at, exp.ends_at))}</span>
                    </div>
                    <p class="timeline-degree">${this.escapeHtml(exp.company || 'Company')}</p>
                    ${exp.location ? `<p class="timeline-location">${this.escapeHtml(exp.location)}</p>` : ''}
                    ${this.renderRichDescription(exp.description)}
                </div>
            `;
            experienceTimeline.appendChild(expItem);
        });
    },

    updateProjectsSection(data) {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid || !data.accomplishment_projects || data.accomplishment_projects.length === 0) return;

        projectsGrid.innerHTML = '';

        data.accomplishment_projects.forEach((project) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-image">
                    <i class="fas fa-project-diagram"></i>
                </div>
                <div class="project-content">
                    <h3>${this.escapeHtml(project.title || 'Project')}</h3>
                    <p class="project-meta">${this.escapeHtml(this.formatDateRange(project.starts_at, project.ends_at))}</p>
                    ${this.renderRichDescription(project.description)}
                    ${project.tags && project.tags.length ? `<div class="project-tags">${project.tags.map((tag) => `<span class="project-tag">${this.escapeHtml(tag)}</span>`).join('')}</div>` : ''}
                    ${project.url ? `<div class="project-links"><a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">View Project</a></div>` : ''}
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });

        const githubCard = document.createElement('div');
        githubCard.className = 'project-card github-project-card';
        githubCard.innerHTML = `
            <div class="project-image github-project-icon">
                <i class="fab fa-github"></i>
            </div>
            <div class="project-content">
                <h3>GitHub Profile</h3>
                <p class="project-meta">Code repositories, experiments, and learning projects</p>
                <p>Explore additional hands-on work, coding practice, and portfolio source files on GitHub.</p>
                <div class="project-tags">
                    <span class="project-tag">GitHub</span>
                    <span class="project-tag">Code</span>
                    <span class="project-tag">Portfolio</span>
                </div>
                <div class="project-links">
                    <a href="${data.social_links?.github || this.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Open GitHub</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(githubCard);
    },

    updateContactSection(data) {
        const contactLocation = document.getElementById('contact-location');
        const emailCard = document.getElementById('email-card');
        const contactEmail = document.getElementById('contact-email');
        const contactGithubLink = document.getElementById('contact-github-link');
        const contactForm = document.getElementById('contact-form');

        if (contactLocation && data.location_str) {
            contactLocation.textContent = data.location_str;
        }

        const email = data.personal_emails?.[0] || 'gautammanglani018@gmail.com';
        if (emailCard && contactEmail) {
            emailCard.style.display = 'flex';
            contactEmail.href = `mailto:${email}`;
            contactEmail.textContent = email;
        }

        if (contactGithubLink) {
            contactGithubLink.href = data.social_links?.github || this.githubUrl;
            contactGithubLink.textContent = 'GautamManglani';
        }

        if (contactForm) {
            contactForm.action = `https://formsubmit.co/ajax/${email}`;
        }
    },

    enhanceDynamicContent() {
        const animatedElements = document.querySelectorAll('.timeline-item, .exp-item, .skill-category, .project-card, .contact-card, .detail-panel, .cert-sidebar-panel, .cert-display-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -80px 0px'
        });

        animatedElements.forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    },

    renderEducationLine(edu) {
        const degree = edu.degree_name ? this.escapeHtml(edu.degree_name) : '';
        const field = edu.field_of_study ? this.escapeHtml(edu.field_of_study) : '';

        if (degree && field) {
            return `<p class="timeline-degree">${degree} - ${field}</p>`;
        }
        if (degree) {
            return `<p class="timeline-degree">${degree}</p>`;
        }
        if (field) {
            return `<p class="timeline-degree">${field}</p>`;
        }
        return '';
    },

    renderRichDescription(text) {
        if (!text) return '';

        const normalized = text
            .replace(/\s*•\s*/g, '\n• ')
            .replace(/\n{3,}/g, '\n\n')
            .trim();

        const lines = normalized.split('\n').map((line) => line.trim()).filter(Boolean);
        const introLines = lines.filter((line) => !line.startsWith('•'));
        const bulletLines = lines.filter((line) => line.startsWith('•')).map((line) => line.replace(/^•\s*/, ''));

        if (bulletLines.length > 0) {
            return `
                ${introLines.length ? `<p class="detail-intro">${this.escapeHtml(introLines.join(' '))}</p>` : ''}
                <ul class="detail-list">
                    ${bulletLines.map((item) => `<li>${this.escapeHtml(item)}</li>`).join('')}
                </ul>
            `;
        }

        return `<p>${this.escapeHtml(normalized)}</p>`;
    },

    formatMonthYear(dateObj) {
        if (!dateObj || !dateObj.year || !dateObj.month) return '';
        return new Date(dateObj.year, dateObj.month - 1, 1).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    },

    formatDateRange(start, end) {
        const startText = this.formatMonthYear(start);
        const endText = end ? this.formatMonthYear(end) : 'Present';
        if (!startText) return endText || '';
        return `${startText} - ${endText}`;
    },

    formatYearRange(start, end) {
        const startYear = start?.year || '';
        const endYear = end?.year || 'Present';
        return startYear ? `${startYear} - ${endYear}` : `${endYear}`;
    },

    formatProficiency(value) {
        const map = {
            FULL_PROFESSIONAL: 'Full Professional',
            NATIVE_OR_BILINGUAL: 'Native / Bilingual',
            PROFESSIONAL_WORKING: 'Professional Working',
            LIMITED_WORKING: 'Limited Working',
            ELEMENTARY: 'Elementary'
        };
        return map[value] || value || 'Not specified';
    },

    escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    showFallbackContent() {
        console.log('Using fallback content already embedded in the page.');
    },

    async refresh() {
        this.cache.profile = null;
        this.cache.lastFetch = null;
        await this.init();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    LinkedInSync.init();
});

setInterval(() => {
    LinkedInSync.refresh();
}, 3600000);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LinkedInSync;
}
