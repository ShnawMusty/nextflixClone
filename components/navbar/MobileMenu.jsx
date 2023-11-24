
const MobileMenu = ({visible}) => {

  if(!visible) {
    return null
  }

  return (
    <section className="absolute top-10 right-0 bg-black w-56 border-2 border-gray-800 flex flex-col rounded-xl overflow-hidden">
      <h3 className="p-3 hover:bg-gray-700 text-center">
        Home
      </h3>
      <h3 className="p-3 hover:bg-gray-700 text-center">
        Series
      </h3>
      <h3 className="p-3 hover:bg-gray-700 text-center">
        Films
      </h3>
      <h3 className="p-3 hover:bg-gray-700 text-center">
        New & Popular
      </h3>
      <h3 className="p-3 hover:bg-gray-700 text-center">
        My list
      </h3>
      <h3 className="p-3 hover:bg-gray-700 text-center">
        Brows by languages
      </h3>
    </section>
  )
}

export default MobileMenu