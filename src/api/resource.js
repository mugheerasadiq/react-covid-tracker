import axios from "axios";

const getStatistics = async () => {
  const data = await axios.get("https://covid19.mathdro.id/api");
  return data.data;
};

function wrapPromise(promise) {
  let status = "loading";
  let result;

  let suspender = promise.then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "loading") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

export const createResource = () => {
  return {
    globalSatistics: wrapPromise(getStatistics()),
  };
};
