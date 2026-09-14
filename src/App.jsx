import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  CircleCheckBig,
  Download,
  Github,
  Globe,
  LaptopMinimal,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Target,
  Wrench,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const heroNodes = [
  { label: 'IT Support', icon: Wrench, className: 'border-lime-300/30 bg-lime-400/10 text-lime-200' },
  { label: 'Systems', icon: LaptopMinimal, className: 'border-lime-300/30 bg-lime-400/10 text-lime-200' },
  { label: 'Networking', icon: Network, className: 'border-lime-300/30 bg-lime-400/10 text-lime-200' },
  { label: 'Cybersecurity', icon: ShieldCheck, className: 'border-lime-300/30 bg-lime-400/10 text-lime-200' },
];

const strengths = [
  {
    icon: Wrench,
    title: 'IT Support & Troubleshooting',
    text: 'Tier 1 and onsite support for 1,000+ users and 50+ distributed users across endpoints, printers, VoIP, business applications, and connectivity issues.',
  },
  {
    icon: LaptopMinimal,
    title: 'Systems & Administration',
    text: 'Experience provisioning users, enforcing RBAC, managing SaaS platforms, configuring endpoints, and improving workflows through automation and integrations.',
  },
  {
    icon: Network,
    title: 'Networking',
    text: 'Practical experience with TCP/IP, DNS, DHCP, VLANs, Wireshark, wireless spot checks, MDF/IDF troubleshooting, and GNS3 network design.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    text: "Master's degree in Cybersecurity with a foundation in IAM, security controls, vulnerability analysis, threat modeling, NIST CSF/RMF, and MITRE ATT&CK.",
  },
];

const experiences = [
  {
    title: 'IT Support Technician',
    company: 'Rocketship Public Schools',
    type: "Feb '26 — May '26 · Washington, DC",
    bullets: [
      'Delivered onsite IT support across Rocketship DC campuses for 1,000+ users.',
      'Troubleshot and coordinated repairs for Chromebooks, MacBooks, iPads, printers, copiers, projectors, Apple TVs, and VoIP phones.',
      'Configured and secured MacBooks with Jamf and FileVault, reimaged MacBooks, prepared iPads with Apple Configurator, and powerwashed Chromebooks.',
      'Supported Papercut print servers, email-to-scan, IP printing, and TCP/IP configuration.',
      'Performed wireless spot checks and investigated weak signal strength, interference, connectivity, and performance issues.',
      'Troubleshot MDF and IDF/RDF network outages and escalated complex incidents with documented findings.',
      'Maintained Jira asset records, device assignments, serial numbers, repair documentation, and SLA standards.',
      'Contributed networking knowledge articles in Jira and Confluence covering DHCP, DNS, TCP/IP, and the OSI model.',
    ],
  },
  {
    title: 'Tech Support',
    company: 'CNT Logistic LLC',
    type: "Feb '25 — Feb '26 · Waterbury, CT",
    bullets: [
      'Provided Tier 1 technical support for 50+ users across US and international locations in a Windows environment.',
      'Configured and deployed Windows workstations, software, and user accounts for new employees.',
      'Administered GoToConnect and RingCentral user accounts, extensions, call routing, and call quality assurance.',
      'Supported Central Dispatch, BATS CRM, and HelpScout by resolving access, software, and connectivity issues.',
      'Managed account provisioning and permissions while enforcing appropriate access controls.',
      'Logged and resolved ServiceNow tickets with accurate documentation and SLA tracking.',
      'Built internal knowledge resources, standardized HelpScout responses, and trained users on business platforms.',
      'Troubleshot office internet and wireless issues and escalated complex outages to the ISP with detailed findings.',
    ],
  },
  {
    title: 'Zoho CRM Administrator & Automation Specialist',
    company: 'Levoyage Movers and Packers',
    type: "Apr '21 — Jul '24 · Dubai, UAE (Remote)",
    bullets: [
      'Administered a cloud-based Zoho CRM environment for 50+ users through provisioning, RBAC, and permission management.',
      'Increased operational efficiency by 35% through custom layouts, dashboards, reports, and automated workflows.',
      'Reduced manual workload by 80% using Zoho Deluge scripts for lead management, notifications, and task assignments.',
      'Reduced manual call logging by 90% by integrating CallGear VoIP with Zoho CRM using REST APIs and webhooks.',
      'Improved customer response time by 30% through Woztell and Zoho Cliq WhatsApp Business integration.',
      'Implemented Stripe billing integration and secure third-party connections using REST APIs, OAuth, API keys, and webhooks.',
      'Developed executive dashboards for call activity, conversion rates, sales KPIs, and agent performance.',
    ],
  },
];

