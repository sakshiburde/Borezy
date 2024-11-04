// ReminderBanner.js
import React, { useEffect, useState } from 'react';
import './ReminderBanner.css';

const ReminderBanner = ({ expiringSoonMessage }) => {
  return (
    <div className="reminder-banner">
      <p>{expiringSoonMessage}</p>
    </div>
  );
};

export default ReminderBanner;
