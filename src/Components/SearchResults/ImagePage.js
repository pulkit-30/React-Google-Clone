import React from "react";
import { useContext } from "react";
import QueryContext from "../../Context/QueryContext";
import useGoogle from "../../Hooks/useGoogle";
import Classes from "./Search.module.css";
function SearchResults() {
  const Context = useContext(QueryContext);
  const data = useGoogle();
  console.log(data);
  return (
    <div>
      <div className={Classes.Header__bottom}>
        About {data?.data?.searchInformation.formattedTotalResults} results (
        {data?.data?.searchInformation.formattedSearchTime}) for {Context.Term}
      </div>
      <div className="flex">
        {data.data?.items?.map((result, index) => {
          return (
            <div key={index}>
              <img
                src={result.pagemap.cse_image[0].src}
                alt="display_image"
                className={Classes.Result__Image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResults;