const projects = [
  {
    title: 'Cybersecurity Risk Assessment',
    subtitle: 'Cybersecurity GRC · Transportation Company Risk Assessment',
    description:
      'Conducted a cybersecurity risk assessment using SimpleRisk to identify, document, assess, and prioritize security risks and recommend appropriate mitigation strategies.',
    actions: ['Cybersecurity GRC', 'Risk Assessment', 'SimpleRisk', 'Security Controls', 'Documentation'],
    link: 'https://github.com/ksindhu1s/riskguard-cnt-logistics-grc.git',
    thumbnail: '/project-thumbnails/risk-assessment.jpeg',
    thumbnailAlt: 'Risk assessment documents and planning workspace',
  },
  {
    title: 'Risk Management Plan',
    subtitle: 'GRC governance and enterprise risk planning',
    description:
      'Developed a structured risk management plan focused on identifying critical assets, evaluating controls, and aligning mitigation strategies with business and operational risk priorities.',
    actions: ['Cybersecurity GRC', 'Risk Management', 'Governance', 'Control Review', 'Prioritization'],
    link: 'https://github.com/ksindhu1s/risk-management-plan.git',
    thumbnail: '/project-thumbnails/risk-management.jpeg',
    thumbnailAlt: 'Team reviewing a structured risk management plan',
  },
  {
    title: 'Vulnerability Assessment',
    subtitle: 'Security analysis and risk prioritization',
    description:
      'Performed vulnerability identification and network enumeration using Nmap to assess exposures, prioritize risks, and recommend remediation actions.',
    actions: ['Vulnerability Identification', 'Network Enumeration', 'Nmap', 'Security Analysis', 'Risk Prioritization'],
    link: 'https://github.com/ksindhu1s/cybersecurity-portfolio/tree/3b4a9d6dd109877c7c653174e62133d37b570a49/ethical-hacking/lab-21-dvwa-vulnerabilities',
    thumbnail: '/project-thumbnails/vulnerability-assessment.jpeg',
    image: '/labs/dvwa-csrf.jpeg',
    imageAlt: 'DVWA cross-site request forgery security lab',
  },
  {
    title: 'Virtual Machine Privilege Escalation Project',
    subtitle: 'Linux privilege escalation and root access assessment',
    description:
      'Completed a controlled virtual-machine security project covering service enumeration, anonymous FTP access, hash extraction, password cracking, SSH access, sudo enumeration, and escalation to root.',
    actions: ['Kali Linux', 'Nmap', 'FTP', 'John the Ripper', 'SSH', 'Sudo'],
    link: 'https://github.com/ksindhu1s/cybersecurity-portfolio/tree/3b4a9d6dd109877c7c653174e62133d37b570a49/ethical-hacking/vm-project-privilege-escalation',
    image: '/labs/privilege-escalation.jpeg',
    imageAlt: 'Privilege escalation ethical hacking lab evidence',
  },
  {
    title: 'Samba Exploitation & Metasploit Framework Project',
    subtitle: 'Controlled vulnerability exploitation and post-exploitation analysis',
    description:
      'Investigated a vulnerable Samba service in an isolated environment using Nmap and Metasploit, documenting the vulnerability, exploitation workflow, access obtained, and security remediation considerations.',
    actions: ['Metasploit', 'Samba', 'Nmap', 'CVE-2007-2447', 'Vulnerability Analysis'],
    link: 'https://github.com/ksindhu1s/cybersecurity-portfolio/tree/3b4a9d6dd109877c7c653174e62133d37b570a49/ethical-hacking/lab-13-metasploit-framework',
    image: '/labs/metasploit-lab.png',
    imageAlt: 'Metasploit framework project evidence',
  },
  {
    title: 'GNS3 Multi-Floor Network Topology',
    subtitle: 'Network design and infrastructure troubleshooting',
    description:
      'Designed and documented a multi-floor network topology using GNS3, applying TCP/IP, VLAN, DHCP, DNS, routing, and packet-analysis concepts to a realistic environment.',
    actions: ['GNS3', 'Network Design', 'VLANs', 'TCP/IP', 'Wireshark'],
    link: 'https://github.com/ksindhu1s/gns3-network-topology.git',
    thumbnail: '/project-thumbnails/gns3-network.jpeg',
    thumbnailAlt: 'Wireless networking router device',
  },
];

