export const currentPosition = async () => {
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   console.log(position);
  //   return position;
  // });

  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};
