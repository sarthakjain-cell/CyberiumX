# CyberiumX Team Review & Changes Report

**Date:** October 18, 2026  
**Audience:** Damini & CyberiumX Review Team  
**Status:** Completed & Production Verified  

---

## 1. Background Removal on Images
- **Feedback:** *"Tumne ye images as it is lga di .. iska background to remove kro .."*
- **Root Cause:** Course cards previously used raw JPEGs/PNGs containing solid white rectangular backgrounds (`CCNA.jpg`, `ethical-hacking.jpg`) housed in `.centerIconBox` with `background: #ffffff`.
- **Resolution:**
  - Extracted and integrated the official, authentic vector SVGs and transparent PNG assets directly from `cyberiumx.com`:
    - `azure.png` (Transparent PNG)
    - `aws.svg` (Transparent Vector SVG)
    - `bug-bounty.svg` (Transparent Vector SVG)
    - `ccna.svg` (Transparent Vector SVG)
    - `ceh.svg` (Transparent Vector SVG)
    - `ejpt.svg` (Transparent Vector SVG)
    - `ethical-hacking.svg` (Transparent Vector SVG)
    - `kali.svg` (Transparent Vector SVG)
    - `networking.svg` (Transparent Vector SVG)
    - `oscp.svg` (Transparent Vector SVG)
    - `vapt.svg` (Transparent Vector SVG)
  - Replaced the harsh solid `#ffffff` container boxes with sleek, dark cyber glassmorphic badge containers (`background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px);`) across `CoursesGrid.module.css`, `CoursesPreview.tsx`, `GlobalServicesClient.tsx`, and `MyCourses.module.css`.
  - The icons now float seamlessly into the dark theme with zero raw white border artifacts.

---

## 2. Payment Gateway Logos Visibility
- **Feedback:** *"Payment gateways ke logo visible ni ha .. black par dark blue kese visible hga"*
- **Root Cause:** Razorpay (`#0c2340`), SBI (`#280071`), and PayPal (`#003087`) use deep navy/dark blue brand colors. Placed directly over the dark footer (`#0b0d14`), they were practically invisible.
- **Resolution:**
  - Housed each payment gateway logo inside a dedicated, high-contrast, clean white pill badge (`background: #ffffff; padding: 6px 16px; border-radius: 8px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4); height: 42px;`).
  - Added official verified badges for:
    - **Razorpay** (Secure Checkout)
    - **PayPal** (International Payments)
    - **State Bank of India (SBI)** (Direct NetBanking & Wire)
    - **UPI** (Instant Bharat Interface Payments)
    - **Visa** (Global Credit & Debit)
    - **Mastercard** (Global Credit & Debit)
  - All dark blue logos are now 100% crisp, readable, and clearly legible with stark contrast.

---

## 3. Course Content & Curriculum Directly from Existing Website
- **Feedback:** *"You have taken data on your own .. you have to take data from the existing website .. course content n all .. this is the riview of the yestersay work form theteeam"*
- **Root Cause:** Previously, dummy/placeholder titles, mismatched hour counts (e.g. CEH listed as 80h instead of 50h, CCNA listed as 50h instead of 40h), and placeholder curricula were used.
- **Resolution:**
  - Scraped and extracted the authentic course outlines directly from `https://cyberiumx.com/provided-course/<slug>/` for all 12 official tracks:
    1. **Certified Ethical Hacker CEHv13 AI** — 50 Hours, 20 detailed Chapters (Introduction to Cryptography, System Hacking, Malware, Sniffing, Social Engineering, Web Server & Apps, Wireless, IoT/OT, etc.)
    2. **CCNA Course** — 40 Hours, 7 Chapters (Networking Fundamentals, Network Access & Switching, IP Connectivity, Wireless Networks, IP Services, Security Fundamentals, Network Automation)
    3. **OSCP+ Course** — 100 Hours, 26 Chapters (Penetration Testing Lifecycle, Passive/Active Recon, Buffer Overflows, Active Directory Attacks, Pivoting, etc.)
    4. **Microsoft Azure Course** — 40 Hours, 12 Chapters (Azure Core, IAM, VNet, ARM, Compute, Storage, Governance, etc.)
    5. **AWS Penetration Testing & Security** — 30 Hours, 12 Chapters (AWS Security Basics, IAM exploitation, S3 bucket attacks, EC2/Lambda privilege escalation, CloudTrail bypasses, etc.)
    6. **Amazon Web Services (AWS) Course** — 30 Hours, 18 Chapters (Cloud Fundamentals, Global Infrastructure, Core Compute, Storage & VPC, etc.)
    7. **eJPTv2 Course** — 50 Hours, 11 Chapters (Penetration Testing Methodology, Reconnaissance, Scanning, Vulnerability Assessment, System Exploitation, Web Testing, etc.)
    8. **Ethical Hacking** — 40 Hours, 16 Chapters (Core Offensive Security, Kali Setup, OSINT, Scanning, Metasploit, Password Cracking, etc.)
    9. **Kali Linux Course** — 20 Hours, 14 Chapters (Linux Kernel, Bash Scripting, Package Management, Networking Utilities, Toolchains, etc.)
    10. **Networking For Ethical Hackers Course** — 20 Hours, 9 Chapters (OSI & TCP/IP models, Packet Anatomy, Routing Protocols, Subnetting, Wireshark, etc.)
    11. **Bug Bounty Course** — 40 Hours, 16 Chapters (Responsible Disclosure, Bug Bounty Platforms, OWASP Top 10, IDOR, SSRF, XSS, Reporting, etc.)
    12. **VAPT** — 40 Hours, 11 Chapters (Vulnerability Assessment Lifecycle, Automated vs. Manual Testing, Exploitation, Compliance & Remediation, etc.)
  - Synchronized both `src/data/courses.ts` and `src/data/curriculums.ts` to reflect the exact syllabus, chapters, and practicals from `cyberiumx.com`.

---

## 4. Payment Flow & Immediate Redirection
- Razorpay payments immediately trigger a celebration modal, write enrollment cookies and localStorage caches, sync asynchronously to Supabase PostgreSQL, and auto-redirect the student directly to `/provided-course/[courseSlug]/learn?enrolled=true`.
- The user is never left hanging without an instant visual response.
