import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Alt from "../assets/img/alt.svg";
import LazyImage from "../assets/components/LazyImage";
import Header from "../assets/components/Header";
import { FadeLoader } from "react-spinners";

function Home() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const [loader, setLoader] = useState(false);
  const count = product.length / limit;

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  }, [page]);

  const handlePageChange = (value) => {
    setPage(value);
  };
  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-24">
        <div className="mt-10 bg-white  pt-10 px-12 pb-8 pl-20 rounded-2xl">
          <div className="text text-center gap-4 mb-10">
            <h1 className="text-3xl font-bold">Food Blog</h1>
            <p className="text-2xl pt-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit{" "}
              <br /> aut fugit, sed quia consequuntur.
            </p>
          </div>
          <div className="wrapper grid grid-cols-4 gap-5 h-[400px]">
            {loader ? (
              <p className="pl-[525px] pt-16">
                <FadeLoader
                  height={50}
                  margin={30}
                  radius={10}
                  speedMultiplier={2}
                  width={7}
                  color="#ff439f"
                />
              </p>
            ) : (
              product.map((value, index) => {
                return (
                  <div key={index}>
                    <LazyImage
                      src={value.thumbnailUrl}
                      alt="alt"
                      placeholder={Alt}
                      className="w-[250px] rounded-2xl h-[190px]"
                      height={195}
                    />
                  </div>
                );
              })
            )}
          </div>
          <div className="pag flex items-center justify-center mt-10">
            <Stack spacing={2}>
              <Pagination
                count={625}
                color="secondary"
                onChange={handlePageChange}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#d81b60",
                    borderColor: "#d81b60",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#d81b60",
                    color: "white",
                  },
                }}
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

{
}
export default Home;
