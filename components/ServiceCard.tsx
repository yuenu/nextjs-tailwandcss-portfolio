
import React from 'react'
import type { IServices } from '../type'

type Props = {
  service: IServices
}

const ServiceCard: React.FC<Props> = ({ service: { Icon, title, about } }) => {

  const createMarkup = () => {
    return {
      __html: about
    }
  }
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}
export default ServiceCard