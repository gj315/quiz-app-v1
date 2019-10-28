import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', '']
        }

        this.checkAnswer = this.checkAnswer.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            classNames: nextProps.classNames,
        });
    }
    checkAnswer(e) {
        let { isAnswered } = this.props;

        if (!isAnswered) {

            let elem = e.currentTarget;
            let { correct, increaseScore, wrongAttemp } = this.props;
            let answer = Number(elem.dataset.id);

            let updatedClassNames = this.state.classNames;
            let optionChoosenValue = false;

            if (answer === correct) {
                updatedClassNames[answer - 1] = 'right';
                optionChoosenValue = true;
                increaseScore();
            } else {
                updatedClassNames[answer - 1] = 'wrong';
                optionChoosenValue = false;
                wrongAttemp();
            }

            this.setState({
                classNames: updatedClassNames
            })

            this.props.showButton(optionChoosenValue);
        }
    }

    render() {
        let { answers } = this.props;
        const optionTypes = ['A', 'B', 'C', 'D'];
        let { classNames } = this.state;
        
        return (
            <div id="answers">
                <ul>
                    {answers.map((answer, idx) => (
                        <li onClick={this.checkAnswer} key={idx} className={classNames[idx]} data-id={idx+1} ><span>{optionTypes[idx]}</span> <p>{answer}</p></li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Answers