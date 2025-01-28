import { Link } from 'react-router-dom';
import Image from '../components/Image';

const About = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">About</span>
      </div>

      <div className="mt-8 flex items-center justify-center rounded-2xl bg-blue-500/10 py-4">
        <h2 className="text-3xl font-semibold">Behind the platform</h2>
      </div>

      <div className="my-8 flex flex-col justify-between md:flex-row">
        <div className="md:w-3/5 xl:w-1/2">
          <Image
            path="/public/annie-spratt-MChSQHxGZrQ-unsplash.jpg"
            alt="The team behind the platform Inkhive"
            className="h-full w-full rounded-2xl object-cover"
            imageWidth="750"
          />
        </div>

        <div className="flex flex-col gap-8 p-8 md:w-3/5 xl:w-1/2">
          <p>
            Welcome to Inkhive, a community-driven blogging platform where your ideas come to life. At Inkhive, we believe that everyone has a story to tell, a
            perspective to share, or a voice to be heard. Our mission is to provide a space where creativity and self-expression thrive.
          </p>
          <p>
            Whether you’re an aspiring writer, an experienced blogger, or simply someone looking to share your thoughts with the world, Inkhive offers the tools
            and support to help you create and share your content effortlessly. We aim to connect writers and readers in a meaningful way, fostering a sense of
            community and shared discovery.
          </p>
          <p>
            Our platform is designed to be intuitive and user-friendly, making it easier than ever to write, edit, and publish. With customizable themes and
            rich formatting options, your blog will reflect your unique personality and style. We’re committed to helping you stand out and make an impact.
          </p>
          <p>
            At Inkhive, we value diversity and inclusivity. We celebrate a wide range of voices, perspectives, and ideas. Whether you’re writing about
            technology, lifestyle, travel, or personal experiences, there’s a place for you here. Together, we can build a vibrant ecosystem of creators and
            thinkers.
          </p>
          <p>
            Thank you for choosing Inkhive as your creative home. We’re excited to see the stories you’ll share and the community you’ll help build. Let’s
            inspire, engage, and grow together. Happy blogging!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
