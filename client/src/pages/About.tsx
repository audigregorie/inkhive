import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">About</span>
      </div>
    </div>
  );
};

export default About;
