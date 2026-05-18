import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const courseraCertificates = [
  {
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "University of Colorado Boulder",
    description: "Advanced course on algorithmic design and optimization techniques.",
    tags: ["Algorithms", "March 2025"],
    link: "https://coursera.org/share/93ea572f881930e79b05d6df90a3c110"
  },
  {
    title: "Introduction To Java Database Connectivity - JDBC",
    issuer: "LearnQuest",
    description: "Hands-on project covering JDBC core components and building Java apps with back-end databases.",
    tags: ["Java", "JDBC", "Database", "Nov 2024"],
    link: "https://coursera.org/share/4ef29f7982990c8ab3b6fac6fef1c3d7"
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    issuer: "Google",
    description: "Comprehensive course on OS management, file systems, and user permissions.",
    tags: ["Google", "OS", "System Admin", "April 2025"],
    link: "https://coursera.org/share/573a68286a3a93498fe0de1d0ee41515"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    description: "Deep dive into TCP/IP, DNS, DHCP, and network troubleshooting.",
    tags: ["Google", "Networking", "TCP/IP", "Feb 2025"],
    link: "https://coursera.org/share/bcd1884664e1a00c3e9bb6a6e27d4693"
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University",
    description: "Mastering the Unix command line, Bash scripting, and Git.",
    tags: ["Unix", "Bash", "Johns Hopkins", "April 2025"],
    link: "https://coursera.org/share/429a8a1034c0f6ac1b3021d9bbfc48d4"
  },
  {
    title: "Spring - Ecosystem and Core",
    issuer: "LearnQuest",
    description: "Core concepts of the Spring Framework, Dependency Injection, and AOP.",
    tags: ["Spring", "Java", "LearnQuest", "Feb 2025"],
    link: "https://coursera.org/share/eb5d25ada645e0e132339f4fbf77f631"
  },
  {
    title: "Intro to Operating Systems 1: Virtualization",
    issuer: "Codio",
    description: "Foundations of operating systems with a focus on virtualization and resource management.",
    tags: ["OS", "Virtualization", "Codio", "April 2025"],
    link: "https://coursera.org/share/db7d175c8e34d2171764c86e299c8b22"
  },
  {
    title: "Lambda Expressions with Java",
    issuer: "Coursera",
    description: "Specialized training in functional programming patterns using Java Lambda expressions.",
    tags: ["Java", "Functional Programming", "Nov 2024"],
    link: "https://coursera.org/share/8f1d5ebc5dcfc2d0dd84f02585209a41"
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    description: "Professional certification in building dynamic, responsive UIs with React.",
    tags: ["React", "IBM", "Frontend", "March 2025"],
    link: "https://coursera.org/share/cd5fe0a0c13fc8dd9de76e4b181c5908"
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    description: "Foundations of HTML, CSS, and modern web development practices.",
    tags: ["Meta", "Frontend", "HTML/CSS", "March 2025"],
    link: "https://coursera.org/share/82ff0132cd0fc59ca8b004bbb01333f3"
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    description: "Overview of AI concepts, machine learning, and ethical considerations.",
    tags: ["AI", "IBM", "Machine Learning", "Nov 2024"],
    link: "https://coursera.org/share/801bf737e7048133453dc4a96793f7e7"
  },
  {
    title: "Hardware and Operating System Foundations II",
    issuer: "Illinois Tech",
    description: "Advanced study of hardware interfaces and OS interactions.",
    tags: ["Hardware", "OS", "Illinois Tech", "Nov 2024"],
    link: "https://coursera.org/share/d483b81259d0e0f6465b69abbdd7f7f3"
  },
  {
    title: "Supervised Machine Learning: Regression",
    issuer: "IBM",
    description: "Mastering regression models, cost functions, and gradient descent.",
    tags: ["Machine Learning", "IBM", "Regression", "Nov 2024"],
    link: "https://coursera.org/share/9c6365a22ac240df74498e2d46400081"
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    description: "Techniques for data cleaning, visualization, and feature engineering.",
    tags: ["Data Science", "IBM", "EDA", "Nov 2024"],
    link: "https://coursera.org/share/a4087cec469771689522552e604d130d"
  },
  {
    title: "Java Servlet Pages (JSPs)",
    issuer: "LearnQuest",
    description: "Building dynamic web applications using JSPs and Servlets.",
    tags: ["Java", "JSP", "Web Dev", "Nov 2024"],
    link: "https://coursera.org/share/739c1d02c371fb0f68e9392bb19ee3b3"
  },
  {
    title: "Introduction to Databases",
    issuer: "Meta",
    description: "Core database concepts, SQL, and relational database design.",
    tags: ["Meta", "SQL", "Databases", "Nov 2024"],
    link: "https://coursera.org/share/bfdd442776f485ca3e21d3f9ad71efea"
  },
  {
    title: "Cloud Application Development Foundations",
    issuer: "IBM",
    description: "Professional certification in cloud-native development and deployment strategies.",
    tags: ["Cloud", "IBM", "Nov 2024"],
    link: "https://coursera.org/share/51e8e1b64b96536217a94c54af6c7167"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    description: "Foundational Python for data science, covering data types, structures, and libraries like Pandas and Numpy.",
    tags: ["Python", "IBM", "Data Science", "Nov 2024"],
    link: "https://coursera.org/share/f14648a482b0c54ec2c9e26f17c832e0"
  },
  {
    title: "Java Database Connectivity (JDBC) Introduction",
    issuer: "LearnQuest",
    description: "Mastering JDBC core components, relational databases, and SQL integration in Java applications.",
    tags: ["Java", "JDBC", "SQL", "Nov 2024"],
    link: "https://coursera.org/share/8745d9bbe887490f94dc0f043945e207"
  },
  {
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    issuer: "IBM",
    description: "Practical mastery of Linux architecture, Bash commands, and shell script development.",
    tags: ["Linux", "Bash", "Shell Scripting", "Nov 2024"],
    link: "https://coursera.org/share/8d1a3bbf149e875c835d5f98fa8f5fc4"
  },
  {
    title: "Introduction to Object-Oriented Programming with Java",
    issuer: "LearnQuest",
    description: "Core principles of OOP, Java memory management, and software design patterns.",
    tags: ["Java", "OOP", "LearnQuest", "Nov 2024"],
    link: "https://coursera.org/share/b1ca42087ee8432dcb7d286f1478b2cc"
  },
  {
    title: "Introduction to Test and Behavior Driven Development",
    issuer: "IBM",
    description: "Implementing TDD/BDD methodologies, unit testing, and test automation for DevOps.",
    tags: ["TDD", "BDD", "Unit Testing", "Nov 2024"],
    link: "https://coursera.org/share/b1360208b18da2b83b25e6f2f9cd7e72"
  },
  {
    title: "Design Patterns",
    issuer: "University of Alberta",
    description: "Advanced study of software design patterns, UML, and architectural principles.",
    tags: ["Design Patterns", "UML", "Architecture", "Nov 2024"],
    link: "https://coursera.org/share/2c31b3b648e0c7ce12ddbebfbb100f91"
  },
];

