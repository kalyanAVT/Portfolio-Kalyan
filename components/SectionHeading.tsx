type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
  id?: string;
};

export default function SectionHeading({ index, label, title, description, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span className="section-index">{index}</span> {label}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
