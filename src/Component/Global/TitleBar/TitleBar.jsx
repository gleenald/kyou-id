import "./css/TitleBar.css";

function TitleBar({ title }) {
  return (
    <div data-testid="parent-container" className="parent-container">
      <div className="title-container">
        <h6 className="title">{title}</h6>
      </div>
    </div>
  );
}

export default TitleBar;
