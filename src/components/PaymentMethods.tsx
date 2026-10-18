"use client";

import React from 'react';
import styles from './PaymentMethods.module.css';

export default function PaymentMethods() {
  return (
    <div className={styles.paymentWrapper}>
      <h4 className={styles.paymentHeading}>Secure Payment Transfers &amp; Gateways</h4>
      <div className={styles.paymentLogos}>
        {/* Razorpay */}
        <div className={styles.logoItem} title="Razorpay Secure Checkout">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* PayPal */}
        <div className={styles.logoItem} title="PayPal International">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* SBI Bank */}
        <div className={styles.logoItem} title="State Bank of India (SBI)">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg" alt="SBI Bank" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* UPI */}
        <div className={styles.logoItem} title="UPI Instant Payments">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* Visa */}
        <div className={styles.logoItem} title="Visa">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* Mastercard */}
        <div className={styles.logoItem} title="Mastercard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className={styles.svgIcon} loading="lazy" />
        </div>
      </div>
    </div>
  );
}
