import { ReactElement } from "react";

export interface IErrorBoundaryProps {
  fallback: ReactElement;
  children: ReactElement;
}
