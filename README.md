# Cybersecurity Portfolio — Karnelius Sindhu

A collection of hands-on labs and projects completed in ethical hacking and digital forensics coursework. Each lab documents real attack techniques, forensic analysis methods, and security findings using industry-standard tools.

---

## Repository Structure

```
cybersecurity-portfolio/
├── ethical-hacking/
│   ├── lab-10-metasploitable/
│   ├── lab-13-metasploit-framework/
│   ├── lab-21-dvwa-vulnerabilities/
│   ├── lab-23-wireless-exploitation/
│   ├── lab-network-analysis/
│   └── vm-project-privilege-escalation/
└── digital-forensics/
    ├── lab-3-m57-jean/
    ├── lab-4-registry-viewer/
    ├── lab-5-unix-forensics/
    └── lab-clampet-ftk/
```

---

## Ethical Hacking Labs

| Lab | Topic | Key Tools |
|-----|-------|-----------|
| [Lab 10](./ethical-hacking/lab-10-metasploitable/) | Metasploitable2 Enumeration & Password Cracking | Nmap, Nbtstat, John the Ripper |
| [Lab 13](./ethical-hacking/lab-13-metasploit-framework/) | Exploiting Samba via Metasploit Framework | Metasploit, Nmap, CVE-2007-2447 |
| [Lab 21](./ethical-hacking/lab-21-dvwa-vulnerabilities/) | DVWA Web Vulnerabilities | Burp Suite, DVWA, Manual Injection |
| [Lab 23](./ethical-hacking/lab-23-wireless-exploitation/) | Wireless Access Exploitation | Wireshark, Aircrack-ng |
| [Lab 15](./ethical-hacking/lab-network-analysis/) | Network Traffic Analysis | Wireshark, WebSocket Filters |
| [VM Project](./ethical-hacking/vm-project-privilege-escalation/) | Privilege Escalation to Root | FTP, John the Ripper, SSH, sudo |

## Digital Forensics Labs

| Lab | Topic | Key Tools |
|-----|-------|-----------|
| [Lab 3](./digital-forensics/lab-3-m57-jean/) | M57 Jean — Email & Insider Threat Investigation | FTK Imager, Kernel PST Viewer |
| [Lab 4](./digital-forensics/lab-4-registry-viewer/) | Windows Registry Forensics — Washer Image | FTK Imager, AccessData Registry Viewer |
| [Lab 5](./digital-forensics/lab-5-unix-forensics/) | Unix/Linux Disk Image Forensics | FTK Imager, JSON Editor |
| [Clampet](./digital-forensics/lab-clampet-ftk/) | FTK Full Case Investigation — Clampet Image | FTK, AccessData Registry Viewer |

---

## Skills Demonstrated

- Network scanning and enumeration (Nmap, Netdiscover, Nbtstat)
- Exploitation with Metasploit Framework (CVE-2007-2447 Samba)
- Web application attacks: SQLi, XSS, CSRF, Command Injection (DVWA)
- Wireless network analysis and WPA password cracking (Aircrack-ng)
- Offline password cracking (John the Ripper, rockyou.txt)
- Privilege escalation via misconfigured sudo
- Windows Registry forensics (SAM, SYSTEM, NTUSER.DAT, SOFTWARE)
- Email and browser artifact recovery (PST files, TypedURLs, RecentDocs)
- USB device history analysis (USBSTOR hive)
- Unix inode analysis and file system forensics (EXT3)
- Packet capture analysis (Wireshark, WebSocket, 802.11)
- Forensic case management (FTK case creation, hashing, filtering, reporting)

---

## Tools & Environment

| Category | Tools |
|----------|-------|
| Attacker OS | Kali Linux |
| Target Machines | Metasploitable2, Custom VMs (VMware) |
| Forensic Platform | AccessData FTK, FTK Imager, Registry Viewer |
| Network Analysis | Wireshark, Nmap, Netdiscover |
| Exploitation | Metasploit Framework, Burp Suite, Aircrack-ng |
| Password Cracking | John the Ripper, rockyou.txt |

---

> **Disclaimer:** All work was performed in isolated lab environments for educational purposes only. No unauthorized systems were accessed.
