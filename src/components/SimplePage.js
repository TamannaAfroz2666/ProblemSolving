import React from 'react';
import './SimplePage.css';

const SimplePage = () => {
    return (
        <div>
            <div className='formContainer'>
                <div className="formContainerMain">
                    <form action="">
                        <div className="nameCon">
                            <input type="text" name='' placeholder='name' className='nameField' id='nameField' />
                        </div>
                        <div className="ageCon">
                            <input type="text" name='' placeholder='age' className='nameField' id='nameField' />

                        </div>
                        <div className="homeCon">
                            <input type="text" name='' placeholder='home' className='nameField' id='nameField' />
                        </div> 
                        <div className="btnCon">
                        <button>submit</button>

                        </div>
                        
                    </form>

                </div>


            </div>
        </div>
    );
};

export default SimplePage;