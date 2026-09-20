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
          <svg className={styles.svgIcon} viewBox="0 0 450 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M129.5 45.4C140.6 45.4 148.9 51.5 148.9 61.9V104.6H134.6V64.8C134.6 57.6 130.6 54.8 123.6 54.8C115.1 54.8 108.5 60.1 108.5 71.4V104.6H94.1V64.8C94.1 57.6 90.1 54.8 83.1 54.8C74.6 54.8 68 60.1 68 71.4V104.6H53.6V46.6H66.8V54.5C70.6 48.4 76.5 45.4 83.9 45.4C92 45.4 97.9 49.3 100.8 55.4C105 48.7 111.4 45.4 119.5 45.4H129.5ZM166 28.5C170.8 28.5 174.5 32.2 174.5 37.1C174.5 41.9 170.8 45.6 166 45.6C161.2 45.6 157.5 41.9 157.5 37.1C157.5 32.3 161.2 28.5 166 28.5ZM158.8 46.6H173.2V104.6H158.8V46.6ZM201.2 55.6H190V46.6H201.2V27.3H215.6V46.6H226V55.6H215.6V88.8C215.6 94.6 218 95.8 221.7 95.8H226.3V104.6C222.8 104.8 219.7 104.9 216.7 104.9C205.1 104.9 201.2 100.8 201.2 92V55.6ZM244.6 104.6H230.2V0.400024H244.6V104.6ZM290.7 46.6L272.7 98.4L254.7 46.6H270L280.2 81.3L290.7 46.6ZM287 111.6L272.8 149H258.4L284.1 76.1H297.8L309.4 46.6H294.6L287 111.6ZM349.5 45.4C366 45.4 378.1 57.6 378.1 75C378.1 92.4 366 104.6 349.5 104.6C333 104.6 320.9 92.4 320.9 75C320.9 57.6 333 45.4 349.5 45.4ZM363.8 75C363.8 63 357.6 54.8 349.5 54.8C341.4 54.8 335.2 63 335.2 75C335.2 87 341.4 95.2 349.5 95.2C357.6 95.2 363.8 87 363.8 75ZM409.8 46.6V56.3C405 49 397.6 45.4 388.9 45.4C374.8 45.4 363.6 57.7 363.6 75C363.6 92.3 374.8 104.6 388.9 104.6C397.6 104.6 405 101 409.8 93.7V104.6H424.2V46.6H409.8ZM409.9 75C409.9 63.6 403 54.8 394 54.8C385 54.8 377.9 63.6 377.9 75C377.9 86.4 385 95.2 394 95.2C403 95.2 409.9 86.4 409.9 75Z" fill="#000000"/>
            <path d="M12.9 61.1C6.9 61.1 2.3 64.9 0.4 71.3V104.7H14.7V75C14.7 69 19.3 65.5 25 65.5H35.8V51.4H25.3C18.4 51.4 13.9 54.9 12.9 61.1ZM14.9 23.3V46.7H35.8V23.3C35.8 17.5 31.6 13.2 25.8 13.2H0.4V27.5H21.5V36.9H14.9C11.5 36.9 8.7 39.7 8.7 43.1V64.6C10.5 62.5 12.6 61.1 14.9 61.1V46.7H25.8V33.3C25.8 28.5 29.8 24.5 34.6 24.5H14.9V23.3Z" fill="#005BFF"/>
          </svg>
        </div>

      </div>
    </div>
  );
}
