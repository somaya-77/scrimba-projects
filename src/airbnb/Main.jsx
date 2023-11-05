import Card from "./Card";

export default function Main() {
  return (
    <div className="main">
      <Card src='airbnb/image 12.png' title="sold out" star='0.5' num='6' details='Life lessons with Katie Zaferes' price="136" />

      <Card src='airbnb/wedding-photography 1.png' title="onlin" star='0.5' num='30' details='Learn wedding photography' price="125" />

      <Card src='airbnb/mountain-bike 1.png' title="sold out" star='4.8' num='2' details='Group Mountain Biking' price="50" />
    </div>
  )
}
