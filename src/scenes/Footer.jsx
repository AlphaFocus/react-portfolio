import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto font-playfair text-yellow">
        <SocialMediaIcons/>
        <div className="md:flex justify-center md:justify-between text-center">
          <p className=" font-semibold text-2xl">JANE ESPER</p>
          <p className="font-playfair text-md">©2022 ESPER. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer