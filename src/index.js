import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





// <div className="board-row">
// <button className="squareCSS" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
// <button className="squareCSS" name='2' onClick={e => this.props.onClick(e.target.name)}>2</button>
// <button className="squareCSS" name='3' onClick={e => this.props.onClick(e.target.name)}>3</button>
// </div>

// <div className="board-row">
// <button className="squareCSS" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
// <button className="squareCSS" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
// <button className="squareCSS" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
// <div className="board-row">
// </div>

// <div className="board-row">
// <button className="squareCSS" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
// <button className="squareCSS" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
// <button className="squareCSS" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
// </div>

// <br></br>

// <div className="board-row">
// <button className="squareOperators" name='+' onClick={e => this.props.onClick(e.target.name)}>+</button>
// <button name="-" className="squareOperators" onClick={e => this.props.onClick(e.target.name)}>-</button><br />
// <button className="squareOperators">÷</button>
// <button className="squareOperators">%</button>
// <button className="squareOperators">(</button>
// <button className="squareOperators">)</button>
// </div>

// <div className="board-row">
// <button className="squareOperators">√</button>
// <button className="squareCE" name='CE' onClick={e => this.props.onClick(e.target.name)}>CE</button>
// <button className="squareEqual" name='=' onClick={e => this.props.onClick(e.target.name)}>=</button>
// </div>  

function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0)
        return -1;

    // If the number is 0, its factorial is 1.
    else if (num === 0)
        return 1;

    // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
    }
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
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "CE") {
            this.reset()
        }
        // else if(button === "CE"){
        //     this.backspace()
        // }

        else {
            this.setState({
                resultPROP: this.state.resultPROP + button
            })
        }
    };


    calculate = () => {
        var isResultGarage = ''

        if (this.state.resultPROP.includes('--')) {
            isResultGarage = this.state.resultPROP.replace('--', '+')
        }

        else if (this.state.resultPROP.includes('%')) {
            isResultGarage = this.state.resultPROP.replace('%', '*100')
        }

        else if (this.state.resultPROP.includes('π')) {
            isResultGarage = this.state.resultPROP.replace('*π', '').replace('π', '') * Math.PI
        }

        else if (this.state.resultPROP.includes('log')) {
            isResultGarage = Math.log(this.state.resultPROP.replace('log', '').replace(/^\(/g, '').replace(/\)$/g, ''))
        }

        else if (this.state.resultPROP.includes('abs')) {
            isResultGarage = Math.abs(this.state.resultPROP.replace('abs', '').replace(/\|/g, ''))
        }

        // else if (this.state.resultPROP.includes('ln')) {
        //   isResultGarage = Math.LN10(this.state.resultPROP.replace('ln', ''))
        // }

        else if (this.state.resultPROP.includes('sin')) {
            isResultGarage = Math.sin(this.state.resultPROP.replace('sin', ''))
        }

        else if (this.state.resultPROP.includes('cos')) {
            isResultGarage = Math.cos(this.state.resultPROP.replace('cos', ''))
        }

        else if (this.state.resultPROP.includes('tan')) {
            isResultGarage = Math.tan(this.state.resultPROP.replace('tan', ''))
        }


        // else if (this.state.resultPROP.includes('ln')) {
        // isResultGarage = Math.ln(this.state.resultPROP.replace('ln', ''))
        // }

        // else if (this.state.resultPROP.includes('log')) {
        // isResultGarage = Math.log(this.state.resultPROP.replace('\\([[:digit:]]\\)|log', ''))
        // }

        else if (this.state.resultPROP.includes('√')) {
            isResultGarage = Math.sqrt(this.state.resultPROP.replace('√', ''))
        }

        else if (this.state.resultPROP.includes('²')) {
            isResultGarage = this.state.resultPROP.replace('²', '') * this.state.resultPROP.replace('²', '')
        }

        else if (this.state.resultPROP.includes('!')) {
            isResultGarage = factorialize(this.state.resultPROP.replace('!', ''))
        }

        else {
            isResultGarage = this.state.resultPROP
        }

        try {
            this.setState({
                // eslint-disable-next-line
                resultPROP: ((eval(isResultGarage) || "") + "").replace(/^$/, 0)
            })


        } catch (e) {
            this.setState({
                resultPROP: "Oh crap! You literally broke it"
            })

        }
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
                    <h1>srhoads' calculator</h1>
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
//     var isResultGarage = ''
//     if(this.state.resultPROP.includes('--')){
//         isResultGarage = this.state.resultPROP.replace('--','+')
//     }

//     else {
//         isResultGarage = this.state.resultPROP
//     }

//     try {
//       this.setState({
//         // eslint-disable-next-line
//         resultPROP: (eval(isResultGarage) || "") + ""
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
