import React, { useEffect } from 'react';

const Page404 = () => {
  useEffect(() => {
    document.title = `8 Bits Store bq - Error 404`;
  }, []);
  return <div>Error 404: Page not found</div>;
};

export default Page404;
