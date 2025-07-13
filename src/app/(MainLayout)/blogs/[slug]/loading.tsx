import { LoaderCircle } from "lucide-react";

interface IProps {}

const BlogDetailsLoading = ({}: IProps) => {
  return (
    <>
      <LoaderCircle className="w-10 h-10 animate-spin text-gray-500 mx-auto mt-20" />
    </>
  );
};

export default BlogDetailsLoading;
