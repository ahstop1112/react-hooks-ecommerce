import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shopSelector';
import { CollectionOverviewContainer } from './style';

const CollectionsOverview = ({ collections }) => ( 
    <CollectionOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionOverviewContainer>
);
 
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
}) 

export default connect(mapStateToProps)(CollectionsOverview);