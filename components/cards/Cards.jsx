import Card from "../card/Card"
import data from "../Store/data/data"

function Cards() {
  return (
    <div className="para xl:grid xl:grid-cols-3 gap-8">
      {data.cards.map(({ title, name, image, company }) => (
        <div key={image}>
          <Card title={title} name={name} image={image} company={company} />
          </div>
      ))}
    </div>
  )
}

export default Cards