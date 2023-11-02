import React from "react";

import Carousel from "../../../components/carousal/Carousal";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );
console.log("lengt ", data?.results?.length );
    return (
       <>
       {data?.results?.length > 0 && <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        /> }
        
       </>
    );
};

export default Recommendation;