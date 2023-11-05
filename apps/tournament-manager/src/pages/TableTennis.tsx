function TableTennis() {
  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const form = e.target;

    if (!form) {
      return;
    }

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    console.log(formValues);
  };

  return (
    <div className="h-full">
      <div>
        <h1 data-testid="title" className="text-6xl">
          Tafeltennis
        </h1>
      </div>

      <form id="form-tabletennis" method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="form-control w-full max-w-xs">
            <label htmlFor="players" className="label">
              <span className="label-text">Spelers</span>
            </label>
            <input
              type="text"
              name="players"
              id="players"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label htmlFor="tables" className="label">
              <span className="label-text">Tafels</span>
            </label>
            <input
              type="text"
              name="tables"
              id="tables"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label htmlFor="poules" className="label">
              <span className="label-text">Poules</span>
            </label>
            <input
              type="text"
              name="poules"
              id="poules"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label htmlFor="rounds" className="label">
              <span className="label-text">Rondes</span>
            </label>
            <input
              type="text"
              name="rounds"
              id="rounds"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <button className="btn btn-primary max-w-xs" type="submit">
              Berekenen
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TableTennis;
