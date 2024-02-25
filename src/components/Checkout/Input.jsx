const Input = ({ label, setState, errorState }) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        onKeyUp={(e) => setState(e.target.value)}
        type="text"
        className="form-control"
      />
      {errorState && (
        <div className="form-text text-danger">Campo requerido</div>
      )}
    </>
  )
}

export default Input
