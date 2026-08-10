import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <Image src="/logo.png" alt="CyberiumX Logo" width={200} height={50} style={{ objectFit: 'contain', marginBottom: '1rem' }} />
          <p>
            CyberiumX is a trusted leader in Cyber Security training. Our mission is to equip Cyber Security professionals with practical skills and in-depth knowledge to help create a safer digital world.
          </p>
        </div>
        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Contact Info</h4>
          <p>
            Phone: +91 93184 92128<br/>
            Email: info@cyberiumx.com
          </p>
        </div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <p>&copy; {new Date().getFullYear()} CyberiumX. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
