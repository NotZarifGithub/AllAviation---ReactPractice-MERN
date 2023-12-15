
const FormCard = ({ mainTitle, title, titleForm, handleChange, handleSubmit, }) => {

  return (
    <section>

      <section className="flex gap-5 lg:flex-row flex-col w-full">

        {/* form */}

        <section className="max-w-[500px] flex-1 ">
          <div className="flex  border rounded-md  items-start p-[40px] gap-5 shadow-md justify-center flex-col md:px-[50px] w-full ">
            <h1 className="font-semibold text-lg md:text-xl md:py-[10px]">
              {mainTitle}
            </h1>
            <form
              action=""
              className="flex flex-col gap-6 w-full"
              onSubmit={handleSubmit}
            >

              {/* model input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={titleForm}
                  className=" text-sm font-medium capitalize"
                >
                  {title}
                </label>
                <input
                  type="text"
                  id={titleForm}
                  name={titleForm}
                  className="border rounded-lg py-[5px] px-[15px] w-full text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="py-[10px] md:py-[20px]">
                <button
                  type="submit"
                  className="border rounded-full py-[5px] px-[15px] w-full"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>

      </section>
    </section>
  );
};

export default FormCard;
