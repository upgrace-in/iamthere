export default function History(props) {
    return (
        <div className='cr historyBOX'>
            <div onClick={() => props.setarr(props.dict[props.index])} className='btnCon2 mx-auto'>
                <span>{props.question}</span>
            </div>
        </div>
    )
}