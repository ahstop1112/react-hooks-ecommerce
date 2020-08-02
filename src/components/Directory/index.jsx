import React, { Component } from 'react';
import MenuItem from '../MenuItem';
import { sections } from '../../data/directory';
import './style.scss';

class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections: sections
        }
    }

    render() { 

        const { sections } = this.state;

        return (
            <div className="directory-menu">
                {sections.length > 0 && sections.map ((item, index) => 
                    <MenuItem key={index} 
                        title={item.title} 
                        imageUrl={item.imageUrl} 
                        size={item.size}
                    />
                )}
            </div>
        );
    }
}
 
export default Directory;