const simplilearnCertificates = [
  {
    title: "Docker Tutorial for Beginners",
    issuer: "Simplilearn",
    description: "Comprehensive introduction to Docker containers, images, architecture, and basic orchestration techniques.",
    tags: ["Docker", "DevOps", "Containers"],
    link: "https://www.simplilearn.com/learn-docker-basics-free-course-skillup"
  }
];

const otherCertificates = [
  {
    title: "AWS Cloud Certifications",
    issuer: "Amazon Web Services (AWS)",
    description: "Certifications in Cloud Infrastructure, Architecture, and Security using Amazon Web Services.",
    tags: ["Cloud", "AWS", "Infrastructure"]
  },
  {
    title: "Certified Essentials Automation Professional",
    issuer: "Automation Anywhere",
    description: "Certified proficiency in Automation 360, covering RPA lifecycle, bot development, and intelligent automation deployment.",
    tags: ["RPA", "Automation 360", "Jan 2026"],
    link: "https://certificates.automationanywhere.com/dc112cfc-ae58-41fd-b671-202663d60156#acc.abfg8Tso"
  },
  {
    title: "Linguva Skills",
    issuer: "Linguva",
    description: "Professional certifications in Communication, Language Proficiency, and Interpersonal Skills.",
    tags: ["Communication", "Soft Skills", "Linguistics"],
    link: "/Badam Sudheer Reddy.pdf",
    floatingImage: "/cambridge-logo.png"
  },
  {
    title: "Technical Internship Certificate",
    issuer: "Linguva Skills",
    description: "Successfully completed a technical internship focusing on software development, industrial applications, and practical engineering tools.",
    tags: ["Internship", "Engineering", "Development"],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion"
  }
];

