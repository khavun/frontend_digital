// page.tsx
"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false); // State to track whether component has mounted
  const pathname = usePathname(); // Use the usePathname hook to get the current path

  useEffect(() => {
    // Set to true once the component is mounted in the client-side
    setIsMounted(true);
  }, []);

  // Don't use `usePathname` or render the UI until mounted
  if (!isMounted) {
    return null; // Or return a loading spinner if necessary
  }

  return (
    <div>
      {/* Your Navbar JSX code */}
      <p>Current Path: {pathname}</p>
    </div>
  );
};

export default Navbar;
