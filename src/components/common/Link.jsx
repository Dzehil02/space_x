const Link = ({ href, className, children }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
  
export default Link;