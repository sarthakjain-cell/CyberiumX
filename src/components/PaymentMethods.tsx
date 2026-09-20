"use client";

import React from 'react';
import styles from './PaymentMethods.module.css';

export default function PaymentMethods() {
  return (
    <div className={styles.paymentWrapper}>
      <h4 className={styles.paymentHeading}>Secure Payment Transfers</h4>
      <div className={styles.paymentLogos}>
        
        {/* SBI Bank */}
        <div className={styles.logoItem} title="SBI Bank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg" alt="SBI Bank" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* PayPal */}
        <div className={styles.logoItem} title="PayPal">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* Razorpay */}
        <div className={styles.logoItem} title="Razorpay">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* Remitly */}
        <div className={styles.logoItem} title="Remitly">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Remitly_Logo.svg" alt="Remitly" className={styles.svgIcon} loading="lazy" />
        </div>

      </div>
    </div>
  );
}
