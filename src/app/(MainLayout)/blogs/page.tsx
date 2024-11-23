import Container from "@/components/ui/container";
import envConfig from "@/config/env.config";
import TopSection from "@/modules/blogs/top-section";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface IProps {}

const Blogs = async ({}: IProps) => {
  const res = await fetch(`${envConfig.baseApi}/blogs?limit=15` as string, {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <section className="md:pt-10 pb-10">
      <Container>
        <TopSection />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {data?.map((blog: IBlog) => (
            <Link
              href={`/blogs/${blog?.slug}`}
              key={blog._id}
              className="flex flex-col"
            >
              <div className="flex-1">
                <Image
                  width={800}
                  height={500}
                  src={blog?.cover}
                  alt={blog?.slug + "cover-image"}
                  className="rounded h-full object-cover"
                />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
                  {blog?.title}
                </h3>
                <p>{blog?.brief}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
