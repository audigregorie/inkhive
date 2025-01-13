import { ErrorSpanProps } from '../utils/common';

const ErrorSpan: React.FC<ErrorSpanProps> = ({ message }) => {
  return <span className="text-sm text-red-500">{message}</span>;
};

export default ErrorSpan;
