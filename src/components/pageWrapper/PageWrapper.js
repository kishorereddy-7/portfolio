const PageWrapper = (props) => {
  return (
    <div
      className="d-flex justify-content-center flex-wrap p-8 page"
      style={{ backgroundColor: props.bgColor }}
    >
      {props.children}
    </div>
  );
}

export default PageWrapper