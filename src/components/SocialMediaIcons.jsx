import React from 'react'

const SocialMediaIcons = () => {
  const Link = ({link}) => {
    return (
      <a
      className='hover:opacity-50 transition duration-500'
      href={`https://www.${link}.com`}
      target="_blank" rel="noreferrer"
      >
        <img src={`../assets/${link}.png`} alt={`${link}-link`} />
      </a>
    )
  }

  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <Link link="linkedin"/>
      <Link link="twitter"/>
      <Link link="facebook"/>
      <Link link="instagram"/>
    </div>
  )
}

export default SocialMediaIcons