const caseStudies = {
  'Cybersecurity Risk Assessment': {
    objective: 'Identify and prioritize cybersecurity risks for a transportation environment.',
    environment: 'SimpleRisk with documented assets, threats, controls, and risk records.',
    approach: 'Mapped risks to affected assets, evaluated control coverage, prioritized exposure, and documented practical mitigation actions.',
    findings: 'The assessment produced a structured risk register that connected technical concerns to ownership, priority, and remediation planning.',
    impact: 'Gives stakeholders a clearer basis for deciding which security improvements should be addressed first.',
    remediation: 'Prioritize controls, assign accountable owners, track treatment decisions, and verify remediation progress.',
  },
  'Risk Management Plan': {
    objective: 'Build a repeatable risk-management approach for evaluating assets, threats, controls, and business priorities.',
    environment: 'A documented enterprise risk-planning scenario aligned to governance and security-control concepts.',
    approach: 'Defined critical assets, considered threat scenarios, reviewed controls, and connected risk prioritization to practical treatment decisions.',
    findings: 'The plan organizes security work around business impact instead of treating every technical issue as equally urgent.',
    impact: 'Helps teams communicate security priorities clearly and make defensible decisions about remediation effort.',
    remediation: 'Review the plan periodically, update risk assumptions, and measure control improvement over time.',
  },
  'Vulnerability Assessment': {
    objective: 'Assess a vulnerable web application and document exploitable conditions in a controlled environment.',
    environment: 'DVWA and supporting security tools in an isolated lab environment.',
    approach: 'Combined enumeration, manual validation, and web-security testing to reproduce issues and record evidence.',
    findings: 'The project documents web-application weaknesses including request-forgery and input-validation scenarios.',
    impact: 'Demonstrates how an exposed web weakness can affect application integrity and user trust if left unaddressed.',
    remediation: 'Apply server-side validation, anti-CSRF protections, secure configuration, least privilege, and regression testing.',
  },
  'Virtual Machine Privilege Escalation Project': {
    objective: 'Investigate how an attacker could move from initial access to root in a controlled virtual machine.',
    environment: 'Kali Linux and a vulnerable target VM using FTP, SSH, password-cracking, and sudo enumeration tools.',
    approach: 'Enumerated services, reviewed exposed files, extracted hashes, validated credentials, established SSH access, and assessed sudo permissions.',
    findings: 'The documented attack chain shows how weak service configuration and excessive privileges can compound into full system compromise.',
    impact: 'Connects individual misconfigurations to the operational risk of unauthorized administrative control.',
    remediation: 'Disable unnecessary services, remove anonymous access, enforce strong credentials, restrict sudo rules, and monitor privileged activity.',
  },
  'Samba Exploitation & Metasploit Framework Project': {
    objective: 'Assess a vulnerable Samba service and document the exploitation path in an isolated environment.',
    environment: 'A controlled target using Nmap for discovery and Metasploit for validation of the Samba vulnerability.',
    approach: 'Enumerated exposed services, identified the relevant Samba weakness, validated exploitation, and recorded remediation considerations.',
    findings: 'The assessment demonstrates how an outdated or vulnerable network service can provide an attacker a path to unauthorized access.',
    impact: 'Shows why service inventory, patching, segmentation, and exposure reduction matter to security operations.',
    remediation: 'Patch or remove vulnerable Samba versions, restrict network exposure, harden configuration, and monitor exploitation attempts.',
  },
  'GNS3 Multi-Floor Network Topology': {
    objective: 'Design and document a multi-floor network that can be reasoned about, tested, and troubleshot.',
    environment: 'GNS3, Cisco IOS concepts, VLANs, routing, DHCP, DNS, TCP/IP, and packet analysis.',
    approach: 'Built a segmented topology, applied addressing and network services, and used packet-level reasoning to validate traffic behavior.',
    findings: 'The topology makes routing, switching, segmentation, and service dependencies visible for troubleshooting and security review.',
    impact: 'Demonstrates infrastructure fluency that supports stronger network-security and incident-analysis decisions.',
    remediation: 'Maintain segmentation, document dependencies, restrict management access, and continuously validate network controls.',
  },
};

const skillGroups = [
  {
    title: 'IT Support & Systems Administration',
    list: ['IT Support', 'Technical Support', 'Windows', 'Windows Server', 'Active Directory', 'Windows MMC', 'Hardware Troubleshooting', 'Software Troubleshooting', 'Endpoint Management', 'Jamf', 'FileVault', 'Apple Configurator', 'Jira', 'Confluence', 'ServiceNow', 'Okta', 'VMware', 'Asset Management', 'SLA Management'],
  },
  {
    title: 'Networking & Infrastructure',
    list: ['TCP/IP', 'OSI Model', 'DNS', 'DHCP', 'VLANs', 'IPv4/IPv6', 'Routing & Switching', 'Cisco IOS', 'Wireshark', 'GNS3', 'Network Design', 'Wireless Troubleshooting', 'Network Troubleshooting', 'VoIP'],
  },
  {
    title: 'Cybersecurity, Ethical Hacking & GRC',
    list: ['Cybersecurity', 'Vulnerability Assessment', 'Network Security', 'Ethical Hacking', 'Nmap', 'Metasploit', 'Burp Suite', 'DVWA', 'Samba', 'CVE-2007-2447', 'Privilege Escalation', 'Digital Forensics', 'FTK', 'IAM', 'RBAC', 'GRC', 'Risk Assessment', 'SimpleRisk', 'Security Controls', 'Threat Modeling', 'NIST CSF', 'NIST RMF', 'MITRE ATT&CK'],
  },
  {
    title: 'Programming, Automation & SaaS',
    list: ['PowerShell', 'Python 3', 'Bash', 'SQL', 'Zoho Deluge', 'SaaS Administration', 'REST APIs', 'OAuth', 'Webhooks', 'Workflow Automation', 'VoIP Administration'],
  },
];

const credentials = [
  "Master's in Cybersecurity · Hood College · Frederick, MD",
  'Foundations of Cybersecurity · Google',
  'Advanced Cybersecurity Management Training · ACSMI · Feb 2025',
  'Telecommunication and Networking · Hood College',
  'Fundamentals of IT · PJ Cyber-Security School',
  'IEEE Professional Membership',
];

