import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setCrop } from '../actions';

class CropSelect extends Component {
    change = (event) => {
        const {onChange, crops} = this.props;
        onChange(crops.find(crop => crop.name === event.target.value));
    };

    render() {
        let {value, crops} = this.props;

        return (
            <select onChange={this.change} value={value.name}>
                <option value='' key=''>none</option>)}
            {crops.map(crop =>
                <option value={crop.id} key={crop.name}>{crop.name}</option>)}
            </select>);
    }
}

CropSelect = connect(
    ({ cropsState}) => ({ crops: cropsState.crops}),
    { setCrop }
)(CropSelect);

export default CropSelect;