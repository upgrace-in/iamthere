import History from "./History"

export default function TopPart(props) {
    return (
        <div id="div1" className='topCon'>
            <div style={{ display: 'flex' }}>
                <div style={{ width: 50 + '%' }}>
                    <div className='logo'>
                        <h3>iamthere.ai</h3>
                    </div>
                </div>
                <div style={{ width: 50 + '%' }}>
                    <div className='cr circleBorder discord ml-auto text-center'>
                        <i className='fab fa-discord'></i>
                    </div>
                </div>
            </div>

            <div className='histories myRow'>
                <div className='cr btnCon newChatBTN'>
                    <div onClick={() => props.setarr([])} className='btnCon3 mx-auto text-center'>
                        <i className='fas fa-plus'></i>&nbsp;&nbsp;<span>New chat</span>
                    </div>
                </div>
                {
                    (props.dict !== undefined) && (props.dict !== null)
                        ?
                        props.dict.map((val, i) => {
                            return <History key={i} setarr={props.setarr} dict={props.dict} index={i} question={val[0]} />
                        })
                        :
                        ""
                }
            </div>
        </div>
    )
}