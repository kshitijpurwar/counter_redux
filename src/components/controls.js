import React from 'react';
import updateCount from '../actions';
import { connect } from 'react-redux';

const Controls = ({ count, updateCount  }) => {
    return (    
        <div>
            <button
                onClick={() => updateCount(1)}
                disabled={count > 9}
                >
                Add  1
            </button>

            <button 
                onClick={() => updateCount(-1)}
                disabled={count < -9}
                >
                Subtract 1
            </button>

        </div>
    );
}

const mapStateToProps = state => {
    return { count: state }
}

export default connect(mapStateToProps, { updateCount })(Controls);