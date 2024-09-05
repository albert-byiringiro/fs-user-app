export default function Navbar() {
  return (
    <nav className='flex justify-between border-y-2 border-gray-200 py-4'>
      <h1 className="font-semibold">HeroesHQ</h1>
      <ul className="flex items-center justify-center gap-8">
        <li className="">Features</li>
        <li className="">Pricing</li>
        <li className="">Login</li>
      </ul>
    </nav>
  )
}