import React from 'react';

const Theory = () => {
    return (
        <div>
            <div>
                <h1>Props vs State</h1>
                <p>In Props, The Data is passed from one component to another <br />
                    In State,The Data is passed within the component only.</p>
                <p>
                    Props is Immutable (cannot be modified). <br /> State is Mutable ( can be modified).
                </p>
                <p>
                    Props are read-only. <br />	State is both read and write.
                </p>
            </div>
            <div>
                <h1>How React works?</h1>
                <p>React creates an extra copy of DOM which is called Virtual DOM.When any changes occurs it compares the virtual dom with the browser's Dom.Then it updates only that state where changes has been occured rather changing the whole DOM. <br />
                    As a result, browser doesn't need to do unnecessary cycling of complete DOM which involves a lot of mathematical and other calculations. <br />
                    It helps to increase the speed of execution and reduce the complexity of coding.

                </p>
            </div>
        </div >
    );
};

export default Theory;