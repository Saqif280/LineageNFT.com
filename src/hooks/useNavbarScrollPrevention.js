import { useEffect } from "react";

const stopScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const useNavbarScrollPrevention = () => {
  useEffect(() => {
    document.getElementById("navbar").addEventListener("wheel", stopScroll);

    return () =>
      document
        .getElementById("navbar")
        .removeEventListener("wheel", stopScroll, false);
  });
};

export default useNavbarScrollPrevention;
