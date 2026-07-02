import BrandLogo from "./BrandLogo";

export default function Logo() {
  return (
    <a href="/" className="logo">
      <span className="logo__badge">
        <BrandLogo width={40} height={40} fallback={<span>US</span>} />
      </span>
      <span className="logo__txt">
        Urban
        <br />
        Store<small>570</small>
      </span>
    </a>
  );
}
