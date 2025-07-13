import BackButton from "@/components/back-button";
import Container from "@/components/ui/container";
import envConfig from "@/config/env.config";
import { IBlog } from "@/types";
import { Calendar, ChevronLeft, FileText, UserRoundPen } from "lucide-react";
import Image from "next/image";

interface IProps {
  params: Promise<{ slug: string }>;
}

const BlogDetailsPage = async ({ params }: IProps) => {
  const resolvedParams = await params;
  const res = await fetch(
    `${envConfig.baseApi}/blogs/${resolvedParams.slug}?expand=true`
  );
  const data = await res.json();
  const blog = data.data as IBlog;

  return (
    <section className="pt-4 md:pt-10 pb-10">
      <Container>
        <div className="w-full max-w-2xl mx-auto">
          <BackButton className="!size-8" size="icon" variant="outline">
            <ChevronLeft className="w-4 h-4" />
          </BackButton>
          <div className="my-4 space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">{blog?.title}</h1>
            <div className="flex gap-x-4 flex-wrap">
              <div className="flex items-center space-x-2">
                <Calendar className="size-4" />
                <span>{new Date(blog?.createdAt).toDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="size-4" />
                <span>{blog?.category.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserRoundPen className="size-4" />
                <span>{blog?.author.name}</span>
              </div>
            </div>
          </div>
          <figure className="w-full max-w-2xl mx-auto overflow-hidden h-[150px] md:h-[300px] rounded-md">
            <Image
              width={500}
              height={500}
              src={blog?.cover}
              alt={`${blog?.title} cover image`}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="mt-4">
            {blog.contentType === "text" && (
              <p className="mt-2 whitespace-break-spaces">{blog?.content}</p>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {blog?.tags?.map((tag, index) => (
                <span
                  className="bg-secondary px-4 text-sm rounded"
                  key={`${tag}-${index}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogDetailsPage;
