import React, { useState, useEffect } from "react";
import { IErrorBoundaryProps } from "./interface";

const ErrorBoundary: React.FC<IErrorBoundaryProps> = ({
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
