import React from 'react';

interface EmailButtonProps {
  onClick: () => void;
}

const EmailButton: React.FC<EmailButtonProps> = ({ onClick }) => {
  const handleEmailButtonClick = () => {
    const currentURL = window.location.href;
    const email = 'example@example.com'; // Replace with your desired email address
    const subject = encodeURIComponent(`Regarding the post on ${currentURL}`);
    const mailtoLink = `mailto:${email}?subject=${subject}`;

    try {
      // Try to open the default email client
      window.location.href = mailtoLink;
      // Call the provided onClick function (if any)
      onClick && onClick();
    } catch (error) {
      // Handle errors, for example, show a message to the user
      console.error('Error opening email client:', error);
      alert('Unable to open email client. Please manually compose an email to the provided address.');
    }
  };

  return (
    <button onClick={handleEmailButtonClick}>
      Contribute
    </button>
  );
};

export default EmailButton;
