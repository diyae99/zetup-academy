export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-black transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200';
  const variants = {
    primary:
      'bg-academyYellow text-navy shadow-lg shadow-amber-400/25 hover:-translate-y-0.5 hover:bg-[#ffc13d]',
    blue:
      'bg-academyBlue text-white shadow-lg shadow-blue-700/25 hover:-translate-y-0.5 hover:bg-blue-700',
    dark: 'bg-navy text-white shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-[#09265d]',
    light:
      'border border-white/70 bg-white text-navy shadow-sm hover:-translate-y-0.5 hover:bg-lightBlue',
    outline:
      'border border-blue-200 bg-white text-academyBlue shadow-sm hover:-translate-y-0.5 hover:border-academyBlue hover:bg-lightBlue',
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
