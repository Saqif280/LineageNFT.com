import React from "react";

const SelectTokenButton = ({ id, setCurrentTokenId }) => {
  return (
    <button
      style={{
        border: "none",
        borderBottom: "1px solid gold",
        marginBottom: "8px",
        color: "gold",
        textAlign: "start",
        maxWidth: "100px",
        backgroundColor: "transparent",
        marginBottom: "8px",
        cursor: "pointer",
      }}
      onClick={() => setCurrentTokenId(id)}
    >
      Token {id}
    </button>
  );
};

const TokenPicker = ({ tokens, setCurrentTokenId }) => {
  return (
    <div
      style={{
        padding: "12px",
        backgroundColor: "#292967",
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "12px 12px 0 0",
        maxHeight: "40vh",
        overflow: "scroll",
        position: "fixed",
        right: 0,
      }}
    >
      {tokens.map((id) => (
        <SelectTokenButton id={id} setCurrentTokenId={setCurrentTokenId} />
      ))}
      <div className="faded" style={{ position: "absolute", bottom: 0 }}></div>
    </div>
  );
};

export default TokenPicker;
