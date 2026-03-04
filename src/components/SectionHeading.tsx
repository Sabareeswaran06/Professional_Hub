interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">{subtitle}</p>
      )}
      <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
    </div>
  );
};

export default SectionHeading;
