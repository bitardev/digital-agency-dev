import TemplatePreview from "@/components/TemplatePreview";
import { SiteVitrineModels } from "@/constants";

const page = ({ params }: { params: { slug: string } }) => {
  const templateSlug = params.slug;
  const templateObject =
    SiteVitrineModels.find((s) => s.slug === templateSlug) || undefined;
  return (
    <>
      <TemplatePreview model={templateObject!} />
    </>
  );
};

export default page;
