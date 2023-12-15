
const TitleCard = ({title, description}) => {
  return (
    <div>

      {/* title and description*/}
      <section className="flex flex-col gap-1 max-w-[450px] lg:gap-2">
        <h1 className="font-semibold text-xl lg:text-2xl">
          {title}
        </h1>
        <p className="text-sm lg:text-base">
          {description}
        </p>
      </section>
    </div>
  )
}

export default TitleCard