import Image from 'next/image'

export default function MidPart(props) {
    return (

        <div id="div2" className='midCon'>
            {
                props.arr !== undefined
                    ?
                    <div>
                        <h3>{props.arr[0]}</h3>
                        <br />
                        <span className="ansText">{props.arr[1]}</span>
                    </div>
                    :
                    ""
            }
            {

                props.processing ?
                    <>
                        <br />
                        <img className='container mx-auto text-center' src="/process.gif" width="45" height="45" alt="No Icon" />
                    </>
                    : ""
            }
        </div >

    )
}