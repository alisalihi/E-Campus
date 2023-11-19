// EmailButton.tsx
import React from 'react';
import './email.css';  // Check if the path is correct
import classes from './Study.module.css';  // Check if the path is correct

const EmailButton: React.FC = () => {
  const handleEmailButtonClick = () => {
    const currentURL: string = window.location.href;
    const email: string = 'example@example.com';
    const subject: string = encodeURIComponent(`Regarding the post on ${currentURL}`);
    const mailtoLink: string = `mailto:${email}?subject=${subject}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={classes.rent} onClick={handleEmailButtonClick}>Contribute</div>
  );
};

export default EmailButton;
