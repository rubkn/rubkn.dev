import Fork from "@svg/fork";
import Star from "@svg/star";

const Repo = ({ name, description, stars, forks, languages }) => {
  return (
    <a
      href={`https://github.com/rubkn/${name}`}
      target="_blank"
      className="gap-2 hover:no-underline"
    >
      <div className="flex h-40 flex-col justify-between space-y-2 rounded-xl border border-black-100 bg-black-500 p-4 transition-transform ease-out hover:scale-105">
        {/* basic info */}
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-medium">{name}</p>
          <p className="text-sm">{description}</p>
        </div>

        <div className="flex flex-row items-center justify-between">
          {/* langs
        TODO: use the lang colors */}
          <div className="flex w-full flex-col text-xs">
            {Object.entries(languages).map(([language, color]) => (
              <li key={language} className="list-none">
                {language}
              </li>
            ))}
          </div>

          {/* stars and forks */}
          <div className="flex flex-row justify-end space-x-2">
            {stars > 0 ? (
              <span className="flex items-center space-x-1">
                <Star />
                <span>{stars}</span>
              </span>
            ) : null}

            {forks > 0 ? (
              <span className="flex items-center space-x-1">
                <Fork />
                <span>{forks}</span>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Repo;
