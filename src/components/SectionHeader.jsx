export default function SectionHeader({ eyebrow, title, text, centered = false, light = false }) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-black uppercase tracking-[0.18em] ${
            light ? 'text-academyYellow' : 'text-academyBlue'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}>
          {text}
        </p>
      )}
    </div>
  );
}
