// Write Code here
function Image({ src, alt, width, height, title }) {
  return (
    <>
      <img src={src} alt={alt} width={width} height={height} />
      <h2>{title}</h2>
    </>
  );
}

export default Image;
