import Container from "@/components/ui/container";
import { michroma } from "@/utils/fonts";

interface IProps {}

const BlogLoading = ({}: IProps) => {
  return (
    <section className="md:pt-10 pb-10">
      <Container>
        <div className="flex justify-center">
          <span
            className={`pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text md:text-center text-7xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 ${michroma.className} py-4`}
          >
            All Blogs
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {Array.from({ length: 6 }, (_, index) => index + 1).map((index) => (
            <div key={index} className="flex flex-col animate-pulse w-full">
              <div className="w-full h-44 rounded bg-slate-100 dark:bg-zinc-800"></div>
              <div className="space-y-2 p-4">
                <h3 className="bg-slate-100 dark:bg-zinc-800 h-5 animate-pulse rounded"></h3>
                <p className="bg-slate-100 dark:bg-zinc-800 h-14 animate-pulse rounded"></p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogLoading;
