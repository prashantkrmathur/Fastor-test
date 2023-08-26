/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;


const ResturantData = (props) => {
  const { name, address, image_url, cost, rating } = props
  const { url } = image_url;

  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
          margin: "1em"
        }}
        cover={<img alt="resturant-image" src={url} />}
      >
        <div>
          <h4>Resturant name : {name}</h4>
          <h5>Address : {address}</h5>
          <h5>Cost for two : {cost}</h5>
          <h5>Average Rating: {rating }</h5>
        </div>
      </Card>
    </div>
  )
}

export default ResturantData