const credentialLinks = {
  'Advanced Cybersecurity Management Training · ACSMI · Feb 2025': {
    badge: 'https://hood.achievementstudio.com/portfolio/1701270898/badgeview/2020481582',
    verification: 'https://credsverse.com/credentials/288d2551-f0c1-4075-8b9e-6c7c113de63d?preview=1',
  },
  'Telecommunication and Networking · Hood College': {
    badge: 'https://milestone.campuslabs.com/api/v20/assertion/40571194/',
    verification: 'https://milestone.campuslabs.com/api/v20/assertion/40571194/',
  },
  'Foundations of Cybersecurity · Google': {
    badge: 'https://coursera.org/share/60ad3e5c05e45afaebd82a865d1a2990',
    verification: 'https://coursera.org/share/60ad3e5c05e45afaebd82a865d1a2990',
  },
  'Fundamentals of IT · PJ Cyber-Security School': {
    badge: 'https://www.pjcourses.com/certificate/11046276-MLHM95HC3',
    verification: 'https://www.pjcourses.com/certificate/11046276-MLHM95HC3',
  },
  'IEEE Professional Membership': {
    badge: '/IEEE_Membership_Certificate.pdf',
    verification: 'https://www.ieee.org/profile/membershipandsubscription/downloadCertificate.html',
    badgeLabel: 'View certificate',
    verificationLabel: 'IEEE verification',
  },
};

