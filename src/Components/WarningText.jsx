function WarningText({ children, className }) {
  return (
    <p style={{ color: "red" }} className={className}>
      {children}
    </p>
  );
}

export default WarningText;
