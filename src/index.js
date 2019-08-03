import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
NOTES: (+ potentially Qs for alejandro)

- For stuff like log(num), I wanna use a regular expression to capture & erase the log() part, without erasing the digit within, but idk the regex in node js
- Use text input IN ADDITION to button input, so like typing nums or deleting them & stuff, and updating the input dynamically
- why does it seem like I need to have my board react component class (BoardRC) start with a capital letter? Am i delusional or does it muck up when it's a lowercase b?
- what are the based regex-ish syntaxes for operations like .replace() & stuff? 
    ˚ie: "|" vs "||" or "\b" or "[[:alpha:]]" or "^$" or "\\<\\>" & more that seem not to work the same way as they do in Python & R
- besides inside react component classes, is render() used for anything else ever?

- why do some people's apps have "export" instead of extend React.Com... & sometimes export is at the end. 
    ˚ it seems like export is used when another script wants to source that given module
- when do things need to be inside a component & when not? ie: the factorial fxn right below this
    */

function factorialFXN(num) {
    if (num < 0) return ((num * -1) * factorialFXN((num * -1) - 1)) * -1; //return -1;  // If the number is less than 0, reject it.
    else if (num === 0 || num === '0') return 1; // factorial of 0 is 1
    else return (num * factorialFXN(num - 1));
}


class BoardRC extends React.Component {

    render() {
        return (
            <div>

                <div className="boardRowCSS">
                    <button className="squareCSS" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button className="squareCSS" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button className="squareCSS" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                </div>

                <div className="boardRowCSS">
                    <button className="squareCSS" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button className="squareCSS" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button className="squareCSS" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                </div>

                <div className="boardRowCSS">
                    <button className="squareCSS" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button className="squareCSS" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button className="squareCSS" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                </div>

                <div className="boardRowCSS">
                    <button className="sideofsquareCSS" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button className="sideofsquareCSS" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                    <button className="squareCSS" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button className="sideofsquareCSS" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                    <button className="sideofsquareCSS" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                </div>

                <div className="boardRowCSS">
                    <button className="sideofsquareCSS" name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                    <button className="sideofsquareCSS" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button className="sideofsquareCSS" name="!" onClick={e => this.props.onClick(e.target.name)}>!</button>
                    <button className="sideofsquareCSS" name=" abs" onClick={e => this.props.onClick(e.target.name)}>|abs|</button>
                    <button className="sideofsquareCSS" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                    <button className="sideofsquareCSS" name="÷" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                </div>

                <div className="boardRowCSS">
                    <button className="sideofsquareCSS" name="√" onClick={e => this.props.onClick(e.target.name)}>√</button>
                    <button className="sideofsquareCSS" name="²" onClick={e => this.props.onClick(e.target.name)}>__²</button>
                    <button className="sideofsquareCSS" name="log" onClick={e => this.props.onClick(e.target.name)}>log</button>
                    <button className="sideofsquareCSS" name="π" onClick={e => this.props.onClick(e.target.name)}>π</button>
                    <button className="squareEqual" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                </div>

                <div className="boardRowCSS">
                    <button className="sideofsquareCSS" name="sin" onClick={e => this.props.onClick(e.target.name)}>sin</button>
                    <button className="sideofsquareCSS" name="cos" onClick={e => this.props.onClick(e.target.name)}>cos</button>
                    <button className="sideofsquareCSS" name="tan" onClick={e => this.props.onClick(e.target.name)}>tan</button>
                    {/* <button className="sideofsquareCSS" name="ln" onClick={e => this.props.onClick(e.target.name)}>ln</button> */}
                          {/* <button className="sideofsquareCSS" name="." onClick={e => this.props.onClick(e.target.name)}>.</button> */}
                    <button className="squareCE" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                </div>
                <div className="boardRowCSS"> 
                    {/* <input className="squareInputCalculations" type="text" name="title" value={this.state.value} onChange={this.handleChange}></input> */}
                    {/* <input className="squareInputCalculations" type="text" name="title" onChange={e => this.props.onChange(e.target.name)}></input> */}
                </div>

            </div>
        );
    }
}






class ResultRC extends React.Component {


    render() {
        let { resultPROP } = this.props;
        return (
            <div className="resultCSS">
                <p>{resultPROP}</p>
            </div>
        )
            ;
    }
}




