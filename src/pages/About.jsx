import React, { useEffect, useState } from "react";
import Header from "../assets/components/Header";
import Alt from "../assets/img/alt.svg";
import LazyImage from "../assets/components/LazyImage";
import { FadeLoader } from "react-spinners";

function About() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(24);
  const [loader, setLoader] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoader(true);

    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setProduct((prevProducts) => [...prevProducts, ...data]);

        if (data.length === 0) {
          setHasMore(false);
        }
      })
      .catch((err) => {
        console.log("Xato yuz berdi:", err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (loader) return;

      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loader, hasMore]);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-24">
        <div className="mt-10 bg-white pt-10 px-12 pb-8 pl-20 rounded-2xl">
          <div className="text text-center gap-4 mb-10">
            <h1 className="text-3xl font-bold">Food Blog</h1>
            <p className="text-2xl pt-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              <br /> aut fugit, sed quia consequuntur.
            </p>
          </div>

          <div className="wrapper grid grid-cols-4 gap-5">
            {product.map((value, index) => (
              <div key={index}>
                <LazyImage
                  src={value.thumbnailUrl}
                  alt="alt"
                  placeholder={Alt}
                  className="w-[250px] rounded-2xl h-[190px]"
                  height={195}
                />
              </div>
            ))}
          </div>

          {loader && (
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
          )}

          {!hasMore && (
            <p className="text-center mt-10 text-xl">
              Barcha ma'lumotlar yuklandi
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
