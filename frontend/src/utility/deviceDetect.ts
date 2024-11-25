export const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipod|android|blackberry|windows phone|webos|mobile/.test(
    userAgent
  );
};