const upcomingCertificates = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    description: "Deepening expertise in cloud-native application development, serverless architectures, and CI/CD on AWS.",
    tags: ["Cloud", "AWS", "DevOps", "Planned"]
  },
  {
    title: "Meta Back-End Developer",
    issuer: "Meta",
    description: "Completing the full-stack journey by mastering Python, Django, and advanced server-side architecture.",
    tags: ["Back-End", "Meta", "Python", "In Progress"]
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    description: "Building upon Machine Learning foundations to design and operationalize data-driven systems.",
    tags: ["Data Engineering", "GCP", "ML Ops", "Planned"]
  },
  {
    title: "Java SE Professional Certification",
    issuer: "Oracle",
    description: "Formalizing advanced Java mastery with industry-standard professional certification.",
    tags: ["Java", "Oracle", "Software Architecture", "Planned"]
  }
];

const Certificates = () => {
  return (
    <section id="certificates" style={{ alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '3rem', alignSelf: 'center' }}>Certifications</h2>
      
      {/* Coursera Section */}
      <div className="coursera-container" style={{ width: '100%', marginBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 className="text-gradient" style={{ fontSize: '2.2rem', borderLeft: '4px solid var(--secondary-color)', paddingLeft: '1rem', fontWeight: 800 }}>
            Coursera Certificates
          </h3>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {courseraCertificates.map((cert, index) => (
            <GlassCard 
              key={index}
              title={cert.title}
              titleClassName="text-gradient"
              issuer={cert.issuer}
              description={cert.description}
              tags={cert.tags}
              link={cert.link}
              cardClass="flowing-border-anti"
            />
          ))}
        </div>
      </div>

      {/* Simplilearn Section */}
      <div className="simplilearn-container" style={{ width: '100%', marginBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#0070ad', borderLeft: '4px solid #0070ad', paddingLeft: '1rem' }}>
            Simplilearn Certificates
          </h3>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {simplilearnCertificates.map((cert, index) => (
            <GlassCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              description={cert.description}
              tags={cert.tags}
              link={cert.link}
              cardClass="flowing-border-simplilearn"
            />
          ))}
        </div>
      </div>

      {/* Other Section */}
      <div style={{ width: '100%', marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '2rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem' }}>
          Other Professional Certifications
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {otherCertificates.map((cert, index) => (
            <GlassCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              description={cert.description}
              tags={cert.tags}
              link={cert.link}
              cardClass={(cert.issuer === "Automation Anywhere" || cert.title === "Linguva Skills") ? "flowing-border" : ""}
              floatingImage={cert.floatingImage}
            />
          ))}
        </div>
      </div>

      {/* Future Roadmap Section */}
      <div style={{ width: '100%' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#ffcc00', marginBottom: '2rem', borderLeft: '4px solid #ffcc00', paddingLeft: '1rem' }}>
          Future Roadmap & Upcoming Certifications
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          opacity: 0.8
        }}>
          {upcomingCertificates.map((cert, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <GlassCard 
                title={cert.title}
                issuer={cert.issuer}
                description={cert.description}
                tags={cert.tags}
                link="#"
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '0.6rem',
                background: 'rgba(255, 204, 0, 0.2)',
                color: '#ffcc00',
                padding: '2px 8px',
                borderRadius: '10px',
                border: '1px solid #ffcc00',
                pointerEvents: 'none'
              }}>
                FUTURE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