class App extends React.Component {
    constructor() {
        super(); // @ alejandro: why is it sometimes super(props)? is that when it's this.props, not this.state? that confuses me

        this.state = {
            resultPROP: ""
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    onClick = button => {

        if (button === "=") this.calculateFXN()

        else if (button === "CE") this.resetFXN()
        
        else {
            this.setState({
                resultPROP: this.state.resultPROP + button
            })
        }
    };

    // handleChange(event) {
    //     this.setState({ resultPROP: event.target.resultPROP });
    // }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.resultPROP);
    //     event.preventDefault();
    // }

    // calculateFXNtxt = () => {
    //     var isResultGarbage = ''
    // }


    calculateFXN = () => {
        var isResultGarbage = '' // i understand why we're not using const

        if (this.state.resultPROP.includes('--')) {
            isResultGarbage = this.state.resultPROP.replace('--', '+')
        }

        else if (this.state.resultPROP.includes('%')) {
            isResultGarbage = this.state.resultPROP.replace('%', '*100')
        }

        else if (this.state.resultPROP.includes('÷')) {
            isResultGarbage = this.state.resultPROP.replace('÷', '/')
        }

        // not super pleased with this pi guy vv
        else if (this.state.resultPROP.includes('π')) {
            isResultGarbage = this.state.resultPROP.replace('*π', '').replace('π', '') * Math.PI
        }

        // I don't really think this is working below vv. -- i want it to remove parentheses if theyre at the beginning or end of the string. 
        // but that's a problem bc i evaluate them separately, when I really need to have them as a conjunctive event or else it might mess up parentheses in general in the string
        else if (this.state.resultPROP.includes('log')) {
            isResultGarbage = Math.log(this.state.resultPROP.replace('log', '').replace(/^\(/g, '').replace(/\)$/g, ''))
        }

        else if (this.state.resultPROP.includes('abs')) {
            isResultGarbage = Math.abs(this.state.resultPROP.replace('abs', '').replace(/\|/g, ''))
        }

        // else if (this.state.resultPROP.includes('ln')) {
        //   isResultGarbage = Math.LN10(this.state.resultPROP.replace('ln', ''))
        // }

        else if (this.state.resultPROP.includes('sin')) {
            isResultGarbage = Math.sin(this.state.resultPROP.replace('sin', ''))
        }

        else if (this.state.resultPROP.includes('cos')) {
            isResultGarbage = Math.cos(this.state.resultPROP.replace('cos', ''))
        }

        else if (this.state.resultPROP.includes('tan')) {
            isResultGarbage = Math.tan(this.state.resultPROP.replace('tan', ''))
        }

        // else if (this.state.resultPROP.includes('log')) {
        // isResultGarbage = Math.log(this.state.resultPROP.replace('\\([[:digit:]]\\)|log', ''))
        // }

        else if (this.state.resultPROP.includes('√')) {
            isResultGarbage = Math.sqrt(this.state.resultPROP.replace('√', ''))
        }

        else if (this.state.resultPROP.includes('²')) {
            isResultGarbage = this.state.resultPROP.replace('²', '') * this.state.resultPROP.replace('²', '')
        }

        else if (this.state.resultPROP.includes('!')) {
            isResultGarbage = factorialFXN(this.state.resultPROP.replace('!', ''))
        }

        else {
            isResultGarbage = this.state.resultPROP
        }


        try {
            this.setState({
                // i wrote the replace thing at the end, but i got the logic for the eval part from something online (maybe alejandro knows)
                //   ˚ and i don't really know why we have: || "") + "")
                // why does that vv suppress the danger message, alejandro?
                // eslint-disable-next-line
               resultPROP: ((eval(isResultGarbage) || "") + "").replace(/^$/, 0)
            }) // Line 230:  eval can be harmful  no-eval

        } catch (e) {
            this.setState({
                resultPROP: "Oh crap! You literally broke it"
            })
        }

        // below I wanted to do text input & I was just trying random stuff
        //  since i dont know javascript's whole personality w/ all its quirks, i have trouble writing stuff that doesn't fail
        
        // if(button === null && input != null){
        //     this.setState({
        //         resultPROP: input
        //     })
        // }

        
    };

    resetFXN = () => {
        this.setState({
            resultPROP: ""
        })
    };

    render() {
        return (
            <div>
                <div className="calcbodCSS">
                    <h2>srhoads' calculator!</h2>
                    <ResultRC resultPROP={this.state.resultPROP} />
                    <BoardRC onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default App;



ReactDOM.render(
    <App />,
    document.getElementById('root') // @ alejandro what is it doing with 'root'? why?
);


















