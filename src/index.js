import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
NOTES:

- For stuff like log(num), I wanna use a regular expression to capture & erase the log() part, without erasing the digit within, but idk the regex in node js
- Use text input IN ADDITION to button input, so like typing nums or deleting them & stuff, and updating the input dynamically

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

                <div className="board-row">
                    <button className="squareCSS" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button className="squareCSS" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button className="squareCSS" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                </div>

                <div className="board-row">
                    <button className="squareCSS" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button className="squareCSS" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button className="squareCSS" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                </div>

                <div className="board-row">
                    <button className="squareCSS" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button className="squareCSS" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button className="squareCSS" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                </div>

                <div className="board-row">
                    <button className="sideofsquareCSS" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button className="sideofsquareCSS" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                    <button className="squareCSS" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button className="sideofsquareCSS" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                    <button className="sideofsquareCSS" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                </div>

                <div className="board-row">
                    <button className="sideofsquareCSS" name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                    <button className="sideofsquareCSS" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button className="sideofsquareCSS" name="!" onClick={e => this.props.onClick(e.target.name)}>!</button>
                    <button className="sideofsquareCSS" name=" abs" onClick={e => this.props.onClick(e.target.name)}>|abs|</button>
                    {/* </div>

        <div className="board-row"> */}
                    <button className="sideofsquareCSS" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                    <button className="sideofsquareCSS" name="÷" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                </div>

                <div className="board-row">
                    <button className="sideofsquareCSS" name="√" onClick={e => this.props.onClick(e.target.name)}>√</button>
                    <button className="sideofsquareCSS" name="²" onClick={e => this.props.onClick(e.target.name)}>__²</button>
                    <button className="sideofsquareCSS" name="log" onClick={e => this.props.onClick(e.target.name)}>log</button>
                    <button className="sideofsquareCSS" name="π" onClick={e => this.props.onClick(e.target.name)}>π</button>
                    <button className="squareEqual" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                </div>
                

                <div className="board-row">
                    <button className="sideofsquareCSS" name="sin" onClick={e => this.props.onClick(e.target.name)}>sin</button>
                    <button className="sideofsquareCSS" name="cos" onClick={e => this.props.onClick(e.target.name)}>cos</button>
                    <button className="sideofsquareCSS" name="tan" onClick={e => this.props.onClick(e.target.name)}>tan</button>
                    {/* <button className="sideofsquareCSS" name="ln" onClick={e => this.props.onClick(e.target.name)}>ln</button> */}
                          {/* <button className="sideofsquareCSS" name="." onClick={e => this.props.onClick(e.target.name)}>.</button> */}
                    <button className="squareCE" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                </div>
                <div className="board-row"> 
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
        super();

        this.state = {
            resultPROP: ""
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    onClick = button => {

        if (button === "=") this.calculate()

        else if (button === "CE") this.reset()
        
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



    // calculatetxt = () => {
    //     var isResultGarbage = ''

    // }


    calculate = () => {
        var isResultGarbage = ''

        if (this.state.resultPROP.includes('--')) {
            isResultGarbage = this.state.resultPROP.replace('--', '+')
        }

        else if (this.state.resultPROP.includes('%')) {
            isResultGarbage = this.state.resultPROP.replace('%', '*100')
        }

        else if (this.state.resultPROP.includes('π')) {
            isResultGarbage = this.state.resultPROP.replace('*π', '').replace('π', '') * Math.PI
        }

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


        // else if (this.state.resultPROP.includes('ln')) {
        // isResultGarbage = Math.ln(this.state.resultPROP.replace('ln', ''))
        // }

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
                // eslint-disable-next-line
                resultPROP: ((eval(isResultGarbage) || "") + "").replace(/^$/, 0)
            })

        } catch (e) {
            this.setState({
                resultPROP: "Oh crap! You literally broke it"
            })
        }

        // if(button === null && input != null){
        //     this.setState({
        //         resultPROP: input
        //     })
        // }

        
    };

    reset = () => {
        this.setState({
            resultPROP: ""
        })
    };

    // backspace = () => {
    //     this.setState({
    //         resultPROP: this.state.resultPROP.slice(0, -1)
    //     })
    // };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>srhoads' calculator!</h1>
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
    document.getElementById('root')
);






















