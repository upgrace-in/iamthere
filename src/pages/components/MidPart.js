export default function MidPart(props) {
    return (

        <div id="div2" className='midCon'>
            {props.arr !== undefined
                ?
                <>
                    <h3>{props.arr[0]}</h3>
                    <br />
                    <span className="ansText">{props.arr[1]}</span>
                </>
                :
                ""
            }
        </div >

    )
}