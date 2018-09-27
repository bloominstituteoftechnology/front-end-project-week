import React from 'react';
import styled from 'styled-components';

const PgeCtnr = styled.div`
    width: 100%;
    margin: auto;
`;

const NtsIdvCtnr = styled.div`
    width: 65%;
    margin: 0 auto;
    text-align: center;
`;

const NtsIdvCntCtnr = styled.div`
    padding: 3%;
    margin: 2%;
`;

const NtsIdvHdr = styled.h1`
    margin: 5%;
    font-size: 2rem;
    font-weight: 700;
`;

const NtsIdvCnt = styled.p`
    margin: 5%;
    font-size: 1.6rem;
`;

const NtsIdvEdt = styled.button`
    background-color: #008CBA; /* Blue */
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 2%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    :hover {
        background-color: white;
        color: #008CBA;
        cursor: pointer;
    }
`;

// const NtsIdvRmv = styled.button`
//     background-color: #f44336; /* Red */
//     border: none;
//     color: white;
//     padding: 15px 32px;
//     margin: 2%;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;

//     :hover {
//         background-color: white;
//         color: #f44336;
//         cursor: pointer;
//     }
// `;

 const NtsIdv = (props) => {
     console.log(props);
    console.log(props.nts_idv);
    //  const hdldltfn = () => {
    //      props.hdldltnt(props.nts_idv._id);
    //      props.history.push("/nts")
    //  };

     if (props.nts_fthg || props.nts_arr.length === 0) {
         return <h2>Loading...</h2>
     }
  return (
      <PgeCtnr>
        <NtsIdvCtnr>
            <NtsIdvCntCtnr>
            <NtsIdvHdr>{props.nts_idv.title}</NtsIdvHdr>
            <NtsIdvCnt>{props.nts_idv.textBody}</NtsIdvCnt>
            </NtsIdvCntCtnr>
            <NtsIdvEdt onClick={(event) => {
                event.preventDefault();
                props.redrtfrm(event, props.nts_idv._id);
            }}>Edit</NtsIdvEdt>
            {/* <NtsIdvRmv onClick={hdldltfn}>Remove</NtsIdvRmv> */}
        </NtsIdvCtnr>
    </PgeCtnr>
  )
}

export default NtsIdv;