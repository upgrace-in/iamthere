export default function Question(props) {
    return (
        <div className='questionBOX'>
            <div className='row'>
                <div className='col boxStyle question'>
                    <h5>{props.question}</h5>
                </div>
                <div className='col microphone'>
                    <i className='fas fa-microphone'></i>
                </div>
            </div>
            <hr />
            <div className='row answerBOX'>
                <div className='col microphone'>
                    <i className='fas fa-microphone'></i>
                </div>
                <div className='boxStyle answer'>
                    <h5>{props.answer}</h5>
                </div>
            </div>
        </div>
    )
}