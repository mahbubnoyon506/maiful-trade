export const handleDownloadProfile = () => {
  const link = document.createElement("a");
  link.href = "/assets/dummy.pdf";
  link.download = "maiful-trade-profile.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