// // ----- LIBRARIES: ----------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// class BoardRC extends React.Component { // DATA GETS PASSED FROM BOARD TO SQUARE


//   render() {
//     // const status = "srhoads' calculator!"; // const cat = <b>{`This is cat text ${2 + 1}`}</b>;
//     // let catpoop = "cleanlitter!"; // const cat = <b>{`This is cat text ${2 + 1}`}</b>;
//     return (
//       <div>
//         <div className="statusCSS">srhoads' calculator!</div>

//         <br></br>

//         <div className="board-row">
//           <button className="squareCSS" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
//           <button className="squareCSS" name='2' onClick={e => this.props.onClick(e.target.name)}>2</button>
//           <button className="squareCSS" name='3' onClick={e => this.props.onClick(e.target.name)}>3</button>
//         </div>

//         <div className="board-row">
//           <button className="squareCSS" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
//           <button className="squareCSS" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
//           <button className="squareCSS" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
//           <div className="board-row">
//           </div>

//           <button className="squareCSS" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
//           <button className="squareCSS" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
//           <button className="squareCSS" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
//         </div>
//         <br></br>
//         <div className="board-row">
//           <button className="squareOperators" name='+' onClick={e => this.props.onClick(e.target.name)}>+</button>
//           <button name="-" className="squareOperators" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>
//           <button className="squareOperators">÷</button>
//           <button className="squareOperators">%</button>
//           <button className="squareOperators">(</button>
//           <button className="squareOperators">)</button>
//         </div>
//         <div className="board-row">
//           <button className="squareOperators">√</button>
//           <button className="squareCE" name='CE' onClick={e => this.props.onClick(e.target.name)}>CE</button>
//           <button className="squareEqual" name='=' onClick={e => this.props.onClick(e.target.name)}>=</button>
//         </div>
//       </div>
//     );
//   }
// }



// class resultDisplayRC extends React.Component {
//   render() {
//     let { resultPROP } = this.props;
//     return (<div className='resultCSS'>
//       <p>{resultPROP}</p>
//     </div>)
//   }
// }



// class GameRC extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       resultPROP: ""
//     }
//   }


//   onClick = button => {

//     if(button === "="){
//       this.calculateFXN()
//     }

//     else if(button === "CE"){
//       this.reset()
//     }

//     else {
//       this.setState({
//         resultPROP: this.state.resultPROP + button
//       })
//     }
//   };


//   calculateFXN = () => {
//     var isResultGarbage = ''
//     if(this.state.resultPROP.includes('--')){
//         isResultGarbage = this.state.resultPROP.replace('--','+')
//     }

//     else {
//         isResultGarbage = this.state.resultPROP
//     }

//     try {
//       this.setState({
//         // eslint-disable-next-line
//         resultPROP: (eval(isResultGarbage) || "") + ""
//       })
//     } catch (e) {
//       this.setState({
//         resultPROP: "error"
//       })
//     }
//   };


//   // calculateFXN = () => {
//   //   try {
//   //     this.setState({
//   //       resultPROP: (eval(this.state.resultPROP) || "") + ""
//   //     })
//   //     } catch (e){
//   //       this.setState({
//   //         error: "error"
//   //       })
//   //     }
//   //   };



//   resetFXN = () => {
//     this.setState({
//       resultPROP: ""
//     })
//   };

//   render() {
//     return (
//       <div className="overallappCSS">
//         <div className="game-board">
//           <resultDisplayRC resultPROP={this.state.resultPROP}/>
//           <BoardRC onClick={this.onClick}/>
//         </div>
//         <div className="game-info">
//         </div>
//       </div>
//     );
//   }
// }

// // --------------------------------------

// ReactDOM.render(
//   <GameRC />,
//   document.getElementById('root')
// );
