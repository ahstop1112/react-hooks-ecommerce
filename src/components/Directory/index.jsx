import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector'
import MenuItem from '../MenuItem';
import { DirectoryMenuContainer } from './style';

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {sections.length > 0 && sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
}) 

export default connect(
    mapStateToProps
)(Directory);