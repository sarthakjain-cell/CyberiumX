"use client";

import React from 'react';
import styles from './PaymentMethods.module.css';

export default function PaymentMethods() {
  return (
    <div className={styles.paymentWrapper}>
      <h4 className={styles.paymentHeading}>Secure Payment Gateways</h4>
      <div className={styles.paymentLogos}>
        {/* PayPal */}
        <div className={styles.logoItem} title="PayPal">
          <img src="/payments/paypal.svg" alt="PayPal" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* Mastercard */}
        <div className={styles.logoItem} title="Mastercard">
          <img src="/payments/mastercard.svg" alt="Mastercard" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* American Express */}
        <div className={styles.logoItem} title="American Express">
          <img src="/payments/amex.svg?v=2" alt="American Express" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* Razorpay */}
        <div className={styles.logoItem} title="Razorpay Secure Checkout">
          <img src="/payments/razorpay.svg" alt="Razorpay" className={styles.svgIcon} loading="lazy" />
        </div>

        {/* UPI */}
        <div className={styles.logoItem} title="UPI Instant Payments">
          <img src="/payments/upi.svg?v=2" alt="UPI" className={styles.svgIcon} loading="lazy" />
        </div>
      </div>
    </div>
  );
}
