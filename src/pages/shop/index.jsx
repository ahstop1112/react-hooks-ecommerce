import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/utils';
import { updateCollections } from '../../redux/shop/shopAction';
import WithSpinner from '../../components/WithSpinner';
import CollectionsOverview from '../../components/CollectionsOverview';
import CollectionPage from '../collection';

const CollectionOveriewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapShot = null;

    componentDidMount(){
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
            // console.log(collectionsMap);
        })
    }

    render() { 
        const { match } = this.props;
        const { loading } = this.state;

        return ( 
            <div className='shop-page'>

                <Route exact path={`${match.path}`} render={(props) => <CollectionOveriewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
  
export default connect(
    null,
    mapDispatchToProps
  )(ShopPage);