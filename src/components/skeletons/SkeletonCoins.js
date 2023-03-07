import React from 'react';
import SkeletonElements from './SkeletonElements';
import './SkeletonElements.css'

const SkeletonCoins = () => {
    return (
        <div>
            <div class='coinContainer' >
                <div class='container'>  
                    <SkeletonElements type="thumbnail" />
                    <SkeletonElements type="title" />
                    <SkeletonElements type="title" />
                    <SkeletonElements type="title" />
                    <SkeletonElements type="avatar" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCoins;