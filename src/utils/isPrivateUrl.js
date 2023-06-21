const unauthUrl = ["/signin", "/signup", "/"];

export const isPrivateUrl = (path, isAuth) => {
  if (isAuth) {
    return unauthUrl.filter((item) => path.includes(item)).length > 0
      ? false
      : true;
  } else {
    return unauthUrl.filter((item) => path.includes(item)).length > 0 ||
      path === "/"
      ? true
      : false;
  }
};
