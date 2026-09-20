"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./InteractiveTerminal.module.css";

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<{cmd: string, out: string}[]>([
    { cmd: "cyberium --version", out: "CyberiumX Advanced Terminal v2.1.0\nReady for input. Type 'help' for available commands." }
  ]);
  const [input, setInput] = useState("");
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (history.length > 1 && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const cmd = input.trim().toLowerCase();
      let out = "";

      if (cmd === "help") {
        out = "Available commands:\n- whoami\n- scan network\n- hack mainframe\n- enroll\n- courses\n- services\n- blog";
      } else if (cmd === "whoami") {
        out = "guest_user (Clearance Level: 0)\nRecommendation: Enroll in CyberiumX to upgrade clearance.";
      } else if (cmd === "scan network") {
        out = "Scanning...\n[+] 192.168.1.1 (Gateway)\n[+] 192.168.1.104 (Target)\nWarning: Target has open ports. Skill required to exploit.";
      } else if (cmd === "hack mainframe") {
        out = "ACCESS DENIED.\nReason: Insufficient skill level.\nFix: Type 'enroll' to learn how to bypass this.";
      } else if (cmd === "enroll" || cmd === "courses") {
        out = "Initializing routing protocol...\nRedirecting to courses...";
        setTimeout(() => {
          window.location.href = "/courses";
        }, 1500);
      } else if (cmd === "services") {
        out = "Accessing service catalog...\nRedirecting to services...";
        setTimeout(() => {
          window.location.href = "/services";
        }, 1500);
      } else if (cmd === "blog") {
        out = "Accessing secure logs...\nRedirecting to blog...";
        setTimeout(() => {
          window.location.href = "/blog";
        }, 1500);
      } else if (cmd === "") {
        out = "";
      } else {
        out = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
      }

      setHistory(prev => [...prev, { cmd: input, out }]);
      setInput("");
    }
  };

  return (
    <section className={`container ${styles.terminalSection}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Live Cyber <span className={styles.highlight}>CLI Terminal</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Test your clearance level, scan simulated targets, and navigate the platform in real time.
        </p>
      </div>

      <div className={styles.terminalContainer}>
        <div className={styles.terminalHeader}>
          <div className={styles.trafficLights}>
            <div className={`${styles.light} ${styles.red}`}></div>
            <div className={`${styles.light} ${styles.yellow}`}></div>
            <div className={`${styles.light} ${styles.green}`}></div>
          </div>
          <div className={styles.terminalTitle}>root@cyberiumx:~</div>
        </div>

        <div className={styles.terminalBody} ref={terminalBodyRef}>
          {history.map((h, i) => (
            <div key={i}>
              <div className={styles.line}>
                <span className={styles.prompt}>root@cyberiumx:~#</span>
                {h.cmd}
              </div>
              {h.out && <div className={styles.output}>{h.out}</div>}
            </div>
          ))}

          <div className={styles.quickMenu}>
            <span style={{color: '#9ca3af', fontSize: '0.85rem', marginRight: '0.5rem'}}>Quick Commands:</span>
            <button className={styles.quickBtn} onClick={() => setInput('whoami')} aria-label="Execute command whoami">[ whoami ]</button>
            <button className={styles.quickBtn} onClick={() => setInput('scan network')} aria-label="Execute command scan network">[ scan network ]</button>
            <button className={styles.quickBtn} onClick={() => setInput('courses')} aria-label="Execute command courses">[ courses ]</button>
            <button className={styles.quickBtn} onClick={() => setInput('services')} aria-label="Execute command services">[ services ]</button>
            <button className={styles.quickBtn} onClick={() => setInput('blog')} aria-label="Execute command blog">[ blog ]</button>
            <button className={styles.quickBtn} onClick={() => setInput('enroll')} aria-label="Execute command enroll">[ enroll ]</button>
          </div>

          <div className={styles.inputLine}>
            <span className={styles.prompt}>root@cyberiumx:~#</span>
            <input
              type="text"
              className={styles.cmdInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              spellCheck={false}
              aria-label="Terminal Input"
              placeholder="Type command (e.g. help, whoami, scan network)..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}


