import { FileTextIcon } from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Container from "@/components/ui/container";
import ShinyButton from "@/components/ui/shiny-button";
import envConfig from "@/config/env.config";
import { khula } from "@/utils/fonts";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface IBlog {
  _id: string;
  title: string;
  brief: string;
  cover: string;
  slug: string;
}

interface IBento {
  name: string;
  className: string;
  background: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  description: string;
  href: string;
  cta: string;
}

export default async function BlogSection() {
  const res = await fetch(`${envConfig.baseApi}/blogs` as string);
  const { data } = await res.json();

  const dynamicBlogs = data?.map((blog: IBlog, index: number) => {
    const pattern = [
      "md:col-span-1",
      "md:col-span-2",
      "md:col-span-2",
      "md:col-span-1",
    ];
    return {
      Icon: FileTextIcon,
      name: blog?.title,
      description: blog?.brief,
      href: `/blogs/${blog?.slug}`,
      cta: "Learn more",
      className: `col-span-3 ${pattern[index % pattern.length]}`,
      background: (
        <div className="absolute right-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
          <Image width={800} height={500} src={blog?.cover} alt="" />
        </div>
      ),
    };
  });

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-6">
          <div>
            <h1 className={`font-bold text-4xl md:text-5xl ${khula.className}`}>
              Recent Blogs
            </h1>
          </div>
          <div>
            <BentoGrid>
              {dynamicBlogs?.map((bento: IBento, index: number) => (
                <BentoCard key={index} {...bento} />
              ))}
            </BentoGrid>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link href={`/blogs`}>
            <ShinyButton>
              <div className="flex space-x-2">
                <span className="capitalize text-base font-medium inline-block">
                  Read More
                </span>
                <ChevronRight />
              </div>
            </ShinyButton>
          </Link>
        </div>
      </Container>
    </section>
  );
}
