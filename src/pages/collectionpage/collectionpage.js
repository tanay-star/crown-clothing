import React from 'react'
import './collectionpage.styles.scss'
//importing components
import CollectionItem from '../../components/collection-item/collection-item'
//connecting to redux store
import { connect } from 'react-redux'
//importing selectors
import { selectCollection } from '../../redux/shop/shop-selectors'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  }
}

export default connect(mapStateToProps, null)(CollectionPage)
