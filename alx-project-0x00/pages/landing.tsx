import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Button title="Small" styles="text-sm px-2 py-1 rounded-sm m-4" />
      <Button title="Medium" styles="text-base px-4 py-2 rounded-md m-4" />
      <Button title="Medium" styles="text-base px-4 py-2 rounded-lg m-4" />
      <Button title="Large" styles="text-lg px-6 py-3 rounded-full m-4" />
    </div>
  )
}
export default Landing