const credentialImages = {
  'Telecommunication and Networking · Hood College': 'https://milestone.campuslabs.com/milestone/common/baked_images/ks37/3a8951e7-745c-4ff0-b78c-208fa35fc668.png',
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

function BrandMark() {
  return (
    <img
      src="/karnelius_sindhu_logo.jpg"
      alt="Karnelius Sindhu logo"
      className="h-12 w-auto max-w-[260px] origin-left scale-110 object-contain sm:scale-125"
    />
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLaunching, setIsLaunching] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const launchTimer = window.setTimeout(() => setIsLaunching(false), 700);

    return () => window.clearTimeout(launchTimer);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLaunching && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080d0f]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            role="status"
            aria-label="Loading Karnelius Sindhu portfolio"
          >
            <div className="w-[min(18rem,80vw)] text-center">
              <div className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,0.9)]" />
                Systems online
              </div>
              <div className="h-px overflow-hidden bg-slate-700">
                <motion.div
                  className="h-full origin-left bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,0.9)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">Karnelius Sindhu · IT + Security</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#101416]/95 backdrop-blur-xl">
        <nav className="container-shell flex items-center justify-between py-4">
          <a href="#home" className="relative z-10 flex shrink-0 items-center gap-3 text-sm font-semibold tracking-[0.2em] text-lime-300 uppercase">
            <BrandMark />
          </a>

          <div className="relative z-20 hidden items-center gap-5 bg-[#101416]/95 pl-3 lg:gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full border border-lime-300/40 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-200 transition hover:border-lime-200 hover:bg-lime-400/20 md:inline-flex">
              Contact
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
            <div className="container-shell flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 text-sm text-slate-300 transition hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="container-shell grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-lime-300/30 bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
              Cybersecurity & IT Professional
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              Cybersecurity & IT Professional
            </h1>
            <h2 className="mt-4 text-xl font-medium text-slate-300 md:text-2xl">
              Systems-minded. Security-focused. Evidence-driven.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              I troubleshoot systems, investigate technical problems, and assess security risk across endpoints, networks, infrastructure, and controlled cybersecurity environments. My path connects IT support, systems administration, networking, GRC, and security operations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/80">
                Let&apos;s Connect
              </a>
              <a href="/Karnelius_Sindhu_Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-lime-300/40 bg-lime-400/10 px-5 py-3 text-sm font-semibold text-lime-200 transition hover:border-lime-200 hover:bg-lime-400/20">
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              <div className="absolute inset-0 rounded-[2rem] bg-lime-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-5 shadow-glow">
                <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
                  <span>Systems / In View</span>
                  <span>01 / 04</span>
                </div>

                <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] border border-slate-700/60 bg-[radial-gradient(circle_at_center,_rgba(190,242,100,0.18),_rgba(15,23,42,0.95)_40%,_rgba(2,6,23,1)_100%)]">
                  <motion.div
                    className="absolute inset-[9%] rounded-full border border-dashed border-lime-300/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute inset-[22%] rounded-full border border-lime-300/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute left-0 right-0 h-px bg-lime-300/70 shadow-[0_0_16px_rgba(190,242,100,0.9)]"
                    animate={{ top: ['12%', '88%', '12%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {[
                    { top: '18%', left: '18%' },
                    { top: '28%', left: '82%' },
                    { top: '76%', left: '22%' },
                    { top: '72%', left: '78%' },
                  ].map((point, index) => (
                    <motion.span
                      key={`${point.top}-${point.left}`}
                      className="absolute h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,0.9)]"
                      style={point}
                      animate={{ scale: [1, 1.8, 1], opacity: [0.35, 1, 0.35] }}
                      transition={{ duration: 2.4, delay: index * 0.45, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative h-52 w-52 rounded-full border border-lime-300/20"
                      animate={{ scale: [1, 1.025, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-600/80" />
                      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-lime-300/70 bg-lime-400/10 shadow-[0_0_25px_rgba(190,242,100,0.6)]">
                        <img src="/profile.jpeg" alt="Professional portrait" className="block h-full w-full object-cover object-center" />
                      </div>

                      {heroNodes.map((node, index) => {
                        const angle = (index * 90 - 45) * (Math.PI / 180);
                        const radius = 160;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        const Icon = node.icon;

                        return (
                          <motion.div
                            key={node.label}
                            className="absolute left-1/2 top-1/2"
                            animate={{ x, y, scale: [1, 1.06, 1] }}
                            transition={{ duration: 8 + index, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                            style={{ marginLeft: '-40px', marginTop: '-32px' }}
                          >
                            <div className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium ${node.className}`}>
                              <Icon size={14} /> {node.label}
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-slate-800/80 bg-slate-900/40">
          <div className="container-shell py-6 text-sm text-slate-300">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <span className="min-w-0 break-words font-medium text-xs uppercase leading-5 tracking-[0.16em] text-slate-400 sm:text-sm sm:tracking-[0.25em]">IT SUPPORT · SYSTEMS · SECURITY · OPEN TO RELOCATION</span>
              <span className="inline-flex items-center gap-2 text-slate-300"><Target size={14} /> Remote + On-site</span>
            </div>
          </div>
        </section>

        <motion.section {...fadeUp} id="why" className="container-shell py-20">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">Why hire me</p>
            <h3 className="section-title">What I Bring to the Team</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-panel p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-lime-300/30 bg-lime-400/10 text-lime-200">
                  <Icon size={18} />
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">{title}</h4>
                <p className="text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="approach" className="container-shell py-20">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">How I Approach Security</p>
            <h3 className="section-title">Understand the system. Prove the finding. Make the next step clear.</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['01', 'Understand', 'Learn the environment, users, assets, and business requirement before making assumptions.'],
              ['02', 'Investigate', 'Gather evidence through logs, tickets, packet data, configuration review, and controlled testing.'],
              ['03', 'Validate', 'Reproduce the behavior safely so the finding is explainable, repeatable, and properly scoped.'],
              ['04', 'Assess Risk', 'Connect technical severity to exposure, business impact, control gaps, and operational priority.'],
              ['05', 'Remediate', 'Recommend practical improvements that teams can implement, verify, and maintain.'],
              ['06', 'Document', 'Communicate the evidence, decision, and next action clearly for technical and non-technical audiences.'],
            ].map(([number, title, text]) => (
              <div key={number} className="glass-panel p-6">
                <span className="text-sm font-semibold tracking-[0.2em] text-lime-300">{number}</span>
                <h4 className="mt-4 text-xl font-semibold text-white">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="about" className="container-shell grid gap-8 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Why Cybersecurity</p>
            <h3 className="section-title">Curiosity became a method.</h3>
          </div>
          <div className="glass-panel p-8">
            <p className="text-lg leading-8 text-slate-200">I have always been drawn to understanding why technology behaves the way it does: why a user cannot connect, how a system is configured, where a weakness begins, and what evidence can prove it.</p>
            <p className="mt-5 leading-7 text-slate-300">That curiosity led from IT support into systems, networking, automation, and cybersecurity. Today I bring an operations mindset to security work: troubleshoot carefully, investigate methodically, understand risk, and leave behind documentation that helps a team act.</p>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="focus" className="border-y border-slate-800/80 bg-slate-900/30">
          <div className="container-shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-kicker">Currently Focused On</p>
              <h3 className="text-2xl font-bold text-white">Building toward security operations and engineering.</h3>
            </div>
            <div className="flex max-w-xl flex-wrap gap-2">
              {['Security Operations', 'Vulnerability Assessment', 'Network Security', 'GRC', 'IAM', 'Security Engineering'].map((focus) => (
                <span key={focus} className="rounded-full border border-lime-300/20 bg-lime-400/5 px-3 py-1.5 text-sm text-lime-200">{focus}</span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="experience" className="container-shell py-20">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">Experience</p>
            <h3 className="section-title">Technical support experience built around real user and system needs.</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.article key={exp.title} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="glass-panel p-6 md:p-8">
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">{exp.type}</p>
                    <h4 className="mt-2 text-2xl font-bold text-white">{exp.title}</h4>
                  </div>
                  <div className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-sm text-slate-300">{exp.company}</div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.slice(0, 6).map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-slate-300">
                      <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-lime-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="projects" className="container-shell py-20">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">Featured Projects</p>
            <h3 className="section-title">Practical projects that show problem-solving, risk awareness, and technical depth.</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="glass-panel flex h-full flex-col p-6">
                {(project.thumbnail || project.image) && (
                  <figure className="mb-5 overflow-hidden rounded-xl border border-lime-300/20 bg-slate-950/60">
                    <img
                      src={project.thumbnail || project.image}
                      alt={project.thumbnailAlt || project.imageAlt || `${project.title} project thumbnail`}
                      loading="lazy"
                      onError={(event) => {
                        if (project.image && event.currentTarget.src !== new URL(project.image, window.location.origin).href) {
                          event.currentTarget.src = project.image;
                        }
                      }}
                      className="h-44 w-full object-cover object-center opacity-90 transition duration-500 hover:scale-105 hover:opacity-100"
                    />
                    <figcaption className="border-t border-slate-800/80 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Project thumbnail</figcaption>
                  </figure>
                )}
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Project</p>
                <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{project.subtitle}</p>
                <p className="mt-5 flex-1 text-base leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.actions.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button type="button" onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-2 text-sm font-semibold text-lime-300 transition hover:text-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300">
                    View Case Study <ChevronRight size={16} />
                  </button>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300">
                    View GitHub <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="skills" className="container-shell py-20">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">Skills</p>
            <h3 className="section-title">Focused capabilities aligned with IT support and technical operations roles.</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-panel p-6">
                <h4 className="mb-4 text-lg font-semibold text-white">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.list.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="credentials" className="container-shell py-20">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">Education & Credentials</p>
            <h3 className="section-title">Security training grounded in systems, networks, and risk.</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {credentials.map((credential) => (
              <div key={credential} className="glass-panel flex items-center gap-3 p-5 text-slate-200">
                {credentialImages[credential] && (
                  <img src={credentialImages[credential]} alt="Telecommunication and networking badge" loading="lazy" className="h-12 w-12 shrink-0 rounded-lg object-contain" />
                )}
                <CircleCheckBig size={18} className="shrink-0 text-lime-300" />
                {credentialLinks[credential] ? (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span>{credential}</span>
                    <span className="flex gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
                      <a href={credentialLinks[credential].badge} target="_blank" rel="noopener noreferrer" className="text-lime-300 transition hover:text-lime-200">{credentialLinks[credential].badgeLabel || 'View badge'}</a>
                      <a href={credentialLinks[credential].verification} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition hover:text-lime-300">{credentialLinks[credential].verificationLabel || 'Verify'}</a>
                    </span>
                  </div>
                ) : (
                  <span>{credential}</span>
                )}
              </div>
            ))}
          </div>

          <a
            href="https://cdn.certifier.io/cfa0371f-bc25-4ad1-b10d-e1771740ed73/credentials/01jrp587jweaskdm418m5k0n78/designs/01jrp4n65at2110xym8f631x5z/oEGMsdG4aA.png"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex flex-col gap-5 rounded-2xl border border-lime-300/20 bg-slate-900/60 p-5 transition hover:border-lime-300/50 sm:flex-row sm:items-center"
          >
            <img
              src="https://cdn.certifier.io/cfa0371f-bc25-4ad1-b10d-e1771740ed73/credentials/01jrp587jweaskdm418m5k0n78/designs/01jrp4n65at2110xym8f631x5z/oEGMsdG4aA.png"
              alt="Professional membership credential"
              loading="lazy"
              className="h-28 w-28 rounded-xl object-contain"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Professional membership</p>
              <h4 className="mt-2 text-xl font-semibold text-white">Verified professional membership</h4>
              <p className="mt-2 text-sm text-slate-400">Open the membership credential image to review the official record.</p>
            </div>
          </a>

          <div className="mt-6 glass-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Publication</p>
            <h4 className="mt-2 text-xl font-semibold text-white">Ransomware Resilience: Strategies for Mitigating Cyber Threats in Government and Private Sectors</h4>
            <p className="mt-2 text-slate-400">Research focused on how AI and machine learning models can help identify ransomware attacks.</p>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="resume" className="container-shell py-20">
          <div className="glass-panel flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-kicker">Resume</p>
              <h3 className="section-title">Interested in working together?</h3>
              <p className="mt-3 max-w-xl text-slate-300">I&apos;m currently open to opportunities in IT Support, Technical Support, Systems Administration, Network Administration, and Cybersecurity.</p>
            </div>
            <a href="/Karnelius_Sindhu_Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="contact" className="container-shell py-20">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">Contact</p>
            <h3 className="section-title">Let&apos;s Connect</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a href="mailto:karneliussindhu6329@gmail.com" className="glass-panel flex min-w-0 items-center gap-4 p-5 transition hover:border-lime-300/40">
              <Mail className="shrink-0 text-lime-300" />
              <span className="min-w-0 break-all text-slate-200">karneliussindhu6329@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/karnelius-sindhu-8196b11bb" target="_blank" rel="noopener noreferrer" className="glass-panel flex items-center gap-4 p-5 transition hover:border-lime-300/40">
              <Globe className="shrink-0 text-lime-300" />
              <span className="text-slate-200">LinkedIn</span>
            </a>
            <a href="https://github.com/ksindhu1s" target="_blank" rel="noopener noreferrer" className="glass-panel flex items-center gap-4 p-5 transition hover:border-lime-300/40">
              <Github className="shrink-0 text-lime-300" />
              <span className="text-slate-200">GitHub</span>
            </a>
          </div>
        </motion.section>
      </main>

      <AnimatePresence>
        {selectedProject && caseStudies[selectedProject.title] && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-lime-300/20 bg-slate-900 p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Case Study</p>
                  <h2 id="case-study-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl">{selectedProject.title}</h2>
                </div>
                <button type="button" onClick={() => setSelectedProject(null)} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-lime-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" aria-label="Close case study">
                  <X size={18} />
                </button>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {Object.entries(caseStudies[selectedProject.title]).map(([label, text]) => (
                  <div key={label} className="border-l border-lime-300/30 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">{label.replace('_', ' ')}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-800 pt-6">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-lime-300">View on GitHub <ChevronRight size={16} /></a>
                <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300">Close</button>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-slate-800/80 py-8">
        <div className="container-shell flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Karnelius Sindhu</p>
          <p>Cybersecurity and IT Support Specialist</p>
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;
