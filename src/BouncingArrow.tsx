const BouncingArrow = ({ visible }: { visible: boolean }) => (
  <div
    className="arrow-container"
    style={{ transition: "400ms all", opacity: visible ? 1 : 0 }}
  >
    <div className="arrow bounce">
      <div className="arrow-l"></div>
      <div className="arrow-r"></div>
    </div>
  </div>
);

export default BouncingArrow;
