"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className={styles.splitLayout}>
      {/* Left Form Side */}
      <div className={styles.formSide}>
        <div className={styles.formWrapper}>
          
          <div className={styles.brand}>
            <Link href="/">
              <span className={styles.brandPrimary}>Cyberium</span>
              <span className={styles.brandSecondary}>X</span>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.subtitle}>Enter your details to access your learning portal.</p>

            <div className={styles.socialLogins}>
              <button type="button" className={styles.socialBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Log in with Google
              </button>
            </div>

            <div className={styles.divider}>
              <span>or</span>
            </div>

            <form onSubmit={handleLogin} className={styles.form} autoComplete="off">
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.input} 
                  autoComplete="off"
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <div className={styles.passwordWrapper}>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    className={styles.input} 
                    autoComplete="new-password"
                    required 
                  />
                  <button 
                    type="button" 
                    className={styles.showPasswordBtn}
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className={styles.optionsRow}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  Remember me
                </label>
                <a href="#" className={styles.forgotLink}>Forgot password?</a>
              </div>

              <button 
                type="submit" 
                className={`btn-primary ${styles.submitBtn}`}
                disabled={isAuthenticating}
              >
                {isAuthenticating ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <p className={styles.signupText}>
              Don't have an account? <Link href="/">Sign up</Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Image Side */}
      <div className={styles.imageSide}>
        <div className={styles.imageOverlay}></div>
        <Image 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="Cyber Security Display" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  );
}
