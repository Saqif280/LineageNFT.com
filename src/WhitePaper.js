import React from 'react';

const __html = require('./WhitePaper.html.js');
const WhitePaper = () => {
  return (
    <>
      <div className='section'>
        <div className='content'>
          <div className='container-fluid'>
            <div className='col-sm-12 whitepaper' dangerouslySetInnerHTML={{ __html: __html }}>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default WhitePaper;
