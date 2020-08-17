import React from 'react';
import Loading from '../../../assets/images/loading.gif';
import './loading.css';

const Index = () => {
    return (
        <div
            className="text-center loading-component"
        >
                <img src={Loading} alt={'loading image'} />
        </div>
    );
};

export default Index;