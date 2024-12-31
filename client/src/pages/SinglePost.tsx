import { Link } from 'react-router-dom';
import Image from '../components/Image';
import SinglePostSidebar from '../features/Post/SinglePostSidebar';
import CommentList from '../features/Post/CommentList';

const SinglePost = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl font-semibold md:text-3xl xl:text-4xl 2xl:text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Written by</span>
            <Link to="/" className="text-blue-800">
              Yves Saint Laurent
            </Link>
            <span>on</span>
            <Link to="/" className="text-blue-800">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="font-medium text-gray-500">
            Aliquid ut, optio, quisquam a labore esse quo, assumenda blanditiis iure eius nihil dolor! Aperiam ipsa iste a consectetur repellat nulla
            aspernatur. Incidunt, voluptas hic odit nihil sed ad nulla necessitatibus molestias at porro animi ipsum neque minima corporis! Ipsum beatae
            possimus magni dicta earum, fugit temporibus accusamus suscipit ullam soluta eius.
          </p>
        </div>
        <div className="hidden w-2/5 lg:block">
          <Image
            path="/public/laptop-and-bookshelf-upsplash.jpg"
            alt="Laptop on a desk with a bookshelf in the background"
            className="rounded-2xl object-cover"
            imageWidth="600"></Image>
        </div>
      </div>

      <div className="flex flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-6 text-justify lg:text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quisquam. Eaque maiores qui, expedita iure sunt, eum voluptates officiis sapiente
            officia placeat autem quidem unde quos pariatur animi illo non? Ex tenetur placeat qui veniam alias labore officia sequi suscipit nam quasi, natus
            repellat velit laborum, quas reiciendis tempore exercitationem repudiandae maxime et sunt, vero itaque eum! Odit, saepe est. Vero obcaecati quasi
            facere! Officia debitis cupiditate voluptatem tempore voluptate et est iusto optio illum ullam? Asperiores voluptatem, cupiditate tempora, eos error
            optio labore libero, amet cum provident vel illum. Voluptates temporibus laudantium perferendis repudiandae adipisci optio porro facere eum officia
            doloribus. Consequatur, corrupti ea itaque natus illo quaerat quasi iure debitis quod ut voluptatem dolorum non praesentium aspernatur laborum.
            Enim, molestias quibusdam! Excepturi quos sapiente nobis necessitatibus sit debitis possimus esse, facilis id adipisci voluptate? Nesciunt placeat
            vitae inventore labore beatae. Magni, perspiciatis consequuntur rerum fugiat aliquam neque molestiae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quisquam. Eaque maiores qui, expedita iure sunt, eum voluptates officiis sapiente
            officia placeat autem quidem unde quos pariatur animi illo non? Ex tenetur placeat qui veniam alias labore officia sequi suscipit nam quasi, natus
            repellat velit laborum, quas reiciendis tempore exercitationem repudiandae maxime et sunt, vero itaque eum! Odit, saepe est. Vero obcaecati quasi
            facere! Officia debitis cupiditate voluptatem tempore voluptate et est iusto optio illum ullam? Asperiores voluptatem, cupiditate tempora, eos error
            optio labore libero, amet cum provident vel illum. Voluptates temporibus laudantium perferendis repudiandae adipisci optio porro facere eum officia
            doloribus. Consequatur, corrupti ea itaque natus illo quaerat quasi iure debitis quod ut voluptatem dolorum non praesentium aspernatur laborum.
            Enim, molestias quibusdam! Excepturi quos sapiente nobis necessitatibus sit debitis possimus esse, facilis id adipisci voluptate? Nesciunt placeat
            vitae inventore labore beatae. Magni, perspiciatis consequuntur rerum fugiat aliquam neque molestiae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quisquam. Eaque maiores qui, expedita iure sunt, eum voluptates officiis sapiente
            officia placeat autem quidem unde quos pariatur animi illo non? Ex tenetur placeat qui veniam alias labore officia sequi suscipit nam quasi, natus
            repellat velit laborum, quas reiciendis tempore exercitationem repudiandae maxime et sunt, vero itaque eum! Odit, saepe est. Vero obcaecati quasi
            facere! Officia debitis cupiditate voluptatem tempore voluptate et est iusto optio illum ullam? Asperiores voluptatem, cupiditate tempora, eos error
            optio labore libero, amet cum provident vel illum. Voluptates temporibus laudantium perferendis repudiandae adipisci optio porro facere eum officia
            doloribus. Consequatur, corrupti ea itaque natus illo quaerat quasi iure debitis quod ut voluptatem dolorum non praesentium aspernatur laborum.
            Enim, molestias quibusdam! Excepturi quos sapiente nobis necessitatibus sit debitis possimus esse, facilis id adipisci voluptate? Nesciunt placeat
            vitae inventore labore beatae. Magni, perspiciatis consequuntur rerum fugiat aliquam neque molestiae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quisquam. Eaque maiores qui, expedita iure sunt, eum voluptates officiis sapiente
            officia placeat autem quidem unde quos pariatur animi illo non? Ex tenetur placeat qui veniam alias labore officia sequi suscipit nam quasi, natus
            repellat velit laborum, quas reiciendis tempore exercitationem repudiandae maxime et sunt, vero itaque eum! Odit, saepe est. Vero obcaecati quasi
            facere! Officia debitis cupiditate voluptatem tempore voluptate et est iusto optio illum ullam? Asperiores voluptatem, cupiditate tempora, eos error
            optio labore libero, amet cum provident vel illum. Voluptates temporibus laudantium perferendis repudiandae adipisci optio porro facere eum officia
            doloribus. Consequatur, corrupti ea itaque natus illo quaerat quasi iure debitis quod ut voluptatem dolorum non praesentium aspernatur laborum.
            Enim, molestias quibusdam! Excepturi quos sapiente nobis necessitatibus sit debitis possimus esse, facilis id adipisci voluptate? Nesciunt placeat
            vitae inventore labore beatae. Magni, perspiciatis consequuntur rerum fugiat aliquam neque molestiae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quisquam. Eaque maiores qui, expedita iure sunt, eum voluptates officiis sapiente
            officia placeat autem quidem unde quos pariatur animi illo non? Ex tenetur placeat qui veniam alias labore officia sequi suscipit nam quasi, natus
            repellat velit laborum, quas reiciendis tempore exercitationem repudiandae maxime et sunt, vero itaque eum! Odit, saepe est. Vero obcaecati quasi
            facere! Officia debitis cupiditate voluptatem tempore voluptate et est iusto optio illum ullam? Asperiores voluptatem, cupiditate tempora, eos error
            optio labore libero, amet cum provident vel illum. Voluptates temporibus laudantium perferendis repudiandae adipisci optio porro facere eum officia
            doloribus. Consequatur, corrupti ea itaque natus illo quaerat quasi iure debitis quod ut voluptatem dolorum non praesentium aspernatur laborum.
            Enim, molestias quibusdam! Excepturi quos sapiente nobis necessitatibus sit debitis possimus esse, facilis id adipisci voluptate? Nesciunt placeat
            vitae inventore labore beatae. Magni, perspiciatis consequuntur rerum fugiat aliquam neque molestiae!
          </p>
          <p>
            lorem ipsum dolor sit amet consectetur, adipisicing elit. nisi, quisquam. eaque maiores qui, expedita iure sunt, eum voluptates officiis sapiente
            officia placeat autem quidem unde quos pariatur animi illo non? ex tenetur placeat qui veniam alias labore officia sequi suscipit nam quasi, natus
            repellat velit laborum, quas reiciendis tempore exercitationem repudiandae maxime et sunt, vero itaque eum! odit, saepe est. vero obcaecati quasi
            facere! officia debitis cupiditate voluptatem tempore voluptate et est iusto optio illum ullam? asperiores voluptatem, cupiditate tempora, eos error
            optio labore libero, amet cum provident vel illum. voluptates temporibus laudantium perferendis repudiandae adipisci optio porro facere eum officia
            doloribus. consequatur, corrupti ea itaque natus illo quaerat quasi iure debitis quod ut voluptatem dolorum non praesentium aspernatur laborum.
            enim, molestias quibusdam! excepturi quos sapiente nobis necessitatibus sit debitis possimus esse, facilis id adipisci voluptate? nesciunt placeat
            vitae inventore labore beatae. magni, perspiciatis consequuntur rerum fugiat aliquam neque molestiae!
          </p>
        </div>
        <SinglePostSidebar />
      </div>
      <CommentList />
    </div>
  );
};

export default SinglePost;
