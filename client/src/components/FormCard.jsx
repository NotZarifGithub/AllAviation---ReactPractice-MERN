import { Link } from "react-router-dom";

const FormCard = ({contextText, context, mainTitle, title, titleForm, handleChange, handleSubmit, link}) => {

  return (
    <section>

      <section className="flex flex-col w-full gap-5 lg:flex-row">

        {/* form */}

        <section className="max-w-[500px] flex-1 ">
          <div className="flex  border rounded-md  items-start p-[40px] gap-5 shadow-md justify-center flex-col md:px-[50px] w-full ">
            <h1 className="font-semibold text-lg md:text-xl md:py-[10px]">
              {mainTitle}
            </h1>
            <form
              action=""
              className="flex flex-col w-full gap-6"
              onSubmit={handleSubmit}
            >

              {/* model input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={titleForm}
                  className="text-sm font-medium capitalize "
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
                {context && (
                  <div className="flex gap-2 text-sm">
                    <h1>
                      {contextText}
                    </h1>
                    {link && (
                      <Link to={link} className="text-blue-700 " target="_blank">
                        Click Here
                      </Link>
                    )}
                  </div>
                )}
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
