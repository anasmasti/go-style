import React, { useEffect, useState } from "react";

const WithTitle = (Component) => {
  return ({ datatype }) => {
    const [title, setTitle] = useState([]);
    useEffect(() => {
      if (datatype == "women") setTitle("For Women");
      if (datatype == "men") setTitle("For Men");
      if (datatype == "trend") setTitle("Best Of Today");
      if (datatype == "season") setTitle("Seasons");

      return () => {
        setTitle([]);
      };
    }, []);

    return <Component title={title} />;
  };
};

export default WithTitle;
