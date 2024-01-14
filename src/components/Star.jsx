/* eslint-disable react/prop-types */
import starSvg from '../assets/star.svg'

const Star = ({ s }) => {
  return (
    <div className="flex items-center space-x-1">
      {new Array(s).fill(1).map((i, k) => (
        <img src={starSvg} key={k} />
      ))}

      <span className="text-xs lg:text-sm">({s} Star)</span>
    </div>
  )
}

export default Star
