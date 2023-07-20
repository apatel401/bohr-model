import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import {  createRoot } from 'react-dom/client';
import { Canvas } from "@react-three/fiber";
// import './styles.scss';

import App from './App';

console.group('%%%PACKAGE_NAME%%% v%%%PACKAGE_VERSION%%%');/*RemoveLogging:skip*/
console.log('using React v' + React.version);/*RemoveLogging:skip*/
console.log('using ReactDOM v' + ReactDOM.version);/*RemoveLogging:skip*/
console.groupEnd();/*RemoveLogging:skip*/

document.querySelectorAll('.root')
    .forEach((domContainer, index) => {
        // Read the config from a data-* attribute.
        const _configFile = domContainer.dataset.config;
        let _config = [];
        let _tfc = '';
        let root = createRoot(domContainer);
        //get the json file
        fetch(_configFile)
            .then(res => res.json())
            .then( result => {

                _config = result; 
        
            }).then(() => { // wait until we're ready to pass in our config 
                              
                if (_config !== undefined && _config !== '') {
                    _tfc =
                    <StrictMode>
                        {/* <Canvas> */}
                        <App config={_config} />
                        {/* </Canvas> */}
                  </StrictMode>
                }
                root.render(_tfc);

            })
            .catch(error => {
                console.error('There was an error!', error);
                _tfc = <div class='warn'>missing config</div>
                root.render(_tfc);
            })
    });