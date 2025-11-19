// LinkedIn Profile Sync Module
// This module handles fetching and syncing data from LinkedIn profile

const LinkedInSync = {
    // LinkedIn profile identifier
    profileId: 'gautammanglani',
    
    // Cache for LinkedIn data
    cache: {
        profile: null,
        lastFetch: null,
        cacheDuration: 3600000 // 1 hour in milliseconds
    },

    /**
     * Initialize LinkedIn sync
     */
    async init() {
        console.log('Initializing LinkedIn Sync...');
        try {
            await this.fetchLinkedInData();
            this.updatePageContent();
        } catch (error) {
            console.error('LinkedIn sync initialization failed:', error);
            this.showFallbackContent();
        }
    },

    /**
     * Fetch LinkedIn profile data
     * Note: This is a placeholder for actual API integration
     * In production, this would connect to a backend proxy or LinkedIn API
     */
    async fetchLinkedInData() {
        // Check cache first
        if (this.cache.profile && this.cache.lastFetch) {
            const timeSinceLastFetch = Date.now() - this.cache.lastFetch;
            if (timeSinceLastFetch < this.cacheDuration) {
                console.log('Using cached LinkedIn data');
                return this.cache.profile;
            }
        }

        // Since we can't directly call LinkedIn API from client-side,
        // we'll use the data structure that was provided
        // In a real implementation, this would make a request to your backend
        // which would then call the LinkedIn API
        
        const profileData = {
            public_identifier: 'gautammanglani',
            profile_pic_url: 'https://cdn1.genspark.ai/user-upload-image/crawler_linkedin_profile_thumbnails/e2a3a761-fa04-31cc-9992-5fd6d5f206ac',
            first_name: 'Gautam',
            last_name: 'Manglani',
            full_name: 'Gautam Manglani',
            follower_count: 13,
            occupation: 'BCA Cyber Security Student',
            headline: 'BCA Cyber Security Student at Kristu Jayanti University',
            summary: 'I am a BCA Cyber Security student at Kristu Jayanti University, Bengaluru, with a strong passion for technology and security. Currently pursuing my degree with a focus on cybersecurity, ethical hacking, and information security.',
            location_str: 'Bengaluru, Karnataka, India',
            country: 'IN',
            city: 'Bengaluru',
            state: 'Karnataka',
            connections: 13,
            education: [
                {
                    starts_at: { day: 1, month: 1, year: 2024 },
                    ends_at: { day: 31, month: 1, year: 2027 },
                    school: 'Kristu Jayanti University',
                    field_of_study: 'Cyber Security',
                    degree_name: 'Bachelor of Computer Applications (BCA)',
                    description: 'Specializing in Cyber Security, Network Security, Ethical Hacking, and Information Security.',
                    school_linkedin_profile_url: 'https://www.linkedin.com/school/kristujayantiuniversityblr'
                }
            ],
            experiences: [],
            certifications: [],
            skills: [
                'Network Security',
                'Information Security',
                'Ethical Hacking',
                'Python Programming',
                'JavaScript',
                'HTML/CSS',
                'Linux',
                'Cybersecurity Fundamentals',
                'Web Development'
            ],
            accomplishment_projects: []
        };

        // Cache the data
        this.cache.profile = profileData;
        this.cache.lastFetch = Date.now();
        
        return profileData;
    },

    /**
     * Update page content with LinkedIn data
     */
    updatePageContent() {
        const data = this.cache.profile;
        if (!data) return;

        // Update hero section
        this.updateHeroSection(data);
        
        // Update about section
        this.updateAboutSection(data);
        
        // Update education section
        this.updateEducationSection(data);
        
        // Update skills section
        this.updateSkillsSection(data);
        
        // Update certifications section
        this.updateCertificationsSection(data);
        
        // Update experience section
        this.updateExperienceSection(data);
        
        // Update projects section
        this.updateProjectsSection(data);
        
        // Update contact section
        this.updateContactSection(data);
    },

    /**
     * Update hero section
     */
    updateHeroSection(data) {
        const heroName = document.getElementById('hero-name');
        const heroHeadline = document.getElementById('hero-headline');
        const heroLocation = document.getElementById('hero-location');
        const profileImage = document.getElementById('profile-image');

        if (heroName) heroName.textContent = data.full_name || 'Gautam Manglani';
        if (heroHeadline) heroHeadline.textContent = data.headline || data.occupation || 'BCA Cyber Security Student';
        
        if (heroLocation) {
            heroLocation.innerHTML = `
                <i class="fas fa-map-marker-alt"></i>
                ${data.location_str || 'Bengaluru, Karnataka, India'}
            `;
        }
        
        if (profileImage && data.profile_pic_url) {
            profileImage.src = data.profile_pic_url;
            profileImage.alt = data.full_name;
        }
    },

    /**
     * Update about section
     */
    updateAboutSection(data) {
        const aboutSummary = document.getElementById('about-summary');
        const educationStatus = document.getElementById('education-status');
        const locationCity = document.getElementById('location-city');
        const connectionsCount = document.getElementById('connections-count');

        if (aboutSummary && data.summary) {
            aboutSummary.textContent = data.summary;
        }

        if (educationStatus) {
            educationStatus.textContent = data.occupation || 'Student';
        }

        if (locationCity) {
            locationCity.textContent = data.city || 'Bengaluru';
        }

        if (connectionsCount) {
            connectionsCount.textContent = data.connections || data.follower_count || '13';
        }
    },

    /**
     * Update education section
     */
    updateEducationSection(data) {
        const timeline = document.getElementById('education-timeline');
        if (!timeline) return;

        if (!data.education || data.education.length === 0) return;

        // Clear existing content except the default one
        timeline.innerHTML = '';

        data.education.forEach(edu => {
            const startYear = edu.starts_at?.year || '';
            const endYear = edu.ends_at?.year || 'Present';
            const dateRange = startYear ? `${startYear} - ${endYear}` : '';
            
            const degree = edu.degree_name || 'BCA Cyber Security';
            const fieldOfStudy = edu.field_of_study ? ` - ${edu.field_of_study}` : '';

            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3>${edu.school || 'Kristu Jayanti University'}</h3>
                        <span class="timeline-date">${dateRange}</span>
                    </div>
                    <p class="timeline-degree">${degree}${fieldOfStudy}</p>
                    ${edu.description ? `<p class="timeline-location" style="margin-top: 10px; line-height: 1.6;">${edu.description}</p>` : ''}
                    <p class="timeline-location">${data.location_str || 'Bengaluru, Karnataka, India'}</p>
                </div>
            `;
            timeline.appendChild(item);
        });
    },

    /**
     * Update skills section
     */
    updateSkillsSection(data) {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) return;

        if (!data.skills || data.skills.length === 0) return;

        // Clear existing content
        skillsContainer.innerHTML = '';

        // Categorize skills
        const categories = {
            'Cyber Security': ['security', 'ethical', 'hacking', 'network', 'information'],
            'Programming': ['python', 'javascript', 'java', 'c++', 'coding', 'programming', 'html', 'css'],
            'Tools & Technologies': ['linux', 'git', 'docker', 'aws', 'cloud', 'database'],
            'General': []
        };

        const categorizedSkills = {
            'Cyber Security': [],
            'Programming': [],
            'Tools & Technologies': [],
            'General': []
        };

        // Categorize each skill
        data.skills.forEach(skill => {
            let categorized = false;
            const skillLower = skill.toLowerCase();
            
            for (const [category, keywords] of Object.entries(categories)) {
                if (category === 'General') continue;
                
                if (keywords.some(keyword => skillLower.includes(keyword))) {
                    categorizedSkills[category].push(skill);
                    categorized = true;
                    break;
                }
            }
            
            if (!categorized) {
                categorizedSkills['General'].push(skill);
            }
        });

        // Create skill category cards
        const icons = {
            'Cyber Security': 'fa-shield-alt',
            'Programming': 'fa-code',
            'Tools & Technologies': 'fa-tools',
            'General': 'fa-star'
        };

        Object.entries(categorizedSkills).forEach(([category, skills]) => {
            if (skills.length === 0) return;

            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';
            categoryDiv.innerHTML = `
                <h3 class="category-title">
                    <i class="fas ${icons[category]}"></i>
                    ${category}
                </h3>
                <div class="skills-list">
                    ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            `;
            skillsContainer.appendChild(categoryDiv);
        });
    },

    /**
     * Update certifications section
     */
    updateCertificationsSection(data) {
        const certificationsGrid = document.getElementById('certifications-grid');
        if (!certificationsGrid) return;

        if (!data.certifications || data.certifications.length === 0) {
            // Keep the empty state
            return;
        }

        // Clear empty state
        certificationsGrid.innerHTML = '';

        data.certifications.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'cert-card';
            
            const startDate = cert.starts_at ? 
                new Date(cert.starts_at.year, cert.starts_at.month - 1).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 
                '';

            certCard.innerHTML = `
                <div class="cert-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3>${cert.name || 'Certification'}</h3>
                ${cert.authority ? `<p class="cert-issuer">${cert.authority}</p>` : ''}
                ${startDate ? `<p class="cert-date">${startDate}</p>` : ''}
                ${cert.license_number ? `<p class="cert-date">License: ${cert.license_number}</p>` : ''}
            `;
            
            certificationsGrid.appendChild(certCard);
        });
    },

    /**
     * Update experience section
     */
    updateExperienceSection(data) {
        const experienceTimeline = document.getElementById('experience-timeline');
        if (!experienceTimeline) return;

        if (!data.experiences || data.experiences.length === 0) {
            // Keep the empty state
            return;
        }

        // Clear empty state
        experienceTimeline.innerHTML = '';

        data.experiences.forEach(exp => {
            const startDate = exp.starts_at ? 
                `${exp.starts_at.month}/${exp.starts_at.year}` : '';
            const endDate = exp.ends_at ? 
                `${exp.ends_at.month}/${exp.ends_at.year}` : 'Present';
            const dateRange = startDate ? `${startDate} - ${endDate}` : '';

            const expItem = document.createElement('div');
            expItem.className = 'exp-item';
            expItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3>${exp.title || 'Position'}</h3>
                        <span class="timeline-date">${dateRange}</span>
                    </div>
                    <p class="timeline-degree">${exp.company || 'Company'}</p>
                    ${exp.location ? `<p class="timeline-location">${exp.location}</p>` : ''}
                    ${exp.description ? `<p style="margin-top: 15px; color: var(--text-secondary); line-height: 1.7;">${exp.description}</p>` : ''}
                </div>
            `;
            
            experienceTimeline.appendChild(expItem);
        });
    },

    /**
     * Update projects section
     */
    updateProjectsSection(data) {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        if (!data.accomplishment_projects || data.accomplishment_projects.length === 0) {
            // Keep the empty state
            return;
        }

        // Clear empty state
        projectsGrid.innerHTML = '';

        data.accomplishment_projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const startDate = project.starts_at ? 
                `${project.starts_at.month}/${project.starts_at.year}` : '';
            const endDate = project.ends_at ? 
                `${project.ends_at.month}/${project.ends_at.year}` : 'Present';

            projectCard.innerHTML = `
                <div class="project-image">
                    <i class="fas fa-project-diagram"></i>
                </div>
                <div class="project-content">
                    <h3>${project.title || 'Project'}</h3>
                    ${project.description ? `<p>${project.description}</p>` : ''}
                    ${startDate ? `<p style="color: var(--text-muted); font-size: 14px; margin-top: 10px;">${startDate} - ${endDate}</p>` : ''}
                    ${project.url ? `<a href="${project.url}" target="_blank" class="btn btn-outline" style="margin-top: 15px; display: inline-flex;">View Project</a>` : ''}
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    },

    /**
     * Update contact section
     */
    updateContactSection(data) {
        const contactLocation = document.getElementById('contact-location');
        
        if (contactLocation && data.location_str) {
            contactLocation.textContent = data.location_str;
        }

        // If email is available from LinkedIn, show it
        if (data.personal_emails && data.personal_emails.length > 0) {
            const emailCard = document.getElementById('email-card');
            const contactEmail = document.getElementById('contact-email');
            
            if (emailCard && contactEmail) {
                emailCard.style.display = 'flex';
                contactEmail.href = `mailto:${data.personal_emails[0]}`;
                contactEmail.textContent = data.personal_emails[0];
            }
        }
    },

    /**
     * Show fallback content if LinkedIn sync fails
     */
    showFallbackContent() {
        console.log('Using fallback content');
        // The HTML already contains default content, so nothing to do here
    },

    /**
     * Manually refresh LinkedIn data
     */
    async refresh() {
        this.cache.profile = null;
        this.cache.lastFetch = null;
        await this.init();
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    LinkedInSync.init();
});

// Auto-refresh every hour
setInterval(() => {
    LinkedInSync.refresh();
}, 3600000); // 1 hour

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LinkedInSync;
}
