import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Icon, IconButton, Line, Row, Text } from "@once-ui-system/core";
import { DiAws } from "react-icons/di";
import { SiAmazon } from "react-icons/si";

const person: Person = {
  firstName: "Chineme",
  lastName: "Anyasi",
  name: `Anyasi Chineme`,
  role: "Cloud Engineer",
  avatar: "/images/avatar.jpg",
  email: "anyasichineme.p@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to My Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cybern3m3",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anyasichineme",
    essential: true,
  },
  {
    name: "twitter",
    icon: "twitter",
    link: "https://x.com/CyberN3M3",
    essential: false,
  },
  
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Projects and experience of ${person.name}, ${person.role}`,
  headline: <>Building and securing AWS infrastructure with Terraform</>,
  featured: {
   display: true,
    title: (
      <Row gap="12" vertical="center">
         <Row paddingX="8">
    <Text onBackground="brand-medium" weight="strong">
        View My Resume
    </Text>
</Row>
  <IconButton
    href="/cv/Anyasi-Chineme-Resume.pdf"
    target="_blank"             // Opens in new tab
    rel="noopener noreferrer"
    data-border="rounded"
    variant="secondary"             // <--- This applies the "glow" brand color
    icon="eye"
    tooltip="View Resume"
    />
<Icon paddingRight="4" name="decument" onBackground="brand-weak" />
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          AWS Certified Solutions Architect
        </Text>
      </Row>
    ),
    href: "",
  },
  subline: (
    <>
    I'm Chineme Anyasi, a <Text as="span" size="xl" weight="strong">Cloud Engineer</Text>. I build AWS infrastructure in Terraform, ship it through tested CI/CD pipelines and document what it costs and how it recovers.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a cloud engineer with the AWS Solutions Architect Associate and CompTIA Security+ certifications. I work mainly with AWS, Terraform and GitHub Actions, and I build my projects the way I would for a client: written as code, tested, costed and documented.
        My most recent project moved a containerised app from a single server to AWS with zero data loss, a keyless CI/CD pipeline and tested disaster recovery.
        

        
        
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ALX Cloud Computing Program | Remote",
        timeframe: "June 2025 - Dec 2025",
        role: "Cloud Computing Trainee (part-time programme)",
        achievements: [
          <>
           Designed segmented VPCs with public and private subnets, security groups and NACLs isolating compute and data tiers.
          </>,
          <>
           Automated multi-environment provisioning with Terraform modules and GitHub Actions.
          </>,
          <>
            Wrote least-privilege IAM policies with validation scripts; set up CloudWatch monitoring, alerting and incident runbooks for Docker apps.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
       
        ],
      },
      {
        company: "Elevate Labs | Remote",
        timeframe: "Sep 2025 - Nov 2025",
        role: "Cloud Computing Intern",
        achievements: [
         <>
            Automated configuration of IAM roles, security groups and VPC route tables with Python (boto3) and Terraform across multiple AWS accounts.
          </>,
          <>
            Built GitHub Actions pipelines that validated security group rules and tested infrastructure before deployment.
          </>,
          <>
            Audited EC2 and S3 for security issues and remediated over-privileged IAM policies using CloudTrail and IAM Access Analyzer.
          </>,
        ],
        images: [],
      },
      {
        company: "Media Monitoring Company | Nigeria",
        timeframe: "Jan 2022 - Oct 2022",
        role: "Information Technology Intern",
        achievements: [
         <>
            Automated multi-source media data extraction with Python and cut report turnaround from 48 to 24 hours through data validation checks and standard documentation (Python, Bash, PostgreSQL).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Federal University Of Petroleum Resources Effurun Warri Delta State",
        description: <>Studied Computer Science.</>,
      },
      
    ],
  },

  certifications: {
    display: true,
    title: "Certifications",
    certificates: [
      {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        date: "2025",
        status: "Certified",
        credentialId: "a5a7f2b8-e8fc-44a8-a28d-c7e28c874619", // Add once you pass
        credentialUrl: "https://www.credly.com/badges/a5a7f2b8-e8fc-44a8-a28d-c7e28c874619/public_url", // Add Credly link once you pass
        badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
        description: "Demonstrates expertise in designing distributed systems on AWS.",
      },
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2025",
        status: "Certified",
        credentialId: "02dc5546-e322-4ee5-a7f3-45e9032938f0",
        credentialUrl: "https://www.credly.com/badges/02dc5546-e322-4ee5-a7f3-45e9032938f0",
        badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
        description: "Validates foundational understanding of AWS Cloud.",
      },

      {
        name: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2024",
        status: "Certified",
        credentialId: "678f0869-b35b-40c5-9a8a-06d414297505",
        credentialUrl: "https://www.credly.com/badges/678f0869-b35b-40c5-9a8a-06d414297505",
        badge: "https://images.credly.com/size/160x160/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
        description: "Covers core security skills: risk management, threat detection and incident response.",
      },

      {
        name: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        date: "Planned 2026",
        status: "Planned",
        credentialId: "",
        credentialUrl: "",
        badge: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
        description: "Demonstrates proficiency in developing AWS-based applications.",
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Automation & Infrastructure as Code (IaC)",
        description: (
          <>Infrastructure written as code, so every environment can be rebuilt the same way and every change is reviewed.</>
        ),
        tags: [
          {
            name: "Terraform",
            icon: "terraform",
          },
           {
            name: "AWS CloudFormation",
            icon: "cloudformation",
          },
          {
            name: "GitHub Actions",
            icon: "github",
          },
          {
            name: "CI/CD Pipelines",
            icon: "CI/CD",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ]
      },
      {
        title: "Cloud Infrastructure (AWS)",
        description: (
          <>Networks, compute, storage and access control on AWS.</>
        ),
        tags: [
          {
            name: "VPC",
            icon: "aws",
          },
          {
            name: "S3",
            icon: "s3",
          },
          {
            name: "EC2",
            icon: "ec2",
          },
          {
            name: "IAM",
            icon: "iam",
          },
          {
            name: "Route 53",
            icon: "route53",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Languages & Scripting",
        description: (
          <>Scripts that automate AWS tasks, checks and deployments.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Bash/Shell",
            icon: "bash",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Containerization & Orchestration",
        description: (
          <>Packaging apps so they run the same on a laptop, in CI and on AWS.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Container Optimization",
            icon: "optimization",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
           {
            name: "Microservices Architecture",
            icon: "microservices",
          },
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about cloud and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects By ${person.name}`,
  description: `Cloud projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  display: false,
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

