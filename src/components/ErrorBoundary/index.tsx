import React, { ReactElement, useState, useEffect } from "react";

interface ErrorBoundaryProps {
  fallback: ReactElement;
  children: ReactElement;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  children,
  fallback
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleComponentError = () => {
      setHasError(true);
    };

    window.addEventListener("error", handleComponentError);

    return () => {
      window.removeEventListener("error", handleComponentError);
    };
  }, []);

  return hasError ? fallback : children;
};

export default ErrorBoundary;
