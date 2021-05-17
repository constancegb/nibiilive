import React, { useState, useEffect } from 'react';
import './toaster.css';

export default function Toaster({ content, visible, type }) {
  const [toasterClass, setToasterClass] = useState('toaster');

  useEffect(() => {
    async function animate() {
      let toasterClass_;
      if (visible) {
        toasterClass_ = `${toasterClass} toaster-slide-up`;
        setTimeout(() => {
          setToasterClass('toaster');
        }, 2000);
      } else {
        toasterClass_ = toasterClass;
      }
      setToasterClass(toasterClass_);
    }

    animate();

  }, [visible]);

  return (
    <div className={toasterClass}>
      <div className='toaster-icon'>✓</div>
      <div>{content}</div>
    </div>
  )
}
