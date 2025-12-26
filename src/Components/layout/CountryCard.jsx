import { NavLink } from "react-router-dom";
import { useState } from "react";

export const CountryCard = ({ country }) => {
  const { flags, name, capital, region, population } = country;

  const [imgError, setImgError] = useState(false);

  const flagSrc =
    !imgError && (flags?.svg || flags?.png)
      ? flags.svg || flags.png
      : "/fallback-flag.png";

  const flagAlt =
    flags?.alt && flags.alt.length > 20
      ? flags.alt.slice(0, 20) + "..."
      : flags?.alt || name.common;

  const displayName =
    name?.common?.length > 15 ? name.common.slice(0, 15) + "..." : name.common;

  const displayCapital =
    capital?.[0]?.length > 12 ? capital[0].slice(0, 12) + "..." : capital?.[0] || "N/A";

  return (
    <li className="country-card card">
      <div className="bg-white-box">
     <div className="flag-wrapper">
  <img
    src={flagSrc}
    alt={flagAlt}
    className="flag-img"
    onError={(e) => {
      e.target.src = "/fallback-flag.png";
    }}
  />
</div>
        <div className="countryInfo">
          <p className="card-title">{displayName}</p>
          <p><span className="card-description">Population:</span> {population?.toLocaleString() || "N/A"}</p>
          <p><span className="card-description">Region:</span> {region || "N/A"}</p>
          <p><span className="card-description">Capital:</span> {displayCapital}</p>

          <NavLink to={`/country/${name?.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
