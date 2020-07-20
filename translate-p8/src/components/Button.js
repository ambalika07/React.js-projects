import React from 'react';
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    //static contextType = LanguageContext; // hooking context object to class component

    render() {
        //console.log(this.context)
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return( 
            <ColorContext.Consumer>
            {(color)=> 
                             <button className={`ui button ${color}`}>
                             <LanguageContext.Consumer>
                                 {(value)=> value === 'english' ? 'Submit' : 'Voorleggen' }
                             </LanguageContext.Consumer>
                             </button>
            }

            </ColorContext.Consumer>)
    }
}

//Button.contextType = LanguageContext

export default Button;